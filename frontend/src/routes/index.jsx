import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../components/Layout/Main";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import SignUp from "../pages/SignUp/SignUp";
import Collection from "../components/Collection/Collection";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
  

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
        {
          path:"/collection",
          element:<Collection/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
      ]
    },
  ]);

  export default router;