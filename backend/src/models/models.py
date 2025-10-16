from sqlalchemy.orm import mapped_column, Mapped, relationship
from typing import Annotated
from core import Base
from enum import Enum

class Role(Enum):
    '''Класс с перечислением ролей'''
    admin = 'admin'
    user = 'user'

class UserORM(Base):
    '''ORM модель для таблицы с пользователями'''
    __tablename__ = 'users'
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    username: Mapped[str]
    email: Mapped[str]
    role: Mapped["Role"] = mapped_column(default=Role.user)
    password: Mapped[str]
