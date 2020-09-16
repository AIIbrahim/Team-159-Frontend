import React, { Component } from "react";
import Slider from "../../../Components/slider/Slider";
import Navbar from "../../../Components/navbar/Navbar";
import { IconContext } from "react-icons";
import {
  FaCartArrowDown,
  FaHome,
  FaFileDownload,
  FaSearch,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./ClientDashboard.css";

class ClientPackages extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row no-gutters">
          <Slider />
          <div className="col-lg-10">
          
            <div className="container">
            <h2 className="mb-5 accout-settings">Welcome Back Aigbe!</h2>
              <div className="row my-5 pt-5 pb-4">
                <div className="col-md-4 col-lg-3 mb-3">               
                  <div className="card card-col">
                    <div className="card-body d-flex new-package">
                      <div>
                        <IconContext.Provider
                          value={{ className: "react-icons mr-3 mt-3" }}
                        >
                          <FaCartArrowDown />
                        </IconContext.Provider>
                      </div>
                      <div className="text-left">
                        <div className="card-subtext">New Package</div>
                        <div className="card-smalltext">
                          <b>Lorem ipsum dolor sit.</b>
                        </div>
                        <button className="btn px-4 mt-2">Create</button>
                      </div>
                    </div>
                    
                  </div>
                  <div className="card card-col">
                  <div className="card-body d-flex new-package">
                   
                    <div className="text-left">
                      <div className="card-subtext">Recent Packages</div>
                      <div className="card-smalltext">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                      </div>
                      <div>
                      <span>
                      <ul>
                        <li><p className="text-primary">0 <b>Package 1</b></p></li>
                        <li><b className="text-primary">0 Package 2</b></li>
                        <li><b className="text-primary">0 Package 3</b></li>
                        <li><b className="text-primary">0 Package 4</b></li>
                        <li><b className="text-primary">0 Package 5</b></li>
                        <li><b className="text-primary">0 Package 6</b></li>
                        <li><b className="text-primary">0 Package 7</b></li>
                      </ul>
                        
                        
                      </span>                      
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-col">
                  <div className="card-body d-flex new-package">
                   
                    <div className="text-left">
                      <div className="card-subtext">Notification</div>
                      <div className="table-footer text-center p-2">
                      <table class="table table-responsive mb-3 ">
                      <thead class="thead">
                        <tr>                      
                          <th scope="col">NAME</th>
                          <th scope="col">NAME</th>
                
                        </tr>
                      </thead>
                      </table>     
                    </div>
                      <div>
                                        
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-md-4 col-lg-8 mb-3">
                <div className="package-list bg-white p-3">
                <h2 className="mb-4 blue ">
                  Package History                 
                </h2>
                <table class="table table-responsive mb-3 ">
                  <thead class="thead">
                    <tr>                      
                      <th scope="col">NAME</th>
                      <th scope="col">DESCRIPTION</th>
                      <th scope="col">Size</th>
                      <th scope="col">Location</th>
                      <th scope="col">Status</th>
                      <th scope="col">Reciept</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>                     
                      <td>PCKG/034/125</td>
                      <td>
                        Lorem ipsum dolor sit amet....
                      </td>
                      <td>12457</td>
                      <td>Nairobi, Kenya</td>
                      <td>In Transit</td>
                      <td>GO-34/290</td>                     
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                    <td>PCKG/034/125</td>
                    <td>
                      Lorem ipsum dolor sit amet....
                    </td>
                    <td>12457</td>
                    <td>Nairobi, Kenya</td>
                    <td>In Transit</td>
                    <td>GO-34/290</td>      
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                    <td>PCKG/034/125</td>
                    <td>
                      Lorem ipsum dolor sit amet....
                    </td>
                    <td>12457</td>
                    <td>Nairobi, Kenya</td>
                    <td>In Transit</td>
                    <td>GO-34/290</td>      
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                    <td>PCKG/034/125</td>
                    <td>
                      Lorem ipsum dolor sit amet....
                    </td>
                    <td>12457</td>
                    <td>Nairobi, Kenya</td>
                    <td>In Transit</td>
                    <td>GO-34/290</td>      
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                    <td>PCKG/034/125</td>
                    <td>
                      Lorem ipsum dolor sit amet....
                    </td>
                    <td>12457</td>
                    <td>Nairobi, Kenya</td>
                    <td>In Transit</td>
                    <td>GO-34/290</td>      
                    </tr>
                  </tbody>
                </table>
                <div className="table-footer text-center p-2">
                  <span className="mr-3">&#8810;</span>
                  <span className="mr-3">&lt;</span>
                  <span>6 of 172 records</span>
                  <span className="ml-3">&gt;</span>
                  <span className="ml-3">&#8811;</span>
                </div>
                
              </div>      

                <div className="package-list bg-white p-3">
                <h2 className="mb-4 blue ">
                 Current Package Tracking                
                </h2>              
                <div>
                <div className="text-left">
                <br></br>
                <br></br>               
                <h3 className="movedow">PCKG/034/125</h3>
                <p> Lorem ipsum dolor sit amet....            
                </p>
               </div> 
               <div className="text-right">
               <p>size <b className="text-primary">12457</b></p>
               <p>Reciept <b className="text-primary">GO-34/290</b></p>
               </div>              

                </div>
                             </div>                
                             
                </div>    
                                           
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientPackages;
    