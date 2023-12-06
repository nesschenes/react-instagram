import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import NAV from '@assets/nav-instagram.png'
import { App } from './App'

ReactDOM.render(
  <BrowserRouter>
    {/* {
      <div className="app--header">
        <img className="app--nav" src={NAV} alt="nav-logo" />
      </div>
    } */}
    <App />,
  </BrowserRouter>,
  document.getElementById('root')
)
