from pydantic import BaseModel, EmailStr, ConfigDict, SecretStr
from typing import Annotated, Optional

class UsersAddDTO(BaseModel):
    '''Pydantic схема для добавления нового пользователя'''
    username: str
    email: EmailStr
    password: SecretStr
    def get_attrs(self):
        return { 'username': self.username, 'email': self.email, 'password': self.password.get_secret_value()}
    
class UsersDTO(UsersAddDTO):
    '''Pydantic схема для вывода существующего пользователя'''
    id: int
    role: object
    def get_attrs(self):
        attrs = super().get_attrs()
        attrs.update(id =self.id, role=self.role)

class UserLoginDTO(BaseModel):
    '''Pydantic схема для валидации логина и пароля'''
    username: str
    password: SecretStr