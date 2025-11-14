import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, logout, getRole, isAuthenticated } from "../lib/auth";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const auth = getAuth();
  const role = getRole();
  const nav = useNavigate();
  function doLogout() {
    logout();
    nav("/login");
  }

  return (
    <div className="nav">
      <div>
        <strong>Slooze</strong>
        {isAuthenticated() && role === "Manager" && (
          <Link to="/dashboard" style={{ marginLeft: 12, color: "inherit" }}>
            Dashboard
          </Link>
        )}
        {isAuthenticated() && (
          <Link to="/products" style={{ marginLeft: 12, color: "inherit" }}>
            Products
          </Link>
        )}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <ThemeToggle />
        {auth ? (
          <>
            <div className="small-muted">
              {auth.email} ({auth.role})
            </div>
            <button className="button" onClick={doLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
