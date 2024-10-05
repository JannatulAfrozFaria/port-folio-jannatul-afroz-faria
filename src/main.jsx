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
// import Resume from './Pages/CV.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import Education from './Pages/Education.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import CV from './Pages/CV.jsx';
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
        path: "/education",
        element: <Education></Education>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/cv",
        element: <CV></CV>
      },
      {
        path: "/contactPage",
        element: <ContactPage></ContactPage>
      }
    ]
  },
  // {
  //   path: 'projectMenu',
  //   element: <ProjectMenu></ProjectMenu>,
  //   children:[
  //     {
  //       path: 'project1',
  //       element: <Project1></Project1>
  //     },
  //     {
  //       path: 'project2',
  //       element: <Project2></Project2>
  //     },
  //     {
  //       path: 'project3',
  //       element: <Project3></Project3>
  //     },
  //   ]
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
)
