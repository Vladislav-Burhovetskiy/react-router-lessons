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
      <Link className="site-logo" to="/vanlifewebs">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/vanlifewebs/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/vanlifewebs/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vanlifewebs/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <div>

        </div>
        <Link to="/vanlifewebs/login" className="login-link">
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
