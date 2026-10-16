import {
  createGallery as createGalleryRequest,
  deleteGallery as deleteGalleryRequest,
  getGalleries,
  updateGallery as updateGalleryRequest,
} from "@/api/galleries";
import type { Gallery } from "@/types/gallery";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createContext,
  useContext,
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

type GalleryFormData = Pick<Gallery, "name" | "description">;

interface UpdateGalleryVariables {
  id: string;
  data: GalleryFormData;
}

const GalleryContext = createContext<GalleryContextValue | null>(null);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  const galleriesQuery = useQuery({
    queryKey: ["galleries"],
    queryFn: getGalleries,
  });

  const createMutation = useMutation({
    mutationFn: (gallery: GalleryFormData) =>
      createGalleryRequest({
        owner: 1,
        ...gallery,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["galleries"],
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: UpdateGalleryVariables) =>
      updateGalleryRequest(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["galleries"],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteGalleryRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["galleries"],
      })
    }
  })

  async function createGallery(
    gallery: GalleryFormData,
  ): Promise<boolean> {
    try {
      await createMutation.mutateAsync(gallery);
      return true;
    } catch {
      return false;
    }
  }

  async function updateGallery(
    id: string,
    gallery: GalleryFormData,
  ): Promise<boolean> {
    try {
      await updateMutation.mutateAsync({
        id,
        data: gallery,
      })
      return true;
    } catch {
      return false;
    }
  }

  async function deleteGallery(id: string): Promise<boolean> {
    try {
      await deleteMutation.mutateAsync(id)
      return true;
    } catch {
      return false;
    }
  }

  return (
    <GalleryContext.Provider
      value={{
        galleries: galleriesQuery.data ?? [],
        createGallery,
        updateGallery,
        deleteGallery,
        loading: galleriesQuery.isPending,
        error: galleriesQuery.isError
        ? "Unable to load galleries."
        : null,
        creating: createMutation.isPending,
        updating: updateMutation.isPending,
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
