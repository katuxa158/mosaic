# Mosaic

Backend-часть проекта **Mosaic**. 
Сервер реализован на Django REST Framework с JWT-аутентификацией


## ⚙️ Установка и запуск
### 1. Клонирование репозитория
```bash
git clone <URL_репозитория>
cd mosaic-backend
```

### 2. Создание виртуального окружения
```bash
python -m venv venv
```

Активация:
```bash
venv\Scripts\activate
```

### 3. Установка зависимостей
```bash
pip install -r requirements.txt
```

### 4. Настройка базы данных
Выполнить миграции:
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Запуск сервера
```bash
python manage.py runserver
```