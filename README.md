# PinArt

> An artwork discovery and collection platform built as a full-stack learning project.

## Current Milestone

**v0.3 - PostgreSQL Database Configuration**

PinArt is inspired by Pinterest and focuses on discovering artwork, viewing artwork details, and organizing pieces into personal galleries.

The project currently has a static React frontend and a Django REST API backed by a local PostgreSQL database.

## Features

### Frontend Prototype

- Responsive Home, Explore, Galleries, and Upload pages
- Artwork feed and artwork detail pages
- Gallery cards and gallery detail pages
- Create Gallery dialog with temporary browser state
- Image preview in the Upload Artwork form
- Responsive navigation, dialogs, and dropdown menus

### Backend API

- Custom User model
- Artwork, Gallery, and Pin database models
- Django Admin management interface
- Read-only artwork endpoints
- Gallery CRUD endpoints
- Automated API tests for artwork and gallery endpoints

## API Endpoints

```text
GET    /api/artworks/
GET    /api/artworks/<id>/

GET    /api/galleries/
POST   /api/galleries/
GET    /api/galleries/<id>/
PATCH  /api/galleries/<id>/
DELETE /api/galleries/<id>/
```

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- React Router
- ESLint

### Backend

- Python
- Django
- Django REST Framework
- PostgreSQL
- Psycopg
- python-dotenv
- Django ORM

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

Create your local environment file from the safe template:

```powershell
cd backend
Copy-Item .env.example .env
```

Open `.env` and replace `replace-with-your-real-password` with your PostgreSQL password. Adjust `POSTGRES_BIN_PATH` if PostgreSQL is installed in a different location.

Then install dependencies and run the backend:

```powershell
..\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Testing

From `backend`:

```powershell
python manage.py test
python manage.py check
```

## Current Limitations

- PostgreSQL must be installed and running locally.
- The frontend still uses mock data and is not connected to the API.
- Authentication and authorization are not implemented.
- Gallery creation currently accepts an owner ID in the request body; this is temporary until authentication is added.
- Artwork uploads and persistent image storage are not implemented.

## Roadmap

- v0.3: PostgreSQL
- v0.4: Connect React to the backend API
- v0.5: TanStack Query
- v0.6: Authentication and authorization
- v0.7: Real artwork uploads
- v0.8: Artwork pinning