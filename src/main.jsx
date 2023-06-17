import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Pages/Home.jsx';
import AddCoffee from './Component/Pages/Coffee/AddCoffee.jsx';
import Coffee from './Component/Pages/Coffee/Coffee.jsx';
import UpdateCoffee from './Component/Pages/Coffee/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path:'/addcoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/coffee', 
    element:<Coffee></Coffee>,
  },
  {
    path:'/updatecoffee/:id', 
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`https://coffe-house-server-shakil-121.vercel.app/coffees/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
