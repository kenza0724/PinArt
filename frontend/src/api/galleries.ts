import type { Gallery } from "@/types/gallery"

interface GalleryApiResponse {
  id: number
  name: string
  description: string
  owner_username: string
}

interface CreateGalleryData {
    owner: number
    name: string
    description: string
}

interface UpdateGalleryData {
  name: string
  description: string
}

export async function getGalleries(): Promise<Gallery[]>{
    const response = await fetch('/api/galleries/')

    if (!response.ok){
        throw new Error('Failed to load galleries')
    }

    const data: GalleryApiResponse[] = await response.json()

    return data.map((gallery) => ({
        id: String(gallery.id),
        name: gallery.name,
        description: gallery.description,
        artworkCount: 0,
        artworkIds: [],
    }))
}

export async function createGallery(data: CreateGalleryData): Promise<Gallery>{
    const response = await fetch(`/api/galleries/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok){
        const error = await response.text()
        throw new Error(`Failed to create gallery: ${error}`)
    }

    const createdGallery: GalleryApiResponse = await response.json()
    return {
        id: String(createdGallery.id),
        name: createdGallery.name,
        description: createdGallery.description,
        artworkCount: 0,
        artworkIds: [],
    }
}

export async function deleteGallery(id: string): Promise<void>{
    const response = await fetch(`/api/galleries/${id}/`, {
        method: 'DELETE',
    })
    if (!response.ok){
        const error = await response.text()
        throw new Error(`Failed to delete gallery: ${error}`)
    }
}

export async function updateGallery(id: string, data: UpdateGalleryData): Promise<Gallery>{
    const response = await fetch(`/api/galleries/${id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok){
        const error = await response.text()
        throw new Error(`Failed to update gallery: ${error}`)
    }

    const updatedGallery: GalleryApiResponse = await response.json()

    return {
        id: String(updatedGallery.id),
        name: updatedGallery.name,
        description: updatedGallery.description,
        artworkCount: 0,
        artworkIds: [],
    }
}
