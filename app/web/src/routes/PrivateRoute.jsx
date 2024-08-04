import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {

   const isAuthenticated = useAuth();
   console.log(isAuthenticated);
   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;