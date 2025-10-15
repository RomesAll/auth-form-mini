from schemas.schemas import UsersAddDTO, UsersDTO
from models.models import UserORM
from repository import UsersDAO
from sqlalchemy.orm import joinedload, lazyload, selectinload

class UsersService:
    @classmethod
    async def service_create_new_users(dto_model: UsersAddDTO):
        orm_model = UsersAddDTO(**dto_model.get_attrs())
        result = await UsersDAO.dao_create_new_user(orm_model)
        return result