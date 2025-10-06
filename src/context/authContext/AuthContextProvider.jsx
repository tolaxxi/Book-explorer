import { useState } from 'react';
import { AuthContext } from './AuthContext.jsx';

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logOut = () => setIsAuthenticated(false);
  return <AuthContext.Provider value={{ isAuthenticated, logOut, login }}>{children}</AuthContext.Provider>;
};
