import { mockGalleries } from "@/data/mockGalleries"
import type { Gallery } from "@/types/gallery"
import { createContext, useContext, useState, type ReactNode } from "react"

interface GalleryContextValue {
    galleries: Gallery[]
    createGallery: (gallery: Pick<Gallery, 'name' | 'description'>) => void
}

const GalleryContext = createContext<GalleryContextValue | null>(null)

export function GalleryProvider({ children } : {children: ReactNode}) {
    const [galleries, setGalleries] = useState(mockGalleries)

    function createGallery(gallery: Pick<Gallery, 'name' | 'description'>) {
        setGalleries((currentGalleries) => [
            {
                id: crypto.randomUUID(),
                artworkCount: 0,
                artworkIds: [],
                ...gallery,
            },
            ...currentGalleries,
        ])
    }

    return (
        <GalleryContext.Provider value={{ galleries, createGallery }}>
            {children}
        </GalleryContext.Provider>
    )
}


export function useGalleries() {
    const context = useContext(GalleryContext)

    if (!context) {
        throw new Error('useGalleries must be used within GalleryProvider')
    }
    return context
}