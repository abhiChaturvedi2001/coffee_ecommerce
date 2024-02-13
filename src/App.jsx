import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import SinglePageProduct from "./Components/SinglePageProduct";
import Address from "./Components/Address";
import CheckoutPage from "./Components/CheckoutPage";

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
        path: "/address",
        element: <Address />,
      },
      {
        path: "/singleProduct/:id",
        element: <SinglePageProduct />,
      },
      {
        path: "/checkoutPage",
        element: <CheckoutPage />,
      },
    ],
  },
]);

export default App;
