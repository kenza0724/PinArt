import { getArtworks } from "@/api/artworks"
import ArtworkCard from "@/components/artwork/ArtworkCard"
import { useQuery } from "@tanstack/react-query"

function ExplorePage() {

    const {
        data: artworks = [],
        isPending,
        isError,
    } = useQuery({
        queryKey: ["artworks"],
        queryFn: getArtworks,
    })

    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h1 className="text-3xl font-bold tracking-tight">Explore artwork</h1>
            <p className="mt-2 text-muted-foreground">
                Discover artwork from the PinArt community.
            </p>

            {isPending && (
                <p className="mt-8 text-muted-foreground" role="status">Loading artworks..</p>
            )}

            {isError && (
                <p className="mt-8 text-destructive" role="alert">Unable to load artwork.</p>
            )}

            {!isPending && !isError && artworks.length === 0 && (
                <p className="mt-8 text-destructive">No artwork available yet</p>
            )}

            {!isPending && !isError && artworks.length > 0 && (
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