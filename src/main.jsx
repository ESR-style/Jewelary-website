import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Whishlist from './pages/Whishlistpage';
import Loginpage from './pages/Loginpage';
import Shopingpage from './pages/Shopingpage';
import Errorpage from './pages/Errorpage';
import Storepage from './pages/Storepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/Cart",
    element: <Cartpage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/wishlist",
    element: <Whishlist />,
    errorElement: <Errorpage />,
  },
  {
    path: "/login",
    element: <Loginpage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/shop",
    element: <Shopingpage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/stores",
    element: <Storepage />,
  },
  {
    path: "*",
    element: <Errorpage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);