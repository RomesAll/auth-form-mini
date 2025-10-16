from pydantic import BaseModel, EmailStr

class UsersAddDTO(BaseModel):
    '''Pydantic схема для добавления нового пользователя'''
    username: str
    email: EmailStr
    password: str
    role: str = 'user'
    def get_attrs(self):
        return { 'username': self.username, 'email': self.email, 'password': self.password, 'role': self.role}
    
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