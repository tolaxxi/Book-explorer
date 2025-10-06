import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
