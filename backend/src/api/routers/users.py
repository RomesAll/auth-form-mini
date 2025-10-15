from fastapi import APIRouter, Request
from core.service import UsersService
from schemas.schemas import UsersDTO, UsersAddDTO, UserLoginDTO
from typing import Annotated

router = APIRouter()

@router.get('/', summary='Проверка токена авторизации')
async def check_auth_token(request: Request):
    pass

@router.post('/registrations', summary='Регистрация пользователя')
async def registration_users(user_info: UsersAddDTO):
    pass

@router.post('/login', summary='Авторизация пользователя')
async def login_users(account: UserLoginDTO):
    pass