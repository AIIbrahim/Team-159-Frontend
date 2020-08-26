import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css/";
import { IconContext } from "react-icons";
import { BsFillBellFill } from "react-icons/bs"; 
import { BsChevronCompactRight} from "react-icons/bs"; 
import { Link } from "react-router-dom";
import "./Navbar.css";

class Slider extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img className="logo" src="https://res.cloudinary.com/dtu2furcy/image/upload/v1598400012/SDG%202020/Group_142176_1_c1ajwn.svg"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content" id="navbarNav">
    <ul class="navbar-nav ml-auto header_navbar">
       <li class="nav-item">
        <a class="nav-link px-3" href="#" ><IconContext.Provider value={{color: "#3b3e51", padding: "0" }}><BsFillBellFill /></IconContext.Provider></a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-3" href="#"><img className="user_photo" src="https://res.cloudinary.com/dtu2furcy/image/upload/v1598399999/SDG%202020/logo1_oetlr5.png"/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-3" href="#">AIGBE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-3" href="#" ><IconContext.Provider value={{color: "#3b3e51" }}><BsChevronCompactRight /></IconContext.Provider>
        </a>
      </li>
    
    </ul>
  </div>
</nav>
           
          
      
            </div>
         );
    }
}
 
export default Slider;