import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import SinglePageProduct from "./Components/SinglePageProduct";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singleProduct/:id",
        element: <SinglePageProduct />,
      },
    ],
  },
]);

export default App;
