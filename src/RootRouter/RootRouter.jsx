import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import StudentsPage from "../pages/StudentsPage/StudentsPage";
import TimelinePage from "../pages/TimelinePage/TimelinePage";
import Deshboard from "../pages/Deshboard/Deshboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/students",
        element: <StudentsPage></StudentsPage>,
      },
      {
        path: '/timeline',
        element: <TimelinePage></TimelinePage>
      },
      {
        path: '/dashboard',
        element: <Deshboard></Deshboard>
      }
    ],
    errorElement: "404 page not fund",
  },
]);
