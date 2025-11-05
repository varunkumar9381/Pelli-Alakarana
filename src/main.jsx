import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import About from './assets/Pages/About.jsx';
import Services from './assets/Pages/Services.jsx';
import Contact from './assets/Pages/Contact.jsx';
import './assets/Pages/navbar/Navbar.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/services",
    element: <Services />,
  },{
    path: "/contact",
    element: <Contact />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
