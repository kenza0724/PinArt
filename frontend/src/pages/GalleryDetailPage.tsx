import ArtworkCard from "@/components/artwork/ArtworkCard";
import { Button } from "@/components/ui/button";
import { useGalleries } from "@/contexts/GalleryContext";
import { mockArtworks } from "@/data/mockArtworks";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import EditGallery from "@/components/gallery/EditGallery"

function GalleryDetailPage() {
    const { galleryId } = useParams()
    const { galleries, deleteGallery, updateGallery, updating } = useGalleries()
    const navigate = useNavigate()
    const gallery = galleries.find((item) => item.id === galleryId)

    if (!gallery) {
        return (
            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
                <h1 className="text-3xl font-bold tracking-tight">Gallery not found</h1>
                <Button asChild className="mt-6" variant="outline">
                    <Link to="/galleries">Return to Galleries</Link>
                </Button>
            </main>
        )
    }

    const galleryArtworks = mockArtworks.filter((artwork) =>
        gallery.artworkIds.includes(artwork.id),)

    async function handleDelete() {
        if (gallery) {
            const confirmed = window.confirm(
                `Delete "${gallery.name}"? This cannot be undone.`
            )

            if (!confirmed){
                return
            }
            const success = await deleteGallery(gallery.id)

            if(success){
                navigate('/galleries')
            }
        }
    }

    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <Button asChild variant="ghost">
                <Link to="/galleries">
                    <ArrowLeft aria-hidden="true" />
                </Link>
            </Button>

            <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        {gallery.artworkCount} saved artworks
                    </p>

                    <h1 className="mt-2 text-4xl font-bold tracking-tight">
                        {gallery.name}
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                        {gallery.description}
                    </p>
                </div>

                <div className="flex gap-2">
                <EditGallery
                    gallery={gallery}
                    onUpdate={updateGallery}
                    updating={updating}
                />

                <Button variant="destructive" onClick={handleDelete}>
                    <Trash2 aria-hidden="true" />
                    Delete gallery
                </Button>
                </div>
            </div>

            {galleryArtworks.length > 0 ? (
                <section
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    aria-label={`${gallery.name} artwork`}
                >
                    {galleryArtworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                </section>
            ) : (
                <section className="mt-10 rounded-xl border border-dashed p-10 text-center">
                    <h2 className="text-lg font-semibold">This gallery is empty</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Artwork pinning will be added in later PinArt milestone
                    </p>
                </section>
            )}
        </main>
    )
}

export default GalleryDetailPage