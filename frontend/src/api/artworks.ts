import type { Artwork } from "@/types/artwork"

interface ArtworkApiResponse {
  id: number
  title: string
  description: string
  image_url: string
  owner_username: string
}

export async function getArtworks() : Promise<Artwork[]>{
    const response = await fetch(`/api/artworks/`)
    
    if (!response.ok) {
        throw new Error('Failed to load artworks')
    }

    const data: ArtworkApiResponse[] = await response.json()

    return data.map((artwork) => ({
        id: String(artwork.id),
        title: artwork.title,
        artistName: artwork.owner_username,
        description: artwork.description,
        imageUrl: artwork.image_url,
        altText: artwork.title,
    }))

}

export async function getArtwork(id : string) : Promise<Artwork>{
    const response = await fetch(`/api/artworks/${id}`)
    
    if (!response.ok) {
        throw new Error('Failed to load artworks')
    }

    const artwork: ArtworkApiResponse = await response.json()

    return {
        id: String(artwork.id),
        title: artwork.title,
        artistName: artwork.owner_username,
        description: artwork.description,
        imageUrl: artwork.image_url,
        altText: artwork.title,
    }
}