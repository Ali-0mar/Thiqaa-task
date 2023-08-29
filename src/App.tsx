import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import ClassesList from "./Pages/ClassesList/ClassesList.tsx";
import Signup from "./Pages/Signup/Signup.tsx";
import Login from "./Pages/Login/Login.tsx";
import BookingForm from "./Pages/ScheduleClass/ScheduleClass.tsx";
import {useUserContext} from "./Context/AuthContext.tsx";

function App() {
  const {activeUser} = useUserContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: activeUser ? <ClassesList /> : <Navigate to={"/classes"}/>
    },
    {
      path: "/signup",
      element: activeUser ? <Navigate to='/' /> : <Signup />,
    },
    {
      path: "/login",
      element: activeUser ? <Navigate to='/' /> : <Login />,
    },
    {
      path: "/classes",
      element: activeUser ? <ClassesList /> : <Navigate to='/login' />,
    },
    {
      path: "/new-session",
      element: activeUser ?  <BookingForm/> : <Navigate to='/login' />
    }
  ]);
  return (
      <div className='container'>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
