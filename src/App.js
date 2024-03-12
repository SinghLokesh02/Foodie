// Importing Header, Body
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header Component */}
      <Header />
      <Outlet/> 
    </div>
  );
};


// Router 

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children : [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement:<Error/>
  },
  

])


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router = {appRouter}/>)
