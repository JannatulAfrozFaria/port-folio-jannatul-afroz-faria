import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import {HelmetProvider } from 'react-helmet-async';
import Resume from './Pages/Resume.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/resume",
        element: <Resume></Resume>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
)
