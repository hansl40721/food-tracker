import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from  'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Grocery from './pages/Grocery.jsx'
import Lists from './pages/Lists.jsx'
import Pantry from './pages/Pantry.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong Page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/pantry',
        element: <Pantry />
      }, {
        path: '/lists',
        element: <Lists />
      }, {
        path: '/grocery',
        element: <Grocery />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)