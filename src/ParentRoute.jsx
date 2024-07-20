import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";
import "./App.css";

const ParentRoute = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <div className="App">
      <nav className="navbar text-center navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {navbarExpanded ? 'Blog Category' : null}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={navbarExpanded}
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse justify-content-center ${navbarExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/full-stack-development">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-science">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cyber-security">
                CYBER SECURITY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">
                CAREER
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default ParentRoute;
