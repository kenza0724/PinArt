import { getArtwork } from "@/api/artworks"
import { Button } from "@/components/ui/button"
import type { Artwork } from "@/types/artwork"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

function ArtworkDetailPage() {
    const { artworkId } = useParams()
    const [artwork, setArtwork] = useState<Artwork | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!artworkId){
            return
        }
        getArtwork(artworkId)
        .then(setArtwork)
        .catch(() => setError('Artwork not found'))
        .finally(() => setLoading(false))
    }, [artworkId])

    if (!artwork) {
        return (
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
                <h1 className="text-3xl font-bold tracking-tight">Artwork not found</h1>
                <Button asChild className="mt-6" variant="outline">
                    <Link to="/explore">Return to Explore</Link>
                </Button>
            </main>
        )
    }

    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <Button asChild variant="ghost">
                <Link to="/explore">
                    <ArrowLeft aria-hidden="true" />
                    Back to Explore
                </Link>
            </Button>

             {loading && (
                <p className="mt-8 text-muted-foreground" role="status">Loading artwork..</p>
            )}

            {error && (
                <p className="mt-8 text-destructive" role="alert">{error}</p>
            )}

            {!loading && !error && artwork && (
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
                <div className="rounded-xl border bg-muted">
                    <img src={artwork.imageUrl} alt={artwork.altText} className="max-h-[70vh] w-full object-contain" />
                </div>

                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        By {artwork.artistName}
                    </p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight">
                        {artwork.title}
                    </h1>
                    <p className="mt-6 leading-7 text-muted-foreground">
                        {artwork.description}
                    </p>
                </div>
            </div>
            )}
        </main>
    )
}

export default ArtworkDetailPage