import {
  createGallery as createGalleryRequest,
  deleteGallery as deleteGalleryRequest,
  getGalleries,
  updateGallery as updateGalleryRequest,
} from "@/api/galleries";
import type { Gallery } from "@/types/gallery";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface GalleryContextValue {
  galleries: Gallery[];
  loading: boolean;
  creating: boolean;
  updating: boolean;
  error: string | null;
  createGallery: (
    gallery: Pick<Gallery, "name" | "description">,
  ) => Promise<boolean>;
  updateGallery: (
    id: string,
    gallery: Pick<Gallery, "name" | "description">,
  ) => Promise<boolean>;
  deleteGallery: (id: string) => Promise<boolean>;
}

const GalleryContext = createContext<GalleryContextValue | null>(null);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [creating, setCreating] = useState<boolean>(false);
  const [updating, setUpdating] = useState<boolean>(false);

  useEffect(() => {
    getGalleries()
      .then(setGalleries)
      .catch(() => {
        setError("Unable to load galleries.");
      })
      .finally(() => setLoading(false));
  }, []);

  async function createGallery(
    gallery: Pick<Gallery, "name" | "description">,
  ): Promise<boolean> {
    setCreating(true);
    try {
      const createdGallery = await createGalleryRequest({
        owner: 1,
        name: gallery.name,
        description: gallery.description,
      });
      setGalleries((currentGalleries) => [createdGallery, ...currentGalleries]);
      return true;
    } catch {
      return false;
    } finally {
      setCreating(false);
    }
  }

  async function updateGallery(
    id: string,
    gallery: Pick<Gallery, "name" | "description">,
  ): Promise<boolean> {
    setUpdating(true);
    try {
      const updatedGallery = await updateGalleryRequest(id, {
        name: gallery.name,
        description: gallery.description,
      });
      setGalleries((currentGalleries) =>
        currentGalleries.map((currentGallery) =>
          currentGallery.id === id ? updatedGallery : currentGallery,
        ),
      );
      return true;
    } catch {
      setError("Unable to update gallery.");
      return false;
    } finally {
      setUpdating(false);
    }
  }

  async function deleteGallery(id: string): Promise<boolean> {
    setError(null);
    try {
      await deleteGalleryRequest(id);
      setGalleries((currentGalleries) =>
        currentGalleries.filter((gallery) => gallery.id !== id),
      );
      return true;
    } catch {
      setError("Unable to delete gallery.");
      return false;
    }
  }

  return (
    <GalleryContext.Provider
      value={{
        galleries,
        createGallery,
        updateGallery,
        deleteGallery,
        loading,
        error,
        creating,
        updating,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGalleries() {
  const context = useContext(GalleryContext);

  if (!context) {
    throw new Error("useGalleries must be used within GalleryProvider");
  }
  return context;
}
