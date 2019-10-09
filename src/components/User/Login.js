import React, { Component } from "react";
import CustomNav from "../Navbar/CustomNav";

class Login extends Component {
  render() {
    return (
      <div>
        <CustomNav />
        <div className="cover_login">
          <h2>Sign in to Coinbase</h2>
          <div className="signin">
            <div className="signin_form">
              <form>
                <div className="form-group new_email">
                  <input
                    type="email"
                    className="login_email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="form-group new_email">
                  <input
                    type="password"
                    className="login_email"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="form-group login_button">
                  <input type="checkbox"  />
                  <p>Keep me signed in on this computer</p>
                  <button>SIGN IN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
