import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/HOme/Home";
import Menu from "../Pages/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/menu',
          element: <Menu></Menu>,
        }
    ]
  },
  {
    
  }
])