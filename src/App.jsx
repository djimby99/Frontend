import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import Main from "./components/main";
import EditProfilePage from "./components/editProfile";
import { AuthProvider } from "./authContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/edit",
    element: <EditProfilePage />,
  },
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
