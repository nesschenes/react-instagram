import { RouteObject } from 'react-router-dom'
import { About } from './pages/about/About'
import { Explore } from './pages/explore/Explore'
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
  {
    path: '/explore',
    element: <Explore />,
    children: [],
  },
]

export default routes
