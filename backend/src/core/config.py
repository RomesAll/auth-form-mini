from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator
from authx import AuthX, AuthXConfig

class ConfigBase(BaseSettings):
    '''Базовый класс ConfigBase, в котором происходит чтение данных из env файла'''
    model_config = SettingsConfigDict(env_file='backend/.env', extra='ignore')

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

class AuthBaseConfig(ConfigBase):
    '''Класс с конфигурацией token JWT auth'''
    JWT_ACCESS_COOKIE_NAME: str
    JWT_SECRET_KEY: str
    JWT_TOKEN_LOCATION: str
    config: AuthXConfig = AuthXConfig()

    @property
    def set_settings_for_config(self):
        self.config.JWT_ACCESS_COOKIE_NAME = self.JWT_ACCESS_COOKIE_NAME
        self.config.JWT_SECRET_KEY = self.JWT_SECRET_KEY
        self.config.JWT_TOKEN_LOCATION = [self.JWT_TOKEN_LOCATION,]
        return self.config

class Settings(BaseSettings):
    '''Класс для хранение конфигурации бд и token JWT auth'''
    database: DataBase = DataBase()
    auth_config: AuthBaseConfig = AuthBaseConfig()
    auth: AuthX = AuthX(config=auth_config.set_settings_for_config)
    
settings = Settings()