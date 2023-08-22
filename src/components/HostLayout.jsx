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
          to="/vanlifeweb/host"
          end
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/vanlifeweb/host/income"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/vanlifeweb/host/vans"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/vanlifeweb/host/reviews"
          style={({ isActive }) => (isActive ? styleIsActive : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
