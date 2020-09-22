import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsFillBellFill } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    const auth = null
    return (
      <div className="top-bar">
        <nav className="navbar navbar-expand-lg navbar-light bg-white clearfix">
          <Link to="/" className="navbar-brand" href="#">
            <img
              className="logo"
              src="https://res.cloudinary.com/dtu2furcy/image/upload/v1598400012/SDG%202020/Group_142176_1_c1ajwn.svg"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content"
            id="navbarNav"
          >
            {auth !== null ? (
              <ul className="navbar-nav ml-auto header_navbar">
                <li className="nav-item">
                  <Link className="nav-link px-3" to="">
                    <IconContext.Provider
                      value={{ color: "#3b3e51", padding: "0" }}
                    >
                      <BsFillBellFill />
                    </IconContext.Provider>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="">
                    <img
                      className="user_photo"
                      src="https://res.cloudinary.com/dtu2furcy/image/upload/v1598399999/SDG%202020/logo1_oetlr5.png"
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="">
                    AIGBE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="">
                    <IconContext.Provider value={{ color: "#3b3e51" }}>
                      <BsChevronCompactRight />
                    </IconContext.Provider>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto header_navbar">
                <li className="nav-item pr-3">
                  <Link className="nav-link" to="">
                    Home
                  </Link>
                </li>
                <li className="nav-item pr-3">
                  <Link className="nav-link " to="">
                    About Us
                  </Link>
                </li>
                <li className="nav-item pr-3">
                  <Link className="nav-link" to="">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item pr-3">
                  <Link className="nav-link" to="">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    class="btn btn-outline-primary dropdown-toggle mr-3"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sign In
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="">
                      Client
                    </Link>
                    <Link className="dropdown-item" to="">
                      Dispatcher
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle mr-3"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sign Up
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="/client-signup">
                      Client
                    </Link>
                    <Link className="dropdown-item" to="">
                      Dispatcher
                    </Link>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
