from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from api import router as router_users
import uvicorn

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"])
app.include_router(router=router_users, prefix='/api/v1/users', tags=['Пользователи'])

@app.get('/', summary='Приветствие', tags=['Главная страница'])
async def get_greetings(request: Request):
    return {'Hello' : request.client.host}

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True, host='0.0.0.0', port=8000)