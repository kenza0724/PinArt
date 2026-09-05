import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

import ArtworkCard from '@/components/artwork/ArtworkCard'
import { Button } from '@/components/ui/button'
import { mockArtworks } from '@/data/mockArtworks'

const featuredArtworks = mockArtworks.slice(0, 3)

function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <section className="max-w-2xl">
        <p className="text-sm font-medium text-muted-foreground">
          Welcome to PinArt
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Discover artwork worth saving.
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          Explore visual work from artists and collect the pieces that inspire
          your next idea.
        </p>

        <Button asChild className="mt-6">
          <Link to="/explore">
            Explore artwork
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </section>

      <section className="mt-16" aria-labelledby="featured-artwork-heading">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2
              id="featured-artwork-heading"
              className="text-2xl font-bold tracking-tight"
            >
              Featured artwork
            </h2>
            <p className="mt-1 text-muted-foreground">
              A few pieces to start your collection.
            </p>
          </div>

          <Button asChild variant="outline">
            <Link to="/explore">View all</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage