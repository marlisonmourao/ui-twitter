import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.route'

export function App() {
  return <RouterProvider router={router} />
}
