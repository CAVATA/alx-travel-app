import React from "react";
import { Link } from "react-router-dom";

export default function Header({ user }) {
  return (
    <header className="header">
      <div className="brand">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M6 15L9 9L15 12L18 8" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <div style={{fontSize:16}}>TravelApp</div>
          <div className="small">Discover. Plan. Experience.</div>
        </div>
      </div>

      <nav className="nav">
        <Link to="/" className="small">Home</Link>
        <Link to="/explore" className="small">Explore</Link>
        <Link to="/planner" className="small">Planner</Link>
        <Link to="/safari" className="small">Safari</Link>
        <Link to="/dashboard" className="small">Dashboard</Link>
        <Link to="/profile" className="small">{user?.name || "Profile"}</Link>
      </nav>
    </header>
  );
}
