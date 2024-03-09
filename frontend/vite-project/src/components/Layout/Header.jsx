import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import "./header.css";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully!!");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <FaOpencart className="navbar-logo" />
          <span className="brand-name">Bachelors25</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className="nav-link"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {!auth.user ? (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="active">
                  Log In
                </NavLink>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <NavLink
                  to="/dashboard"
                  className="nav-link dropdown-toggle"
                  activeClassName="active"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {auth?.user.name}
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <NavLink
                      to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                      className="dropdown-item"
                      activeClassName="active"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="dropdown-item btn"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/my-cart" className="nav-link" activeClassName="active">
                Cart(0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
