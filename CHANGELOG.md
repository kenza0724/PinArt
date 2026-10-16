# Changelog

All notable changes to PinArt are documented in this file.

## v0.5.0 - 2026-10-16

### Added

- Added TanStack Query for frontend server-state management
- Added `QueryClientProvider` to the application entry point
- Added artwork queries for the Explore page
- Added artwork detail queries
- Added gallery queries in `GalleryContext`
- Added gallery mutations for create, update, and delete operations
- Added query invalidation after gallery mutations
- Added query-based loading and error state handling

## v0.4.0 - 2026-10-13

### Added

- Connected the React frontend to the Django REST API
- Loaded artworks from the backend API
- Loaded artwork detail data from the backend API
- Loaded galleries from PostgreSQL through the API
- Created persistent galleries through the API
- Edited galleries through PATCH requests
- Deleted galleries through DELETE requests
- Added gallery loading, error, and empty states
- Added gallery creation and editing dialogs
- Added gallery deletion confirmation
- Added frontend API request error handling
- Added Vite development proxy for `/api` requests

## v0.3.0 - 2026-09-17

### Added

- Local PostgreSQL database configuration
- Psycopg PostgreSQL driver configuration
- Environment-based database settings using `python-dotenv`
- Safe `backend/.env.example` configuration template
- PostgreSQL migrations and test-database support

## v0.2.0 - 2026-09-14

### Added

- Django project and Django REST Framework setup
- Custom User model
- Artwork, Gallery, and Pin database models
- Django Admin configuration
- Artwork read API endpoints
- Gallery CRUD API endpoints
- Automated API tests
- Backend dependency requirements file

## v0.1.0

### Added

- Static React and TypeScript frontend prototype
- Artwork and gallery interfaces
- Responsive layouts and navigation
- Artwork and gallery detail pages
- Upload form prototype
- Dialog and dropdown UI components