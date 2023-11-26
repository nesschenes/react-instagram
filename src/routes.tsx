import { RouteObject } from 'react-router-dom'
import { About } from './pages/about/About'
import { Home } from './pages/home/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: '/about',
    element: <About />,
    children: [],
  },
]

export default routes
