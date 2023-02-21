import React from "react";
import "./App.scss"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Count from "./pages/Count";


const App = () =>{

  const router = createBrowserRouter([
        {
          path: "/",
          element:<Home/>,
        },
        {
            path: "watch",
            element:<Watch/>,
          },
          {
            path: "register",
            element:<Register/>,
          },
          {
            path: "login",
            element:<Login/>,
          },
          {
            path: "/count",
            element:<Count/>,
          },

      ]);
      
      ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      );  
}

export default App;
