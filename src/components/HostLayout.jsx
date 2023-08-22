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
          to="/vanlifewebs/host"
          end
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/vanlifewebs/host/income"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/vanlifewebs/host/vans"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/vanlifewebs/host/reviews"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
