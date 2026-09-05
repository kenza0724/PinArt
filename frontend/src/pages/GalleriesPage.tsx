import CreateGalleryDialog from "@/components/gallery/CreateGalleryDialog"
import GalleryCard from "@/components/gallery/GalleryCard"
import { useGalleries } from "@/contexts/GalleryContext"

function GalleriesPage(){
    const { galleries, createGallery } = useGalleries()

    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Your Galleries</h1>
                    <p className="mt-2 text-muted-foreground">
                        Curate the artwork that inspired you.
                    </p>
                </div>

                <CreateGalleryDialog onCreate={createGallery}/>
            </div>

            <section
                className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                aria-label="Your galleries"
            >
                {galleries.map((gallery) => (
                    <GalleryCard key={gallery.id} gallery={gallery}/>
                ))}
            </section>
        </main>
    )
}

export default GalleriesPage