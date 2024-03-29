import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/util/Constants.css";
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
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "/products", element: <ProductsByCategory /> },
      { path: "/products/:category", element: <ProductsByCategory /> },
      { path: "/products/:category/:id", element: <ProductDetail /> },
      { path: "/aboutus", element: <NotFound /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/management",
        element: (
          <ProtectedRoute requireAdmin>
            <Management />
          </ProtectedRoute>
        ),
      },
      {
        path: "/mypage",
        element: (
          <ProtectedRoute>
            <Mypage />{" "}
          </ProtectedRoute>
        ),
      },
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
