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
import ContactPage from './Pages/ContactPage.jsx';
import Education from './Pages/Education.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import ProjectMenu from './Pages/Projects/ProjectMenu.jsx';
import Project1 from './Pages/Projects/ProjectList/Project1.jsx';
import Project2 from './Pages/Projects/ProjectList/Project2.jsx';
import Project3 from './Pages/Projects/ProjectList/Project3.jsx';
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
        path: "/resume",
        element: <Resume></Resume>
      },
      {
        path: "/contactPage",
        element: <ContactPage></ContactPage>
      },
      {
        path: '/projectMenu/project1',
        element: <Project1></Project1>
      },
      {
        path: '/projectMenu/project2',
        element: <Project2></Project2>
      },
      {
        path: '/projectMenu/project3',
        element: <Project3></Project3>
      },
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
