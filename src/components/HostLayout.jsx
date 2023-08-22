import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const styleIsActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/react-router-lessons/host"
          end
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/react-router-lessons/host/income"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/react-router-lessons/host/vans"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/react-router-lessons/host/reviews"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
