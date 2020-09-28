import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "../../../Components/slider/Slider";
import Navbar from "../../../Components/navbar/Navbar";
import Button from "../../../Components/button/Button";

import ClientImg from "./assets/ClientImg.png";
import axios from "axios";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach((val) => val.length > 0 && (count = count + 1));
  return count;
};

class ClientSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        fullName: "",
        emailAddress: "",
        address: "",
        phoneNumber: "",
        password: "",
        confirm_password: "",
      },
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name  must be atleast 5 characters long!"
            : "";
        break;
      case "emailAddress":
        errors.emailAddress = validEmailRegex.test(value)
          ? ""
          : "Email is not valid";
        break;
      case "address":
        errors.address = value.length > 0 ? "" : "Address cannot be empty";
        break;
      case "phoneNumber":
        errors.phoneNumber =
          value.length > 10 || value.length == 11 ? "" : "Invalid Phone Number";
        break;
      case "password":
        errors.password =
          value.length >= 8 ? "" : "Password must be atleast 8 characters";
        break;
      case "confirm_password":
        errors.confirm_password =
          this.state.confirm_password !== this.state.password
            ? ""
            : "Password does not match";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
    const {
      fullName,
      emailAddress,
      address,
      phoneNumber,
      password,
      confirm_password,
    } = this.state;
    if (
      fullName &&
      emailAddress &&
      address &&
      phoneNumber &&
      password &&
      confirm_password
    ) {
      console.log(fullName,
        emailAddress,
        address,
        phoneNumber,
        password,
        confirm_password)
      try {
        const req = await axios.post({
          method: "POST",
          url: "https://goto2.herokuapp.com/api/register",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          data: {
            name: fullName,
            email: emailAddress,
            password: password,
            password_confirm: confirm_password,
          },
        });
        console.log(req);
      } catch (err) {
        console.log("err", err);
      }
    } else {
      this.setState({ formValid: false });
    }
  };

  render() {
    const { errors, formValid } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="row no-gutters">
          <div className="col-lg-4 d-none d-lg-block">
            <img src={ClientImg} alt="Client Image" className="img-fluid" />
          </div>
          <div className="col-lg-8">
            <div className="mx-md-5 mx-sm-3 px-md-5">
              <div className="rw py-5">
                <p>Sign Up As A Client</p>
                <h2 className="mb-5 text-primary">
                  We guarantee a first-class experience with safe, fast and
                  risk-free delivery
                </h2>
                <form
                  className="form-row"
                  onSubmit={this.handleSubmit}
                  noValidate
                >
                  <div class="form-group col-12">
                    <label htmlFor="yourname">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      onChange={this.handleChange}
                      id="yourname"
                      placeholder="John Doe"
                      noValidate
                      autoComplete
                    />
                    {errors.fullName.length > 0 && (
                      <span className="error" style={{ color: "red" }}>
                        {errors.fullName}
                      </span>
                    )}
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="youremailaddress">Email Address</label>
                    <input
                      type="email"
                      name="emailAddress"
                      className="form-control"
                      id="youremailaddress"
                      onChange={this.handleChange}
                      placeholder="example@address.com"
                      noValidate
                      autoComplete
                    />
                    {errors.emailAddress.length > 0 && (
                      <span className="error" style={{ color: "red" }}>
                        {errors.emailAddress}
                      </span>
                    )}
                  </div>
                  <div class="form-group col-md-6 ">
                    <label htmlFor="youraddress">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      onChange={this.handleChange}
                      id="youraddress"
                      placeholder="New Haven Enugu, Nigeria"
                      noValidate
                      autoComplete
                    />
                    {errors.address.length > 0 && (
                      <span className="error" style={{ color: "red" }}>
                        {errors.address}
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="yourphonenumber">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="form-control"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      onChange={this.handleChange}
                      id="yourphonenumber"
                      placeholder="0816879414"
                      noValidate
                      autoComplete
                    />
                    {errors.phoneNumber.length > 0 && (
                      <span className="error" style={{ color: "red" }}>
                        {errors.phoneNumber}
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      onChange={this.handleChange}
                      noValidate
                    />
                    {errors.password.length > 0 && (
                      <span className="error" style={{ color: "red" }}>
                        {errors.password}
                      </span>
                    )}
                    <small className="float-right text-primary">Change</small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirm_password"
                      className="form-control"
                      id="confirmpassword"
                      onChange={this.handleChange}
                      noValidate
                    />
                    {errors.confirm_password.length > 0 && (
                      <span className="error" style={{ color: "red" }}>
                        {errors.confirm_password}
                      </span>
                    )}
                    <small class="float-right text-primary">Change</small>
                  </div>
                  <div className=" my-5">
                    <h6>
                      Already A User, <Link>Sign In</Link>
                    </h6>
                    <p>By signing up, You acknowlegde that you have read and accepted our <Link>Terms, Condition and Privacy Policy</Link></p>
                  </div>
                  <div className="text-center">
                    {this.state.errorCount !== null && !formValid ? (
                      <p className="form-status " style={{ color: "red" }}>
                        All fields must be filled correctly
                      </p>
                    ) : (
                      " "
                    )}
                  </div>

                  <Button
                    type="success"
                    text="Sign In"
                    customClass="btn-block"
                  />
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
