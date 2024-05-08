import React from 'react';
import ReactDOM from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Detection from './pages/Detection';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  }, 
  {
    path: '/home',
    element: <Homepage />,
  }, 
  {
    path: '/detection',
    element: <Detection />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/github',
    element: (
      <a className='text-white' href="https://github.com/parthasdey2304" target="_blank" rel="noopener noreferrer">
        Redirecting to GitHub
      </a>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Homepage /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
