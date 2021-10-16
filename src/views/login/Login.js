import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputError: false,
      mobile: "",
    };
  }
  onSubmit = () => {
    if (this.state.mobile == "") {
      this.setState({ inputError: true });
    } else {
      localStorage.setItem("currentCategory", "");
      this.props.history.push("/shop/");
      this.setState({ inputError: false });
      //   handle OTP process
    }
  };
  render() {
    return (
      <div className="login-view">
        <div className="login-banner">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/9/da75002d-5bbd-4e5d-91cb-6cb4f481900c1625769349241-Banner_Hamburger_400.png"></img>
        </div>
        <div className="login-container">
          <div class="welcome-text">
            Signin <span>or</span> Signup
          </div>
          <input
            type="tel"
            placeholder="Mobile Number"
            class="custom-input"
            onChange={(e) => this.setState({ mobile: e.target.value })}
          />
          {this.state.inputError ? (
            <span style={{ fontSize: 12, color: "orange", float: "left" }}>
              please enter a valid mobile number (10 digits)
            </span>
          ) : null}
          <div class="agree-terms">
            By continuing, I agree to the <a>Terms of use</a> and{" "}
            <a>privacy policy</a>
          </div>
          <div class="submit-button" onClick={this.onSubmit}>
            Continue
          </div>
          <div class="get-help">
            Have trouble logging in? <a>Get help</a>
          </div>
        </div>
      </div>
    );
  }
}
