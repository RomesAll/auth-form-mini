from fastapi import APIRouter, Request
from schemas import *
from core import UsersService

router = APIRouter()

@router.get('/', summary='Проверка токена авторизации')
async def check_auth_token(request: Request):
    pass

@router.get('/all', summary='Вывести всех пользователей')
async def select_users():
    users = await UsersService.service_select_users()
    return users

@router.post('/registrations', summary='Регистрация пользователя')
async def registration_users(user_info: UsersAddDTO):
    username = await UsersService.service_create_new_user(user_info)
    return username

@router.post('/login', summary='Авторизация пользователя')
async def login_users(account: UserLoginDTO):
    pass

@router.delete('/delete/{id_user}', summary='Удалить пользователя по id')
async def delete_users(id_user: int):
    id_user = await UsersService.service_delete_user(id_user)
    return id_user