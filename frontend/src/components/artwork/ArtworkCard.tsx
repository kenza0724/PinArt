import { Link } from 'react-router'

import type { Artwork } from '@/types/artwork'

interface ArtworkCardProps {
  artwork: Artwork
}

function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <article>
      <Link
        to={`/artworks/${artwork.id}`}
        className="group block overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md"
      >
        <div className="aspect-[4/5] bg-muted">
          <img
            src={artwork.imageUrl}
            alt={artwork.altText}
            className="size-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="p-4">
          <h2 className="font-semibold">{artwork.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {artwork.artistName}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ArtworkCard