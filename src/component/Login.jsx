import React from 'react';
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <form
          style={{
            backgroundColor: "#fff",
            height: "420px",
            width: "250px",
            borderRadius: "15px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ textAlign: "center", color: "#333" }}>Login Form</h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <label style={{ fontWeight: "600", color: "#555" }}>Username:</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />

            <label style={{ fontWeight: "600", color: "#555" }}>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "1.5rem",
              backgroundColor: "#4a90e2",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#357ABD")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
          >
            <Link to="/Portfolio">Login</Link>
          </button>

          <p style={{ textAlign: "center", fontSize: "14px", color: "#777" }}>
            Don’t have an account?{" "}
            <Link to="/signup" style={{ color: "#4a90e2", textDecoration: "none", fontWeight: "600" }}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
