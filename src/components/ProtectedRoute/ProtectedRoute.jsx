import React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/" />;
}
