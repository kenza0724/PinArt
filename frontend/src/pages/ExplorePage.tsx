import ArtworkCard from "@/components/artwork/ArtworkCard"
import { mockArtworks } from "@/data/mockArtworks"

function ExplorePage() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h1 className="text-3xl font-bold tracking-tight">Explore artwork</h1>
            <p className="mt-2 text-muted-foreground">
                Discover artwork from the PinArt community.
            </p>

            <section
                className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                aria-label="Artwork feed"
            >
                {mockArtworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </section>
        </main>
    )
}

export default ExplorePage