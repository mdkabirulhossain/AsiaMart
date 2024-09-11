import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../components/Layout/Main";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import SignUp from "../pages/SignUp/SignUp";
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/forgotPassword",
          element:<ForgotPassword/>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
      ]
    },
  ]);

  export default router;