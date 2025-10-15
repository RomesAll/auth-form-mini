from .database import session_factory
from models import UserORM
from sqlalchemy import select

class UsersDAO:
    @classmethod
    async def dao_select_users(cls):
        async with session_factory() as session:
            query = select(UserORM)
            res_query = await session.execute(query)
            orm_objects = res_query.scalars().all()
            return orm_objects

    @classmethod
    async def dao_create_new_user(cls, model_orm):
        async with session_factory() as session:
            session.add(model_orm)
            await session.flush()
            result = model_orm.username
            await session.commit()
            return result
    
    @classmethod
    async def dao_delete_user(cls, id: int):
        async with session_factory() as session:
            delete_object = await session.get(UserORM, id)
            if delete_object:
                await session.delete(delete_object)
            await session.commit()
            return id