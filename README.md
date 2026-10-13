# PinArt

> An artwork discovery and collection platform built as a full-stack learning project.

## Current Milestone

**v0.4 - Connect React to the Django REST API**

PinArt is inspired by Pinterest and focuses on discovering artwork, viewing artwork details, and organizing pieces into personal galleries.

The project currently has a React frontend connected to a Django REST API backed by a local PostgreSQL database.

## Features

### Frontend

- Responsive Home, Explore, Galleries, and Upload pages
- Artwork feed loaded from the Django API
- Artwork detail pages loaded from the Django API
- Gallery list loaded from the Django API
- Create, edit, and delete gallery functionality
- Loading, error, and empty states
- Gallery detail pages
- Image preview in the Upload Artwork form
- Responsive navigation, dialogs, and dropdown menus

### Backend API

- Custom User model
- Artwork, Gallery, and Pin database models
- Django Admin management interface
- Read-only artwork endpoints
- Gallery CRUD endpoints
- PostgreSQL database configuration
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

### Frontend

```powershell
cd frontend
npm run lint
npx tsc --noEmit -p tsconfig.app.json

From `backend`:

```powershell
python manage.py test
python manage.py check
```

## Current Limitations

- PostgreSQL must be installed and running locally.
- Authentication and authorization are not implemented.
- Gallery creation temporarily accepts a hardcoded development owner ID.
- Gallery ownership will be assigned from the authenticated user after authentication is added.
- Artwork pinning is not implemented yet.
- Gallery artwork contents still use placeholder/mock data.
- Artwork uploads and persistent image storage are not implemented.
- TanStack Query has not been introduced yet.

## Roadmap

- v0.1: Static React frontend prototype
- v0.2: Django REST API
- v0.3: PostgreSQL configuration
- v0.4: Connect React to the backend API <----
- v0.5: TanStack Query
- v0.6: Authentication and authorization
- v0.7: Real artwork uploads
- v0.8: Artwork pinning