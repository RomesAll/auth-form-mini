from pydantic import BaseModel, EmailStr

class UsersAddDTO(BaseModel):
    '''Pydantic схема для добавления нового пользователя'''
    username: str
    email: EmailStr
    password: str
    def get_attrs(self):
        return { 'username': self.username, 'email': self.email, 'password': self.password }
    
class UsersDTO(UsersAddDTO):
    '''Pydantic схема для вывода существующего пользователя'''
    id: int
    def get_attrs(self):
        attrs = super().get_attrs()
        attrs.update(id =self.id)

class UserLoginDTO(BaseModel):
    '''Pydantic схема для валидации логина и пароля'''
    username: str
    password: str