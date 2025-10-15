from sqlalchemy.orm import mapped_column, Mapped, relationship
from typing import Annotated
from core.database import Base

class UserORM(Base):
    __tablename__ = 'users'
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    username: Mapped[str]
    email: Mapped[str]
    password: Mapped[str]
