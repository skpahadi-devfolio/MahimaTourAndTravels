import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import UserDashboard from './Pages/UserDashboard'
import AdminDashboard from './Pages/AdminDashboard'
import UserProfile from './Components/Users/UserProfile'
import UserBooking from './Components/Users/UserBooking'
import UserMyAllBooking from './Components/Users/UserMyAllBooking'
import UserFeedback from './Components/Users/UserFeedback'
import AdminProfile from './Components/Admin/AdminProfile'
import AdminManageBooking from './Components/Admin/AdminManageBooking'
import History from './Components/Admin/History'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/about",
      element: <><About/></>
    },
    {
      path: "/services",
      element: <><Services/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    },
    {
      path: "/signup",
      element: <><Signup/></>
    },
    {
      path: "/user-dashboard",
      element: <UserDashboard/>,

      children: [
        {
          path: "profile",
          element: <><UserProfile/></>
        },
        {
          path: "mybooking",
          element: <><UserBooking/></>
        },
        {
          path: "allbooking",
          element: <><UserMyAllBooking/></>
        },
        {
          path: "feedback",
          element: <><UserFeedback/></>
        }
      ]
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard/>,

      children: [
        {
          path: "profile",
          element: <><AdminProfile/></>
        },
        {
          path: "adminManageBooking",
          element: <><AdminManageBooking/></>
        },
        {
          path: "history",
          element: <><History/></>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
