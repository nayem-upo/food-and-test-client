import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from './Components/Layouts';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import ChefDetails from './Components/ChefDetails';
import AuthProvider from './Components/AuthProvider';
import Private from './Components/Private';
import EditInfo from './Components/EditInfo';
import ErrorPage from './Components/ErrorPage';
import Blog from './Components/Blog';
import PassReset from './Components/PassReset';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/details/:id",
        element: <Private><ChefDetails></ChefDetails></Private>
      },
      {
        path: "/edit",
        element: <EditInfo></EditInfo>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/reset",
        element: <PassReset></PassReset>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
