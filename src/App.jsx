import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import Main, { Loader } from "./components/main";
import EditProfilePage from "./components/editProfile";
import { AuthProvider } from "./authContext";
import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import EditAction from "./actions/editaction";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: async () => await Loader()
  },
  {
    path: "/edit",
    element: <EditProfilePage />,
    action: async({request})=>{
      const response = await EditAction({request});
      console.log(response);
      return response;
    }
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
