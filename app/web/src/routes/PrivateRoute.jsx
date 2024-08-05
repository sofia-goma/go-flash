import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {

   const isAuthenticated = useAuth() || true;
   
   console.log(isAuthenticated);
   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;