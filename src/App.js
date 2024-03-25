// Importing Header, Body
import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Lets do lazy Loading for About Us
// import About from "./components/About";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Lazy Loading
// Dynamic Bundling
// On demand Loading

// Lazy function of Loading Grocery
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const Userinfo = {
      name: "Lokesh Singh",
    };
    setUserName(Userinfo.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedinUser: userName, setUserName }}>
      <div className="app">
        {/* Header Component */}
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

// Router

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>The Data is Loading ...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery/",
        element: (
          <Suspense fallback={<h1>The Data is Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
