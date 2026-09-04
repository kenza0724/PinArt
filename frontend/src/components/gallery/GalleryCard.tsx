import type { Gallery } from "@/types/gallery";

interface GalleryCardProps {
    gallery: Gallery
}

function GalleryCard({ gallery }: GalleryCardProps) {
    return (
        <article className="overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md">
            <div className="flex aspect-[3/2] flex-col justify-end bg-gradient-to-br from-violet-500 via-fuschia-500 to-amber-300 p-5 text-white">
                <p className="text-4xl font-bold">{gallery.artworkCount}</p>
                <p className="text-sm font-medium">saved artworks</p>
            </div>

            <div className="p-4">
                <h2 className="font-semibold">{gallery.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    {gallery.description}
                </p>
            </div>
        </article>
    )
}

export default GalleryCard