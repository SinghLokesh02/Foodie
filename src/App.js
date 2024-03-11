// Importing Header, Body
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter } from "react-router-dom";


const MainComponent = () => {
  return (
    <div className="app">
      {/* Header Component */}
      <Header />
      {/* Body Component */}
      <Body />
    </div>
  );
};




const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<MainComponent />);
