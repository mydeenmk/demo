import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = Cookies.get('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  // Optionally: Add token validation logic here if needed

  return <Component {...rest} />;
};

export default ProtectedRoute;
