import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from '@/components/ui/input'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-8">Vite + React</h1>
      <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-4"
        >
          count is {count}
        </button>
        <Button variant="secondary">This is another button</Button>
        <p className="mt-4 text-gray-600">
          Edit <code className="font-mono bg-gray-100 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 mb-8">
        Click on the Vite and React logos to learn more
      </p>
      
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>ShadCN Test</CardTitle>
          <CardDescription>This card verifies shadcn components work with Tailwind</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button variant="outline">Outline Button</Button>
          <Button>Default Button</Button>
          <Button variant="secondary">Destructive Button</Button>
          <Input/>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
