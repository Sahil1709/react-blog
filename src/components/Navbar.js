import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";
import { Context } from "../context/Context";
import { useContext } from "react";
import { Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blough-site.herokuapp.com/images/";
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
                  All Blogs
                </Link>
              </li>
              {user && (
                <li className="nav-item">
                  <Link className="nav-link" to={`/?user=${user.username}`}>
                    My Blogs
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/create-blog">
                  Create Blog
                </Link>
              </li>
              {user ? (
                <li className="nav-item">
                  <Link
                    style={{ padding: "0px" }}
                    className="nav-link"
                    to="/account"
                  >
                    <span style={{ paddingRight: "1rem" }}>
                      Hello, {user.username}
                    </span>
                    <img
                      width="40px"
                      height="40px"
                      src={user?.profilePicture && PF + user.profilePicture}
                      alt=""
                    />
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

              <li style={{ padding: ".5rem" }} className="nav-item">
                {user && (
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<ExitToAppIcon />}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
