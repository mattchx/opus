import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ContentFormProps {
  values: {
    title: string
    description: string
    body: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function ContentForm({ values, onChange }: ContentFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Enter content title"
          value={values.title}
          onChange={onChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter content description"
          value={values.description}
          onChange={onChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="body">Content Body</Label>
        <Textarea
          id="body"
          placeholder="Enter the main content"
          rows={8}
          value={values.body}
          onChange={onChange}
        />
      </div>

      <Button type="submit">Create Content</Button>
    </div>
  )
}