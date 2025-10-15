from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class UsersAddDTO(BaseModel):
    username: str
    email: EmailStr
    password: str
    def get_attrs(self):
        return {
            'username': self.username,
            'email': self.email,
            'password': self.password
        }
    
class UserLoginDTO(BaseModel):
    username: str
    password: str

class UsersDTO(UsersAddDTO):
    id: int
    def get_attrs(self):
        attrs = super().get_attrs()
        attrs.update(id =self.id)
