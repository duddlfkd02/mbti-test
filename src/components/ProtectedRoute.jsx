import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ element: Element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // return isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/signup" />;
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
