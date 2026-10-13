import { getArtworks } from "@/api/artworks"
import ArtworkCard from "@/components/artwork/ArtworkCard"
import type { Artwork } from "@/types/artwork"
import { useEffect, useState } from "react"

function ExplorePage() {
    const [artworks, setArtworks] = useState<Artwork[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        getArtworks()
            .then(setArtworks)
            .catch(() => {
                setError('Unable to load artwork.')
            })
            .finally(() => setLoading(false))
    }, [])


    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h1 className="text-3xl font-bold tracking-tight">Explore artwork</h1>
            <p className="mt-2 text-muted-foreground">
                Discover artwork from the PinArt community.
            </p>

            {loading && (
                <p className="mt-8 text-muted-foreground" role="status">Loading artworks..</p>
            )}

            {error && (
                <p className="mt-8 text-destructive" role="alert">{error}</p>
            )}

            {!loading && !error && artworks.length === 0 && (
                <p className="mt-8 text-destructive">No artwork available yet</p>
            )}

            {!loading && !error && artworks.length > 0 && (
                <section
                    className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    aria-label="Artwork feed"
                >
                    {artworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                </section>
            )}


        </main>
    )
}

export default ExplorePage