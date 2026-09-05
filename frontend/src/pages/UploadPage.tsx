import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImagePlus } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react"

function UploadPage() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [fileName, setFileName] = useState('')
    const [message, setMessage] = useState('')

    function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]

        if (!file) {
            return
        }

        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setPreviewUrl(reader.result as string)
            setFileName(file.name)
        })
        reader.readAsDataURL(file)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setMessage(
            'This is a frontend prototype: artwork uploads will be saved when the backend is added.',
        )
    }

    return (
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <h1 className="text-3xl font-bold tracking-tight">Upload artwork</h1>
            <p className="mt-2 text-muted-foreground">
                Share a new piece with the PinArt community.
            </p>
            <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    <Label htmlFor="artwork-image">Artwork image</Label>
                    <label
                        htmlFor="artwork-image"
                        className="flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed bg-muted/40 p-6 text-center transition-colors hover:bg-muted"
                    >
                        {previewUrl ? (
                            <img src={previewUrl} alt="Preview of the selected artwork" className="max-h-80 max-w-full rounded-lg object-contain" />
                        ) : (
                            <>
                                <ImagePlus className="size-10 text-muted-foreground" aria-hidden="true" />
                                <span className="mt-3 font-medium">Choose an image</span>
                                <span className="mt-1 text-sm text-muted-foreground">
                                    PNG, JPG, or WEBP
                                </span>
                            </>
                        )}

                    </label>

                    <Input
                    id="artwork-image"
                    className="sr-only"
                    type="file"
                    accept="image/png,image/jpg,image/webp"
                    onChange={handleImageChange}
                    />

                    {fileName && (
                        <p className="text-sm text-muted-foreground">Selected: {fileName}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="artwork-title">Title</Label>
                    <Input
                    id="artwork-title"
                    name="title"
                    placeholder="Give your artwork a title"
                    required
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="artwork-description">Description</Label>
                    <Textarea
                        id="artwork-description"
                        name="description"
                        placeholder="Tell viewers a little about this piece"
                        rows={5}
                    />
                </div>

                <Button type="submit">Upload artwork</Button>
                {message && (
                    <p className="text-sm text-muted-foreground" role="status">
                        {message}
                    </p>
                )}
            </form>
        </main>
    )
}

export default UploadPage