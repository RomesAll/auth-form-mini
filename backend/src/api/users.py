from fastapi import APIRouter, Request, Response, Depends, HTTPException
import jwt
from schemas import *
from core import UsersService
from core import settings
router = APIRouter()

def access_token_required(request: Request):
    try:
        payload = jwt.decode(request.cookies.get(settings.auth.config.JWT_ACCESS_COOKIE_NAME), settings.auth.config.JWT_SECRET_KEY, algorithms=[settings.auth.config.JWT_ALGORITHM])  
        return payload  
    except jwt.ExpiredSignatureError:  
        raise HTTPException(status_code=401, detail="Token has expired")  
    except jwt.InvalidTokenError:  
        raise HTTPException(status_code=401, detail="Invalid token")  

@router.get('/all', summary='Вывести всех пользователей', dependencies=[Depends(access_token_required)])
async def select_users():
    users = await UsersService.service_select_users()
    if not users:
        raise HTTPException(status_code=406, detail='No content found')
    return users

@router.post('/registrations', summary='Регистрация пользователя')
async def registration_users(user_info: UsersAddDTO):
    username = await UsersService.service_create_new_user(user_info)
    if not username:
        raise HTTPException(status_code=400, detail='An error occurred during user registration')
    return username

@router.post('/login', summary='Авторизация пользователя')
async def login_users(credential: UserLoginDTO, response: Response):
    user = await UsersService.service_get_user(credential)
    if user:
        token = settings.auth.security.create_access_token(uid=f'{user.id} {user.role}')
        response.set_cookie(settings.auth.config.JWT_ACCESS_COOKIE_NAME, token)
        return token
    raise HTTPException(status_code=401, detail='Incorrect login or password')

@router.delete('/delete/{id_user}', summary='Удалить пользователя по id')
async def delete_users(id_user: int, payload = Depends(access_token_required)):
    if payload.get('sub').find('admin') != -1:
        id_user = await UsersService.service_delete_user(id_user)
        return {'detail': f'User {id_user} has been successfully deleted'}
    raise HTTPException(status_code=403, detail='Forbidden')