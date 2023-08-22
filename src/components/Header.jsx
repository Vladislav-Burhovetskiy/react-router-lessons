import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link className="site-logo" to="/react-router-lessons">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/react-router-lessons/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/react-router-lessons/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/react-router-lessons/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <div>

        </div>
        <Link to="/react-router-lessons/login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("loggedin");
          }}
        >
          Log out
        </button>
      </nav>
    </header>
  );
}
