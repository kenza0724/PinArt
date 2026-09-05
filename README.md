# PinArt

> An artwork discovery and collection platform built as a full-stack learning project.

## Version

Current milestone: **v0.1.0 — Frontend Prototype**

PinArt is inspired by Pinterest and focuses on discovering artwork, viewing artwork details, and organizing pieces into personal galleries.

This version is a static frontend prototype. It uses mock data and browser-only state; there is no backend, authentication, persistent storage, or real image upload yet.

## Features

- Responsive Home, Explore, Galleries, and Upload pages
- Artwork feed with reusable artwork cards
- Artwork detail pages
- Gallery cards and gallery detail pages
- Create Gallery dialog with temporary in-browser state
- Image preview in the Upload Artwork form
- Responsive navigation bar
- Accessible dialog and dropdown menu UI

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- React Router
- ESLint

```

## Available Commands

```bash
npm run dev
npm run lint
npm run build
```

## Current Limitations

- Artwork and gallery data is mock data.
- New galleries disappear after a page refresh.
- The upload form previews an image but does not save it.
- Authentication, backend APIs, database storage, and real image uploads are planned for later milestones.

## Roadmap

- v0.2: Django backend and REST API
- v0.3: PostgreSQL
- v0.4: Connect React to the backend API
- v0.6: Authentication
- v0.7: Real artwork uploads
- v0.8: Artwork pinning