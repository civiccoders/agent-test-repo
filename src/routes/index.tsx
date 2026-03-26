import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '80px auto', textAlign: 'center' }}>
      <h1>TanStack Router Starter</h1>
      <p>A basic page powered by TanStack Router + React + Vite.</p>
    </main>
  )
}
