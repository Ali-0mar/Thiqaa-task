import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import Signup from "./Pages/Signup/Signup.tsx";
import Login from "./Pages/Login/Login.tsx";
const isAuthenticated = true;
const router = createBrowserRouter([
    {
        path: "/",
        element: isAuthenticated ? <div>Home Page</div> : <Navigate to={"/signup"}/>
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
