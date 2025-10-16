from pydantic_settings import BaseSettings, SettingsConfigDict
from authx import AuthX, AuthXConfig

class ConfigBase(BaseSettings):
    '''Базовый класс ConfigBase, в котором происходит чтение данных из env файла'''
    model_config = SettingsConfigDict(env_file='backend/.env')

class DataBase(ConfigBase):
    '''Класс с конфигурацией базы данных (наследуется от ConfigBase), в котором переменные заполняются данными из env файла'''
    POSTGRES_HOST: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_PORT: int

    @property
    def DATABASE_URL_async(self):
        '''Функция для вывода строки подключения к базе данных'''
        return f'postgresql+asyncpg://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_HOST}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}'

class Authx(BaseSettings):
    '''Класс с конфигурацией token JWT auth'''
    config: AuthXConfig = AuthXConfig()
    config.JWT_ACCESS_COOKIE_NAME = 'access_token'
    config.JWT_SECRET_KEY = 'SECRET'
    config.JWT_TOKEN_LOCATION = ['cookies']
    security: AuthX = AuthX(config=config)

class Settings(BaseSettings):
    '''Класс для хранение конфигурации бд и token JWT auth'''
    database: DataBase = DataBase()
    authx: Authx = Authx()

settings = Settings()