import type { Gallery } from "@/types/gallery";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState, type FormEvent } from "react";

interface EditGalleryProps {
    gallery: Gallery
    onUpdate: (
        id: string,
        data: Pick<Gallery, "name" | "description">
    ) => Promise<boolean>
    updating: boolean
}

function EditGallery({
    gallery,
    onUpdate,
    updating,
}: EditGalleryProps){
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState(gallery.name)
    const [description, setDescription] = useState(gallery.description)
    const [submitError, setSubmitError] = useState<string | null>(null)

    function handleOpenChange(open: boolean) {
        setIsOpen(open)

        if (open) {
            setName(gallery.name)
            setDescription(gallery.description)
            setSubmitError(null)
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const trimmedName = name.trim()

        if(!trimmedName){
            return
        }

        const success = await onUpdate(gallery.id, {
            name: trimmedName,
            description: description.trim(),
        })

        if (!success){
            setSubmitError("Unable to update gallery. Please try again.")
            return
        }

        setIsOpen(false)
    }
    
    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button>
                    <Pencil aria-hidden="true"/>
                    Edit gallery
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Gallery</DialogTitle>
                    <DialogDescription>
                        Update this gallery's name and description.
                    </DialogDescription>
                </DialogHeader>

                {submitError && (
                    <p className="text-sm text-destructive" role="alert">
                        {submitError}
                    </p>
                    )}

                    <form
                        id="edit-gallery-form"
                        className="grid gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div  className="grid gap-2">
                            <Label htmlFor="edit-gallery-name">Name</Label>
                            <Input
                            id="edit-gallery-name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="edit-gallery-description">
                                Description
                            </Label>
                            <Textarea
                                id="edit-gallery-description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                    </form>

                <DialogFooter>
                    <Button
                        type="submit"
                        form="edit-gallery-form"
                        disabled={updating}
                    >
                        {updating ? "Saving..." : "Save changes"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditGallery