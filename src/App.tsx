import './App.css'
import LOGO from '../asset/logo.png'

export const App = () => {
  return (
    <>
      <h1>
        {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={LOGO} alt="Logo" />
    </>
  )
}
