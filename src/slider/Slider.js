import React, { Component } from 'react'
import { IconContext } from "react-icons";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import "./Slider.css";

export class navbar extends Component {
    render() {
        return (
            <div>
                <div className= "row">    
                 <div className="col-md-2 col-lg-2 col-sm-2 col_body">
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
                        <span> <IconContext.Provider
                        value={{ color: "#3b3e51" }}><FaLocationArrow /> </IconContext.Provider></span> Dispatcher
                      </li>
                    <li>
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
                </div>
                
            </div>
        )
    }
}

export default navbar
