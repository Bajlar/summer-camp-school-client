import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }


  if (user && !isAdmin && !isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;