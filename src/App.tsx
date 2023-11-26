import { Route, Routes } from 'react-router-dom'
import NAV from '@assets/nav-instagram.png'
import { About } from '@pages/about/About'
import { Home } from '@pages/home/Home'
import './App.css'

export const App = () => {
  return (
    <>
      <div className="app--header">
        <img className="app--nav" src={NAV} alt="nav-logo" />
      </div>
      {/*header*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
