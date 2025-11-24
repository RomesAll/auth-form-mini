<h1>Демонстрация работы</h1>

https://github.com/user-attachments/assets/cc7f95d3-7643-44c7-9869-d1037f28e36e

<h1>Инструкция для запуска на локальной машине</h1>

**Шаг 1**: клонировать репозиторий

**Шаг 2**: добавить env файлы для конфигурации бд, токенов

Пример:

<img width="648" height="270" alt="image" src="https://github.com/user-attachments/assets/144ff6f0-1a10-4207-b831-dbc79670bc1d" />
<img width="759" height="351" alt="image" src="https://github.com/user-attachments/assets/f7d78935-4742-48a2-a3c1-18f8a7fd5d73" />

**Шаг 3**: находясь в одной рабочей директорией с файлом compose.yml, запустить docker compose <code>docker compose up</code>: (не забыть перед этим скачать сам docker)

<img width="803" height="69" alt="image" src="https://github.com/user-attachments/assets/5fcc049a-e604-4f24-b507-edc6fc95be43" />

Если не будет ошибок, то вы увидите примерно это:

<img width="1450" height="491" alt="image" src="https://github.com/user-attachments/assets/a2d853c4-639f-4aa7-9d5b-cad9d7920c18" />

**Шаг 4**: контейнеры запущенны, теперь нужно выполнить миграцию для того, чтобы в бд создались таблицы (в нашем случае одна таблица users). Для это нужно зайти в контейнер с fastapi сервисом <code>docker exec -it space_web_back bash</code>:

<img width="641" height="62" alt="image" src="https://github.com/user-attachments/assets/6e460bca-0b3c-4b20-88b1-3a25c0a18a45" />

Далее нужно сгенерировать миграцию <code>alembic revision --autogenerate</code>:

<img width="777" height="155" alt="image" src="https://github.com/user-attachments/assets/804e5221-7a23-4ba1-a0f3-38ba557d120f" />

и применить ее <code>alembic upgrade head</code>:

<img width="844" height="124" alt="image" src="https://github.com/user-attachments/assets/157c7f90-3f5e-4b02-821d-6783d78539bc" />

Далее нужно просто в адресной строке браузера ввести http://127.0.0.1:85. На этом все.

<h1>API</h1>

http://127.0.0.1:85/api/docs

<img width="1466" height="507" alt="image" src="https://github.com/user-attachments/assets/0ea9a77b-a1f7-4415-a1a3-7b2d514a7246" />

