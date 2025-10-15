import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/HOme/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
    ]
  },
  {
    
  }
])