import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;





// import { Navigate, useLocation } from "react-router-dom";

// import Loader from "../components/Loader";
// import useAuth from "../hooks/useAuth";
// import useInstructor from "../hooks/useInstructor";

// const InstructorRoute = ({ children }) => {
//   const { user, loading } = useAuth();
//   const [isInstructor, isInstructorLoading] = useInstructor();
//   const location = useLocation();

//   if (loading || isInstructorLoading) {
//     return <Loader />;
//   }
//   if (user && isInstructor) {
//     return children;
//   }
//   return <Navigate to="/" state={{ from: location }} replace />;
// };

// export default InstructorRoute;
