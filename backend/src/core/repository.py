from .database import session_factory
from models import UserORM
from sqlalchemy import select
from sqlalchemy.exc import NoResultFound, IntegrityError
from fastapi import HTTPException

class UsersDAO:
    @classmethod
    async def dao_get_user(cls, dto_model):
        try:
            async with session_factory() as session:
                query = select(UserORM).filter(UserORM.username==dto_model.username, UserORM.password==dto_model.password).limit(1)
                res_query = await session.execute(query)
                return res_query.scalar_one()
        except NoResultFound as exc:
            return HTTPException(status_code=401, detail='Incorrect login or password')
        except Exception as exc:
            return exc

    @classmethod
    async def dao_select_users(cls):
        try:
            async with session_factory() as session:
                query = select(UserORM)
                res_query = await session.execute(query)
                orm_objects = res_query.scalars().all()
                if not orm_objects:
                    raise NoResultFound()
                return orm_objects
        except NoResultFound as exc:
            return HTTPException(status_code=406, detail='No content found')
        except Exception as exc:
            return exc
        
    @classmethod
    async def dao_create_new_user(cls, model_orm):
        try:
            async with session_factory() as session:
                session.add(model_orm)
                await session.flush()
                result = model_orm.username
                await session.commit()
                return result
        except Exception as exc:
            return HTTPException(status_code=400, detail=exc.args[0])

    @classmethod
    async def dao_delete_user(cls, id: int):
        try:
            async with session_factory() as session:
                delete_object = await session.get(UserORM, id)
                if not delete_object:
                    raise HTTPException(status_code=406, detail='No content found')
                await session.delete(delete_object)
                await session.commit()
                return id
        except HTTPException as exc:
            return exc
        except Exception as exc:
            return exc