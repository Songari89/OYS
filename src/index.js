import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/util/constants.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Management from "./pages/Management";
import Mypage from "./pages/Mypage";
import ProductsByCategory from "./pages/ProductsByCategory";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "/:category", element: <ProductsByCategory /> },
      { path: "/:category/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/management", element: <Management /> },
      { path: "/mypage", element: <Mypage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
