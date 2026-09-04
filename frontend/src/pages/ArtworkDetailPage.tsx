import { Button } from "@/components/ui/button"
import { mockArtworks } from "@/data/mockArtworks"
import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router"

function ArtworkDetailPage() {
    const { artworkId } = useParams()

    const artwork = mockArtworks.find((item) => item.id === artworkId)

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
        </main>
    )
}

export default ArtworkDetailPage