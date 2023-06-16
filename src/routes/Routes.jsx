import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import Feedback from "../pages/Dashboard/Feedback/Feedback";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "feedback",
        element: <Feedback></Feedback>,
      },
    ],
  },
]);

export default router;
