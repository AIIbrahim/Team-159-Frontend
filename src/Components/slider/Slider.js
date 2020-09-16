import React, { Component } from 'react'
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import "./Slider.css";

class Slider extends Component {
    render() {
        return (  
                 <div className="col_body bg-white">
                    <ul>
                        <li>
                        <span> <IconContext.Provider
                                value={{color: "#3b3e51" }}><BsFillGrid1X2Fill /> </IconContext.Provider></span> Home
                        </li>
                       <li>
                        <span> <IconContext.Provider
                         value={{ color: "#3b3e51" }}><FaCartArrowDown /> </IconContext.Provider></span> My packages
                       </li>
                      <li>
                       <Link to="/dispatcher" style={{textDecoration:"none" , color: "#3b3e51"}}><span className="pr-2" style={{pointer: "cursor"}}> <IconContext.Provider
                        value={{ color: "#3b3e51" }}><FaLocationArrow /> </IconContext.Provider></span> Dispatcher
                      </Link>
                      </li>
                    <li className="active">
                    <span> <IconContext.Provider
                    value={{ color: "#3b3e51" }}><FaUserAlt /> </IconContext.Provider></span> Profile
                    </li>
                    <li>
                    <span> <IconContext.Provider
                    value={{ color: "#3b3e51" }}><FiSettings /> </IconContext.Provider></span> Settings
                    </li>
                     <li>
                     <span> <IconContext.Provider
                    value={{ color: "#3b3e51" }}><FaUserShield /> </IconContext.Provider></span>Suport
                     </li>
                    
                    </ul>
                    
                 </div>
        )
    }
}

export default Slider
