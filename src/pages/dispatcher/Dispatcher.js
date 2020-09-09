import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css/";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {GiNorthStarShuriken} from "react-icons/gi";
import { GoVerified} from "react-icons/go";
// import { FaSearch } from "react-icons/fa";

import "./dispatcher.css";
import Slider from "../../Components/slider/Slider";


class Dispatcher extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row no-gutters">
                <Slider />
                 <div className="col-lg-10"> 
               <div className="my-5 pl-5">
                <nav class="navbar navbar-light bg-light">
                 <Link to="/dispatcher" className="navbar-brand font-weight-bold" style={{color: "rgba(20, 93, 160, 1)"}}>Dispatchers</Link>
                  <form className="form-inline">      
                    <input className="form-control mr-sm-2 rounded" type="search" placeholder="Type to search" aria-label="Search"/>
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </nav>
                
                <div className="table-responsive">    
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>
                                <th>ADDRESS</th>
                                <th>ROUTES</th>
                                <th>PRICING</th>
                                <th>RATING</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                            <tr>
                                <td><IconContext.Provider value={{color: "rgba(46, 139, 192, 1)" }}>< GoVerified /></IconContext.Provider></td>
                                <td><span></span>Kene</td>
                                <td>Lorem Lorem Lorem</td>
                                <td>info@goto.io</td>
                                <td>+2438168789414</td>
                                <td>Nairobi, Kenya</td>
                                <td>Nairobi, Mombasa, Kisumu, Eldoret, Nakuru,
                                Kisii, Machokos </td>
                                <td><Link to="">Calculator</Link></td>
                                <td>
                                   <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                   <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                   <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                   <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                </td>
                            </tr>

                            <tr>
                            <td><IconContext.Provider value={{color: "rgba(46, 139, 192, 1)" }}>< GoVerified /></IconContext.Provider></td>
                                <td><span></span>Kene</td>
                                <td>Lorem Lorem Lorem</td>
                                <td>info@goto.io</td>
                                <td>+254779025590</td>
                                <td>Nairobi, Kenya</td>
                                <td>Nairobi, Mombasa, Kisumu, Eldoret, Nakuru,
                                Kisii, Machokos </td>
                                <td><Link to="">Calculator</Link></td>
                                <td>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                </td>
                            </tr> 
                            <tr>
                            <td><IconContext.Provider value={{color: "rgba(46, 139, 192, 1)" }}>< GoVerified /></IconContext.Provider></td>
                                <td><span></span>Kene</td>
                                <td>Lorem Lorem Lorem</td>
                                <td>info@goto.io</td>
                                <td>+254779025590</td>
                                <td>Nairobi, Kenya</td>
                                <td>Nairobi, Mombasa, Kisumu, Eldoret, Nakuru,
                                Kisii, Machokos </td>
                                <td><Link to="">Calculator</Link></td>
                                <td>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                        <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                        <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                        <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                                            </td>
                            </tr>
                             <tr>
                             <td><IconContext.Provider value={{color: "rgba(46, 139, 192, 1)" }}>< GoVerified /></IconContext.Provider></td>
                                <td><span></span>Kene</td>
                                <td>Lorem Lorem Lorem</td>
                                <td>info@goto.io</td>
                                <td>+254779025590</td>
                                <td>Nairobi, Kenya</td>
                                <td>Nairobi, Mombasa, Kisumu, Eldoret, Nakuru,
                                Kisii, Machokos </td>
                                <td><Link to="">Calculator</Link></td>
                                <td>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                        <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                        <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                        <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                </td>
                            </tr> 
                            <tr>
                            <td><IconContext.Provider value={{color: "rgba(46, 139, 192, 1)" }}>< GoVerified /></IconContext.Provider></td>
                                <td>Kene</td>
                                <td>Lorem Lorem Lorem</td>
                                <td>info@goto.io</td>
                                <td>+254779025590</td>
                                <td>Nairobi, Kenya</td>
                                <td>Nairobi, Mombasa, Kisumu, Eldoret, Nakuru,
                                Kisii, Machokos </td>
                                <td><Link to="">Calculator</Link></td>
                                <td> <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span></td>
                            </tr> 
                            <tr>
                            <td><IconContext.Provider value={{color: "rgba(46, 139, 192, 1)" }}>< GoVerified /></IconContext.Provider></td>
                                <td>Kene</td>
                                <td>Lorem Lorem Lorem</td>
                                <td>info@goto.io</td>
                                <td>+254779025590</td>
                                <td>Nairobi, Kenya</td>
                                <td>Nairobi, Mombasa, Kisumu, Eldoret, Nakuru,
                                Kisii, Machokos </td>
                                <td><Link to="">Calculator</Link></td>
                                <td> <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span></td>
                            </tr> 
                            <tr>
                            <td><IconContext.Provider value={{color: "rgba(46, 139, 192, 1)" }}>< GoVerified /></IconContext.Provider></td>
                                <td>Kene</td>
                                <td>Lorem Lorem Lorem</td>
                                <td>info@goto.io</td>
                                <td>+254779025590</td>
                                <td>Nairobi, Kenya</td>
                                <td>Nairobi, Mombasa, Kisumu, Eldoret, Nakuru,
                                Kisii, Machokos </td>
                                <td><Link to="">Calculator</Link></td>
                                <td> <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                    <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span></td>
                            </tr> 
                            <tr>
                            <td><IconContext.Provider value={{color: "rgba(46, 139, 192, 1)" }}>< GoVerified /></IconContext.Provider></td>
                                <td>Kene</td>
                                <td>Lorem Lorem Lorem</td>
                                <td>info@goto.io</td>
                                <td>+254779025590</td>
                                <td>Nairobi, Kenya</td>
                                <td>Nairobi, Mombasa, Kisumu, Eldoret, Nakuru,
                                Kisii, Machokos </td>
                                <td><Link to="">Calculator</Link></td>
                                <td> <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span>
                                <span><IconContext.Provider value={{color: "#FFB300" }}>< GiNorthStarShuriken /></IconContext.Provider></span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="table-footer text-center p-2">
                        <span className="mr-3">&#8810;</span>
                        <span className="mr-3">&lt;</span>
                        <span>10 of 172 records</span>
                        <span className="ml-3">&gt;</span>
                        <span className="ml-3">&#8811;</span>
                 </div>
                </div>
               </div>
               </div>
           
               
            </div>
            </React.Fragment>
        )
    }
}

export default Dispatcher
