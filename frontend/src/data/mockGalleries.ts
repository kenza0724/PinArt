import type { Gallery } from '@/types/gallery'

export const mockGalleries: Gallery[] = [
  {
    id: 'night-and-light',
    name: 'Night and Light',
    description: 'Atmospheric artwork, city lights, and deep blue scenes.',
    artworkCount: 2,
    artworkIds: ['city-rhythm', 'blue-hour'],
  },
  {
    id: 'abstract-shapes',
    name: 'Abstract Shapes',
    description: 'Color, texture, geometry, and unexpected forms.',
    artworkCount: 1,
    artworkIds: ['soft-forms'],
  },
  {
    id: 'natural-world',
    name: 'Natural World',
    description: 'Landscapes, forests, coastlines, and quiet moments outdoors.',
    artworkCount: 2,
    artworkIds: ['coastal-light', 'forest-study'],
  },
  {
    id: 'design-inspiration',
    name: 'Design Inspiration',
    description: 'Visual references for spaces, typography, and layout.',
    artworkCount: 2,
    artworkIds: ['soft-forms', 'city-rhythm'],
  },
]