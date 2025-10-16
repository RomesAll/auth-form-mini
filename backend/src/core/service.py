from schemas import *
from .repository import UsersDAO
from models import *

class UsersService:
    @classmethod
    async def service_get_user(cls, credential: UserLoginDTO):
        try:
            orm_model = await UsersDAO.dao_get_user(credential)
            dto_model = UsersDTO.model_validate(orm_model, from_attributes=True)
            return dto_model
        except:
            return None

    @classmethod
    async def service_select_users(cls):
        try:
            orm_model = await UsersDAO.dao_select_users()
            dto_model = [UsersDTO.model_validate(row, from_attributes=True) for row in orm_model]
            return dto_model
        except:
            return None

    @classmethod
    async def service_create_new_user(cls, dto_model: UsersAddDTO):
        try:
            orm_model = UserORM(**dto_model.get_attrs())
            result = await UsersDAO.dao_create_new_user(orm_model)
            return result
        except:
            return None
    
    @classmethod
    async def service_delete_user(cls, id: int):
        try:
            result = await UsersDAO.dao_delete_user(id)
            return result
        except:
            return None