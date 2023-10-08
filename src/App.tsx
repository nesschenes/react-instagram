import { Route, Routes } from 'react-router-dom'
import NAV from '../asset/nav-instagram.png'
import { About } from './About'
import { Home } from './Home'
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
