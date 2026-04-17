import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import StudentsPage from "../pages/StudentsPage/StudentsPage";
import TimelinePage from "../pages/TimelinePage/TimelinePage";
import Deshboard from "../pages/Deshboard/Deshboard";
import StudentsDetails from "../Ui/StudentsDetails/StudentsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/students",
        element: <StudentsPage></StudentsPage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/timeline",
        element: <TimelinePage></TimelinePage>,
      },
      {
        path: "/dashboard",
        element: <Deshboard></Deshboard>,
      },
      {
        path: "/student/:id",
        element: <StudentsDetails></StudentsDetails>,
        loader: ()=> fetch('/data.json')
      },
    ],
    errorElement: "404 page not fund",
  },
]);
