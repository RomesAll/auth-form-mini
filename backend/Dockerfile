FROM python:3.12-slim
RUN groupadd -r groupfastapi && useradd -r -g groupfastapi user
RUN pip install --upgrade pip
ENV PYTHONUNBUFFERED=1
WORKDIR /fastapi-app
RUN mkdir ./backend
COPY requirements.txt ./backend
COPY .env ./backend
RUN pip install --no-cache-dir -r ./backend/requirements.txt
COPY . ./backend
EXPOSE 8000
USER user
CMD [ "python", "backend/src/main.py" ]