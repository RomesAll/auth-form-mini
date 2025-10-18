FROM python:3.12-slim
RUN groupadd -r groupfastapi && useradd -r -g groupfastapi user
RUN pip install --upgrade pip
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1
WORKDIR /fastapi-app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
USER user
CMD ["python","src/main.py"]