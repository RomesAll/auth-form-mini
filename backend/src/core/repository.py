from .database import session_factory
from models import UserORM
from sqlalchemy import select

class UsersDAO:
    @classmethod
    async def dao_get_user(cls, dto_model):
        try:
            async with session_factory() as session:
                query = select(UserORM).filter(UserORM.username==dto_model.username, UserORM.password==dto_model.password).limit(1)
                res_query = await session.execute(query)
                return res_query.scalars().all()[0]
        except:
            return None

    @classmethod
    async def dao_select_users(cls):
        try:
            async with session_factory() as session:
                query = select(UserORM)
                res_query = await session.execute(query)
                orm_objects = res_query.scalars().all()
                return orm_objects
        except:
            return None
        
    @classmethod
    async def dao_create_new_user(cls, model_orm):
        try:
            async with session_factory() as session:
                session.add(model_orm)
                await session.flush()
                result = model_orm.username
                await session.commit()
                return result
        except:
            return None
    
    @classmethod
    async def dao_delete_user(cls, id: int):
        try:
            async with session_factory() as session:
                delete_object = await session.get(UserORM, id)
                if delete_object:
                    await session.delete(delete_object)
                await session.commit()
                return id
        except:
            return None