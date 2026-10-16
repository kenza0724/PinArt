import { getArtwork } from "@/api/artworks";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";

function ArtworkDetailPage() {
  const { artworkId } = useParams();
  const {
    data: artwork,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["artwork", artworkId],
    queryFn: () => getArtwork(artworkId!),
  });

 if (isPending) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-muted-foreground" role="status">
        Loading artwork...
      </p>
    </main>
  )
}

if (isError) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-destructive" role="alert">
        Unable to load artwork.
      </p>
    </main>
  )
}

if (!artwork) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Artwork not found
      </h1>
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
            <img
              src={artwork.imageUrl}
              alt={artwork.altText}
              className="max-h-[70vh] w-full object-contain"
            />
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
  );
}

export default ArtworkDetailPage