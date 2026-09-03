import type { Artwork } from '@/types/artwork'

interface ArtworkCardProps {
  artwork: Artwork
}

function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-card">
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={artwork.imageUrl}
          alt={artwork.altText}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h2 className="font-semibold">{artwork.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {artwork.artistName}
        </p>
      </div>
    </article>
  )
}

export default ArtworkCard