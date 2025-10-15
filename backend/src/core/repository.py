from core.database import session_factory

class UsersDAO:    
    @classmethod
    async def dao_create_new_user(cls, model_orm):
        async with session_factory() as session:
            session.add(model_orm)
            await session.flush()
            result = model_orm.username
            await session.commit()
            return result