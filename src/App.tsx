import { useRoutes } from 'react-router-dom'
// import NAV from '@assets/nav-instagram.png'
import routes from './routes'
import './App.css'

export const App = () => {
  const element = useRoutes(routes)
  return element
  // return (
  //   <>
  //     <div className="app--header">
  //       <img className="app--nav" src={NAV} alt="nav-logo" />
  //     </div>
  //     {/*header*/}

  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //     </Routes>
  //   </>
  // )
}
