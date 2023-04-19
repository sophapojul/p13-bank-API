import { Outlet, Navigate } from 'react-router-dom';

/**
 * Private routes component
 * @returns React component for private routes
 */
function PrivateRoutes() {
  const isAuthenticated = localStorage.getItem('token');
  return !!isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoutes;
