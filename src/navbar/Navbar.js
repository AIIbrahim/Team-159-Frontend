import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css/";
import { IconContext } from "react-icons";
import { BsFillBellFill } from "react-icons/bs"; 
import { BsChevronCompactRight} from "react-icons/bs"; 
import "./Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#"><img className="logo" src="https://res.cloudinary.com/dtu2furcy/image/upload/v1598400012/SDG%202020/Group_142176_1_c1ajwn.svg"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content" id="navbarNav">
    <ul className="navbar-nav ml-auto header_navbar">
       <li className="nav-item">
        <Link className="nav-link px-3" to="" ><IconContext.Provider value={{color: "#3b3e51", padding: "0" }}><BsFillBellFill /></IconContext.Provider></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link px-3" to=""><img className="user_photo" src="https://res.cloudinary.com/dtu2furcy/image/upload/v1598399999/SDG%202020/logo1_oetlr5.png"/></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link px-3" to="">AIGBE</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link px-3" to=""><IconContext.Provider value={{color: "#3b3e51" }}><BsChevronCompactRight /></IconContext.Provider>
        </Link>
      </li>
    
    </ul>
  </div>
</nav>
         
            </div>
         );
    }
}
 
export default Navbar;