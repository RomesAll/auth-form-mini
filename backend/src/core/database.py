from sqlalchemy import NullPool, create_engine, text
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from sqlalchemy import MetaData
from .config import settings

async_engine = create_async_engine(
    url=settings.database.DATABASE_URL_async,
    echo=True
)

class Base(DeclarativeBase):
    metadata = MetaData()

session_factory = async_sessionmaker(async_engine)