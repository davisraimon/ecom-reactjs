import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputError: false,
      inputErrorPwd: false,
      mobile: "",
      password: "",
    };
  }
  onSubmit = () => {
    if (this.state.mobile == "" || this.state.password == "") {
      this.setState({
        inputError: this.state.mobile == "" ? true : false,
        inputErrorPwd:
          this.state.mobile != "" && this.state.password == "" ? true : false,
      });
    } else {
      localStorage.setItem("currentCategory", "");
      localStorage.setItem("token", "sampletoken");
      this.props.history.push("/shop/");
      this.setState({ inputError: false, inputErrorPwd: false });
      //   handle OTP process
    }
  };
  render() {
    return (
      <div className="login-view">
        <div className="login-banner">
          {/* <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/9/da75002d-5bbd-4e5d-91cb-6cb4f481900c1625769349241-Banner_Hamburger_400.png"></img> */}
          <img src="/illustrations/shopping-graphic-background.jpg"></img>
        </div>
        <div className="login-container">
          <div className="welcome-text">
            Signin <span>or</span> Signup
          </div>
          <input
            type="tel"
            placeholder="Email or Mobile Number"
            className="custom-input"
            onChange={(e) => this.setState({ mobile: e.target.value })}
          />
          {this.state.inputError ? (
            <span style={{ fontSize: 12, color: "orange", float: "left" }}>
              please enter a valid mobile number (10 digits)
            </span>
          ) : null}
          <input
            style={{ marginTop: 8 }}
            type="password"
            placeholder="Password"
            className="custom-input"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          {this.state.inputErrorPwd ? (
            <span style={{ fontSize: 12, color: "orange", float: "left" }}>
              please enter the password
            </span>
          ) : null}
          <div className="agree-terms">
            By continuing, I agree to the <a>Terms of use</a> and{" "}
            <a>privacy policy</a>
          </div>
          <div className="submit-button" onClick={this.onSubmit}>
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
