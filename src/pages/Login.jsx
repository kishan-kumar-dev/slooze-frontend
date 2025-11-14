import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/auth";

export default function Login() {
  const [email, setEmail] = useState("manager@example.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      await login({ email, password });
      nav("/products");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div style={{ maxWidth: 640, margin: "20px auto" }}>
      <div className="card">
        <h2>Login</h2>
        <p className="small-muted">
          Demo: manager@example.com or store@example.com (password)
        </p>
        <form
          onSubmit={submit}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {error && <div style={{ color: "salmon" }}>{error}</div>}
          <div style={{ display: "flex", gap: 8 }}>
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
