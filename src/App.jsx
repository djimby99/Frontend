import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import Main from "./components/main";
import EditProfilePage from "./components/editProfile";
import { AuthProvider } from "./authContext";
import LoginPage from "./components/login";
import SignupPage from "./components/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/edit",
    element: <EditProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  }
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
