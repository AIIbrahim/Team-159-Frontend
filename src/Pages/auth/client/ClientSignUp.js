import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "../../../Components/slider/Slider";
import Navbar from "../../../Components/navbar/Navbar";
import Button from "../../../Components/button/Button";

import ClientImg from "./assets/ClientImg.png"

const validEmailRegex = RegExp( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 &&
     (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach((val) => val.length > 0 && 
    (count = count + 1 ) 
  );
  return count;
}


class ClientSignUp extends Component {
    constructor(props) {
      super(props)
    
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
          }

        };
    }
    
handleChange = e => {
  e.preventDefault();
  const {name, value} = e.target;
  let errors = this.state.errors;
  
  switch(name) {
    case 'fullName' :
      errors.fullName = value.length < 5
      ? 'Full Name  must be atleast 5 characters long!'
      : '';
      break;
      case 'emailAddress' :
        errors.emailAddress = validEmailRegex.test(value)
        ? ''
        : 'Email is not valid';
        break;
        case 'address' :
          errors.address = value.length > 0
          ? ''
          : 'Address cannot be empty';
          break;
          case 'phoneNumber' :
            errors.phoneNumber = value.length > 10 || value.length == 11
            ? ''
            : 'Invalid Phone Number';
            break;
            case 'password' :
              errors.password = value.length >= 8
              ? ''
              : 'Password must be atleast 8 characters';
              break;
              case 'confirm_password' :
              errors.confirm_password = this.state.confirm_password !== this.state.password
              ? ''
              : 'Password does not match';
              break;
              default:
                break;
  }
  this.setState({errors, [name]: value}, ()=> {
    console.log(errors)
  })
 
}

handleSubmit = e => {
  e.preventDefault();
  this.setState({formValid: validateForm(this.state.errors)})
  this.setState({errorCount: countErrors(this.state.errors)});
}
  render() {
    const {  errors, formValid }  = this.state
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
                <form  className="form-row" onSubmit={this.handleSubmit} noValidate>
                  <div class="form-group col-12">
                    <label htmlFor="yourname">Your Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      onChange={this.handleChange}
                      id="yourname"
                      defaultValue="Aigbe"
                      noValidate
                      autoComplete
                    />
                    {errors.fullName.length > 0 && 
                      <span className="error" style={{color: 'red'}}>{errors.fullName}</span>}
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="youraddress">Email Address</label>
                    <input
                      type="email"
                      name="emailAddress"
                      className="form-control"
                      id="youremailaddress"
                      onChange={this.handleChange}
                      defaultValue="Nairobi, Kenya"
                      noValidate
                      autoComplete
                    />
                     {errors.emailAddress.length > 0 && 
                      <span className="error" style={{color: 'red'}}>{errors.emailAddress}</span>}
                  </div>
                  <div class="form-group col-md-6 ">
                    <label htmlFor="yourname">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      onChange={this.handleChange}
                      id="youraddress"
                      defaultValue="New Haven Enugu, Nigeria"
                      noValidate
                      autoComplete
                    />
                    {errors.address.length > 0 && 
                      <span className="error" style={{color: 'red'}}>{errors.address}</span>}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="yourname">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="form-control"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      onChange={this.handleChange}
                      id="yourphonenumber"
                      defaultValue="0816879414"
                      noValidate
                      autoComplete
                    />
                    {errors.phoneNumber.length > 0 && 
                      <span className="error" style={{color: 'red'}}>{errors.phoneNumber}</span>}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      onChange={this.handleChange}
                      defaultValue="Aigbe"
                      noValidate
                    />
                    {errors.password.length > 0 && 
                      <span className="error">{errors.password}</span>}
                    <small className="float-right text-primary">Change</small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      type="password"
                      name="confirm_password"
                      className="form-control"
                      id="confirmpassword"
                      onChange={this.handleChange}
                      defaultValue="Aigbe"
                      noValidate
                    />
                    {errors.confirm_password.length > 0 && 
                      <span className="error">{errors.confirm_password}</span>}
                    <small class="float-right text-primary">Change</small>
                  </div>
                  <div className=" my-5">
                    <h6> <Link>Delete Your Account</Link></h6>
                    <p>You will receive an email to confirm your decision.</p>
                  </div>
                  <Button 
                  type="success" 
                  text="Sign In" 
                  customClass="btn-block"
                  />
                  {/* {this.state.errorCount !== null ? <p className="form-status"> Form is {formValid ? 'valid' : 'invalid'}</p> : 'Form not submitted'} */}
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
