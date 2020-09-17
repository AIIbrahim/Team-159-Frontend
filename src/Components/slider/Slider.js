import React, { Component } from "react";
import { IconContext } from "react-icons";
import { Link, withRouter } from "react-router-dom";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import {
  FaLocationArrow,
  FaUserAlt,
  FaCartArrowDown,
  FaUserShield,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import "./Slider.css";

class Slider extends Component {
  state = {
    activeLink: "",
  };

  changeUrl = () => {
    const pathname = this.props.location.pathname.split("/");
    const activeLink = pathname[1];
    this.setState({ activeLink });
  };

  componentDidMount() {
    this.changeUrl();
  }

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.changeUrl();
    }
  }

  render() {
    const { activeLink } = this.state;
    return (
      <div className="col-md-6 col-lg-2 col-sm-12 col_body bg-white">
        <ul>
          <li className={activeLink === "" && "active"}>
            <Link to="/">
              <span>
                <IconContext.Provider value={{ color: "#3b3e51" }}>
                  <BsFillGrid1X2Fill />
                </IconContext.Provider>
              </span>
              Home
            </Link>
          </li>
          <li className={activeLink === "packages" && "active"}>
            <Link to="/packages">
              <span>
                <IconContext.Provider value={{ color: "#3b3e51" }}>
                  <FaCartArrowDown />
                </IconContext.Provider>
              </span>
              My packages
            </Link>
          </li>
          <li className={activeLink === "dispatcher" && "active"}>
            <Link to="/dispatcher">
              <span>
                <IconContext.Provider value={{ color: "#3b3e51" }}>
                  <FaLocationArrow />
                </IconContext.Provider>
              </span>
              Dispatcher
            </Link>
          </li>
          <li className={activeLink === "profile" && "active"}>
            <Link to="/profile">
              <span>
                <IconContext.Provider value={{ color: "#3b3e51" }}>
                  <FaUserAlt />
                </IconContext.Provider>
              </span>
              Profile
            </Link>
          </li>
          <li className={activeLink === "settings" && "active"}>
            <Link to="/settings">
              <span>
                <IconContext.Provider value={{ color: "#3b3e51" }}>
                  <FiSettings />
                </IconContext.Provider>
              </span>
              Settings
            </Link>
          </li>
          <li className={activeLink === "Support" && "active"}>
            <Link to="/Support">
              <span>
                <IconContext.Provider value={{ color: "#3b3e51" }}>
                  <FaUserShield />
                </IconContext.Provider>
              </span>
              Suport
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Slider);
