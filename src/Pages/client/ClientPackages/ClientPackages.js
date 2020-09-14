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
import "./ClientPackages.css";
// import { Link } from "react-router-dom";

class ClientPackages extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row no-gutters">
          <Slider />
          <div className="col-lg-10">
            <div className="container">
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
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                  <div className="card card-col">
                    <div className="card-body d-flex current-package">
                      <div>
                        <IconContext.Provider
                          value={{ className: "react-icons mr-3 mt-3" }}
                        >
                          <FaCartArrowDown />
                        </IconContext.Provider>
                      </div>
                      <div className="text-center">
                        <div className="card-subtext">Current Packages</div>
                        <div className="card-number ">37</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                  <div className="card card-col">
                    <div className="card-body d-flex delivered-packages">
                      <div>
                        <IconContext.Provider
                          value={{ className: "react-icons mr-3 mt-3" }}
                        >
                          <FaHome />
                        </IconContext.Provider>
                      </div>
                      <div className="text-center">
                        <div className="card-subtext">Delivered Packages</div>
                        <div className="card-number ">124</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                  <div className="card card-col">
                    <div className="card-body d-flex total-packages">
                      <div>
                        <IconContext.Provider
                          value={{ className: "react-icons mr-3 mt-3" }}
                        >
                          <FiSend />
                        </IconContext.Provider>
                      </div>
                      <div className="text-center">
                        <div className="card-subtext">Total Packages</div>
                        <div className="card-number ">3021</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="package-list bg-white p-3">
                <h2 className="mb-4 blue ">
                  Package History
                  <span className="float-md-right">
                    <div className="input-group">
                      <span className="input-group-prepend">
                        <div className="input-group-text bg-transparent">
                          <IconContext.Provider value={{}}>
                            <FaSearch />
                          </IconContext.Provider>
                        </div>
                      </span>
                      <input
                        type="search"
                        placeholder="Type to search "
                        className="bg-white package-input py-2 border-left-0 border rounded-0"
                      />
                    </div>
                  </span>
                </h2>
                <table class="table table-responsive mb-3 ">
                  <thead class="thead">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">NAME</th>
                      <th scope="col">DESCRIPTION</th>
                      <th scope="col">WEIGHT(KG)</th>
                      <th scope="col">DATE OF ORDER</th>
                      <th scope="col">PICKUP</th>
                      <th scope="col">DESTINATION</th>
                      <th scope="col">DISPATCHER</th>
                      <th scope="col">RECEIPT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Design specs</td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </td>
                      <td>16</td>
                      <td>2020-08-12 08:33:56 G.M.T</td>
                      <td>Lagos, Nigeria</td>
                      <td>Abuja, Nigeria</td>
                      <td>
                        <span className="table-dispatcher">Sendy</span>
                      </td>
                      <td>
                        {" "}
                        <IconContext.Provider value={{ className: "receipt" }}>
                          <FaFileDownload />
                        </IconContext.Provider>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Design specs</td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </td>
                      <td>16</td>
                      <td>2020-08-12 08:33:56 G.M.T</td>
                      <td>Lagos, Nigeria</td>
                      <td>Abuja, Nigeria</td>
                      <td>
                        <span className="table-dispatcher">Sendy</span>
                      </td>
                      <td>
                        {" "}
                        <IconContext.Provider value={{ className: "receipt" }}>
                          <FaFileDownload />
                        </IconContext.Provider>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Design specs</td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </td>
                      <td>16</td>
                      <td>2020-08-12 08:33:56 G.M.T</td>
                      <td>Lagos, Nigeria</td>
                      <td>Abuja, Nigeria</td>
                      <td>
                        <span className="table-dispatcher">Sendy</span>
                      </td>
                      <td>
                        {" "}
                        <IconContext.Provider value={{ className: "receipt" }}>
                          <FaFileDownload />
                        </IconContext.Provider>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Design specs</td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </td>
                      <td>16</td>
                      <td>2020-08-12 08:33:56 G.M.T</td>
                      <td>Lagos, Nigeria</td>
                      <td>Abuja, Nigeria</td>
                      <td>
                        <span className="table-dispatcher">Sendy</span>
                      </td>
                      <td>
                        {" "}
                        <IconContext.Provider value={{ className: "receipt" }}>
                          <FaFileDownload />
                        </IconContext.Provider>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Design specs</td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </td>
                      <td>16</td>
                      <td>2020-08-12 08:33:56 G.M.T</td>
                      <td>Lagos, Nigeria</td>
                      <td>Abuja, Nigeria</td>
                      <td>
                        <span className="table-dispatcher">Sendy</span>
                      </td>
                      <td>
                        {" "}
                        <IconContext.Provider value={{ className: "receipt" }}>
                          <FaFileDownload />
                        </IconContext.Provider>
                      </td>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientPackages;
