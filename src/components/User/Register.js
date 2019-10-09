import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CustomNav from "../Navbar/CustomNav";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div className="cover_register">
          <h1>Create your account</h1>
          <div className="login_form">
            <form>
              <div className="form_name">
                <div className="form-group">
                  <label htmlFor="fname">First name</label>
                  <input
                    type="text"
                    className="fname"
                    placeholder="First name"
                    name="fname"
                  />
                </div>
                <div className="form-group last_name">
                  <label htmlFor="lname">Last name</label>
                  <input
                    type="text"
                    className="lname"
                    placeholder="Last name"
                    name="lname"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  className="email"
                  placeholder="Choose a password"
                  name="password"
                />
              </div>
              <div className="form-group user_agreement">
                <input type="checkbox" />
                <p>
                  By continuing I certify that I am 18 years of age, and I agree{" "}
                  <br />
                  to the User Agreement and Privacy Policy.
                </p>
              </div>
              <button className="form_button">Create account</button>
            </form>
          </div>
          <div className="have_account">
            Already have a Coinbase account?<Link to="sign-in">Log in</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
