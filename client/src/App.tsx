import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ContentForm } from "@/components/ContentForm"

function App() {
  const [content, setContent] = useState({
    title: '',
    description: '',
    body: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Content submitted:', content)
    // TODO: Connect to API
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setContent(prev => ({ ...prev, [id]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Content</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <ContentForm
              values={content}
              onChange={handleInputChange}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
