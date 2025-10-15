from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class UsersSchemas(BaseModel):
    id: int
    username: str
    email: EmailStr
    password: str