from fastapi import APIRouter, Request, Response, Depends
from schemas import *
from core import UsersService
from core import settings
router = APIRouter()

@router.get('/all', summary='Вывести всех пользователей', dependencies=[Depends(settings.authx.security.access_token_required)])
async def select_users():
    users = await UsersService.service_select_users()
    return users

@router.post('/registrations', summary='Регистрация пользователя')
async def registration_users(user_info: UsersAddDTO):
    username = await UsersService.service_create_new_user(user_info)
    return username

@router.post('/login', summary='Авторизация пользователя')
async def login_users(credential: UserLoginDTO, response: Response):
    user = await UsersService.service_get_user(credential)
    if user:
        token = settings.authx.security.create_access_token(uid=str(user.id))
        response.set_cookie(settings.authx.config.JWT_ACCESS_COOKIE_NAME, token)
        return token

@router.delete('/delete/{id_user}', summary='Удалить пользователя по id', dependencies=[Depends(settings.authx.security.access_token_required)])
async def delete_users(id_user: int):
    id_user = await UsersService.service_delete_user(id_user)
    return id_user