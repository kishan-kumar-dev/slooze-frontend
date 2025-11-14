import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div>
      <Nav />
      <main style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="Manager">
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}
