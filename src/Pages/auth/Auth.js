import React from 'react';
import { Link } from 'react-dom';
import package from './assets/package.png';



class Auth  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName: '',
             emailAddress: '',
             address: '',
             phoneNumber: '',
             password: '',
             confirm_password: ''
        }
    }
    
    fullNameHandler = (e) => {
        this.setState({fullName: e.target.value})
    }

   emailAddressHandler = (e) => {
       this.setState({emailAddress: e.target.value})
   }

   addressHandler = (e) => {
       this.setState({address: e.target.value})
   }
    
   phoneNumberHandler = (e) => {
       this.setState({phoneNumber: e.target.value})
   }

   passwordHandler = (e) => {
       this.setState({password: e.target.value})
   }

   confirmPasswordHandler =(e) => {
       this.setState({confirm_password: e.target.value})
   }
    render() { 
        const {fullName, emailAddress, address, phoneNumber, password, confirm_password}  = this.state
        return ( 
            
     <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <Link class="navbar-brand" to="">
            <img
              className="logo"
              src="https://res.cloudinary.com/dtu2furcy/image/upload/v1598400012/SDG%202020/Group_142176_1_c1ajwn.svg"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content" id="navbarNav">
            <ul className="navbar-nav ml-auto header_navbar">
              <li className="nav-item">
                <Link className="nav-link px-3" to="">
                   Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="">
                 Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="">
                  Log in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="">
                 Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row">
           <div className="col-md-4">
               <img src={package} />
           </div>

          <div className="col-md-8">
              <div>
                  <p>Sign Up As A Client</p>
                  <p>We guarantee a first-class experience with safe, fast and risk-free delivery</p>
                     <form className="form-control" onSubmit={this.handleSubmit}>
                     <div>
                        <label>Full Name</label>
                        <input type="text" value={fullName} onChange={this.fullNameHandler} />
                     </div>
                     <div>
                        <label>Email Address</label>
                        <input type="email" value={emailAddress} onChange={this.emailAddressHandler} />
                     </div>
                     <div className="row">
                        <div>
                            <label>Address</label>
                            <input type="text" value={address} onChange={this.addressHandler} />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="telephone" value={phoneNumber} onChange={this.phoneNumberHandler}/>
                        </div>
                     </div>
                     <div className="row">
                        <div>
                            <label>Password</label>
                            <input type="password" value={password} value={this.passwordHandler}/>
                        </div>
                        <div>
                            <label>Confirm Passwordr</label>
                            <input type="password" value={confirm_password} value={this.confirmPasswordHandler} />
                        </div>
                       <div>
                           <input type="checkbox"/> <span>I agree to The Terms, Policy and Coditions</span>
                       </div>
                       <input type="submit" value="Sign Up" />
                     </div>

                     <label>Already have an account? Sign In</label>
              </form>
              </div>
          </div>
        </div>
      </div>
           
          );
    }
}
 
export default Auth;
