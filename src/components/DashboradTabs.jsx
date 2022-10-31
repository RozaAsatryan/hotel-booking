import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { NavLink } from "react-bootstrap";
import { useEffect } from "react";

const DashboardTabs = () => {
  // const [active, setActive] = useState(window.location.pathname);

  const params = useLocation();

  return (
    <Container>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            // onClick={() => setActive("/dashboard/bookings")}
            className={`nav-link ${
              params.pathname === "/dashboard/bookings" && "active"
            }`}
            to="/dashboard/bookings"
          >
            Your Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // onClick={() => setActive("/dashboard/seller")}
            className={`nav-link ${
              params.pathname === "/dashboard/seller" && "active"
            }`}
            to="/dashboard/seller"
          >
            Your Hotels
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default DashboardTabs;
