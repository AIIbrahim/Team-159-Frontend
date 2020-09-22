import React, { Component } from "react";
import Slider from "../../../Components/slider/Slider";
import Navbar from "../../../Components/navbar/Navbar";
import Button from "../../../Components/button/Button";

import ClientImg from "./assets/ClientImg.png"

class ClientSignUp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row no-gutters">
          <div className="col-lg-4 d-none d-md-block">
            <img
              src={ClientImg}
              alt="Client Image"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-8">
            <div className="mx-md-5 px-md-5">
              <div className="rw py-5">
                <p >Sign Up As A Client</p>
                <h2 className="mb-5 text-primary">We guarantee a first-class experience with safe, fast and risk-free delivery</h2>
                <form  className="form-row">
                  <div class="form-group col-12">
                    <label for="yourname">Your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="yourname"
                      defaultValue="Aigbe"
                    />
                  </div>
                  <div class="form-group col-12">
                    <label for="youraddress">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="youraddress"
                      defaultValue="Nairobi, Kenya"
                    />
                  </div>
                  <div class="form-group col-md-6 ">
                    <label for="yourname">Your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="yourname"
                      defaultValue="Aigbe"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="yourname">Your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="yourname"
                      defaultValue="Aigbe"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      disabled
                      id="password"
                      defaultValue="Aigbe"
                    />
                    <small class="float-right text-primary">Change</small>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      disabled
                      id="password"
                      defaultValue="Aigbe"
                    />
                    <small class="float-right text-primary">Change</small>
                  </div>
                  <div class=" my-5">
                    <h6>Delete Your Account</h6>
                    <p>You will receive an email to confirm your decision.</p>
                  </div>
                  <Button type="success" text="Sign In" customClass="btn-block" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientSignUp;
