import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./Components/Error/Error.jsx";
import Login from "./Components/Sign/Login.jsx";
import Signup from "./Components/Sign/Signup.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import MyTask from "./Components/Task/MyTask.jsx";
import BrowseTask from "./Components/Task/BrowseTask.jsx";
import AddTask from "./Components/Task/AddTask.jsx";
import TaskDetails from "./Components/Task/TaskDetails.jsx";
import AuthProvider from "./Components/AuthProvider.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import MyTaskData from "./Components/Task/MyTaskData.jsx";
import UpdateTask from "./Components/Task/UpdateTask.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import Home from "./Components/Home/Home.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        loader: () => fetch("https://server-side-delta-ebon.vercel.app/tasks"),
         hydrateFallbackElement:<Loading></Loading>,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addtask",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
      },
      {
        path: "/browsetask",
        loader: () => fetch("https://server-side-delta-ebon.vercel.app/tasks"),
        hydrateFallbackElement:<Loading></Loading>,
        element: <BrowseTask></BrowseTask>,
      },
      {
        path: "/mytask",
        loader: () => fetch("https://server-side-delta-ebon.vercel.app/tasks"),
        hydrateFallbackElement:<Loading></Loading>,
        element: <PrivateRoute><MyTask></MyTask></PrivateRoute>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/task/:id",
        loader: ({ params }) =>
          fetch(`https://server-side-delta-ebon.vercel.app/tasks/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>,
        element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
      },
      {
        path: "/task_details/:id",
        loader: ({ params }) =>
          fetch(`https://server-side-delta-ebon.vercel.app/tasks/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>,
        element: <PrivateRoute><MyTaskData></MyTaskData></PrivateRoute>,
      },
      {
        path: "/update_task/:id",
        loader: ({ params }) =>
          fetch(`https://server-side-delta-ebon.vercel.app/tasks/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>,
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
