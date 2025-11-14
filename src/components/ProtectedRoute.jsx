import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, getRole } from "../lib/auth";

export default function ProtectedRoute({ children, requiredRole }) {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  if (requiredRole && getRole() !== requiredRole)
    return <div className="card">Access Denied</div>;
  return children;
}
