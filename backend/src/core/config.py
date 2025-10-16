from pydantic import field_validator, ValidationError
from pydantic_settings import BaseSettings, SettingsConfigDict
from authx import AuthX, AuthXConfig

class ConfigBase(BaseSettings):
    model_config = SettingsConfigDict(env_file='backend/.env')

class DataBase(ConfigBase):
    POSTGRES_HOST: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_PORT: int

    @property
    def DATABASE_URL_async(self):
        return f'postgresql+asyncpg://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_HOST}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}'

class Authx(BaseSettings):
    config: AuthXConfig = AuthXConfig()
    config.JWT_ACCESS_COOKIE_NAME = 'access_token'
    config.JWT_SECRET_KEY = 'SECRET'
    config.JWT_TOKEN_LOCATION = ['cookies']
    security: AuthX = AuthX(config=config)

class Settings(BaseSettings):
    database: DataBase = DataBase()
    authx: Authx = Authx()

settings = Settings()