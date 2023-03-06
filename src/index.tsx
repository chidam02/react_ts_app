import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/custom.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import Home from "./pages/home";
import AuthPage from "./pages/Auth";
import { Provider } from "react-redux";
import configureAppStore, { appInitialState } from "./store";
import SignUp from "./pages/Auth/features/signUp";
import SignIn from "./pages/Auth/features/signIn";

const store = configureAppStore(appInitialState);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <h2>BLOG PAGE</h2>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children:[{
      path:"signUp",
      element: <SignUp/>
    },
    {
      path:"signIn",
      element: <SignIn/>
    }
  ]
  },
]);







const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
