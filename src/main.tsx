import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import Signup from "./Pages/Signup/Signup.tsx";
import Login from "./Pages/Login/Login.tsx";
import {UserProvider} from "./Context/AuthContext.tsx";
import ClassesList from "./Pages/ClassesList/ClassesList.tsx";
const isAuthenticated = false;
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
    {
        path: "/classes",
        element: <ClassesList />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
  </React.StrictMode>,
)
