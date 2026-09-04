import type { Gallery } from "@/types/gallery";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input'
import { useState, type FormEvent } from "react";
import { Plus } from "lucide-react";

interface CreateGalleryDialogProps {
    onCreate: (gallery: Pick<Gallery, 'name' | 'description'>) => void
}

function CreateGalleryDialog({ onCreate }: CreateGalleryDialogProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const trimmedName = name.trim()

        if (!trimmedName) {
            return
        }

        onCreate({
            name: trimmedName,
            description: description.trim() || 'A new PinArt collection.'
        })

        setName('')
        setDescription('')
        setIsOpen(false)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus aria-hidden="true" />
                    New Gallery
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a gallery</DialogTitle>
                    <DialogDescription>
                        Group artwork into a collection you can return to later.
                    </DialogDescription>
                </DialogHeader>

                <form id="create-gallery-form" className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="gallery-name">Name</Label>
                        <Input
                            id="gallery-name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="e.g. Illustration ideas"
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="gallery-description">Description</Label>
                        <Textarea
                            id="gallery-description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            placeholder="What kind of artwork belongs here?"
                        />
                    </div>
                </form>
                <DialogFooter>
                    <Button type="submit" form="create-gallery-form">
                        Create gallery
                    </Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export default CreateGalleryDialog