import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import "./Navbar.css";
import { Context } from "../context/Context";
import { useContext } from "react";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Blog Site
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
            <MenuIcon />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/viewblog">
                  View Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-blog">
                  Create Blog
                </Link>
              </li>
              {user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    <img
                      width="40px"
                      height="40px"
                      src={user?.profilePicture && PF + user.profilePicture}
                      alt=""
                    />
                    Hello, {user.username}
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>{" "}
                </>
              )}

              <li
                style={{ padding: ".5rem" }}
                className="nav-item"
                onClick={handleLogout}
              >
                {user && "Logout"}
              </li>
            </ul>
          </div>
          <div>
            <TextField variant="outlined" label="Search" />
            <IconButton>
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </nav>
    </div>
  );
}
