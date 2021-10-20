import React, { Component } from "react";
import "./AccountMenu.css";

export default class AccountMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="account-menu">
        {localStorage.getItem("token") &&
        localStorage.getItem("token") == "sampletoken" ? (
          <>
            <div
              style={{
                textAlign: "left",
                fontSize: 12,
                padding: 8,
                fontWeight: 100,
                margin: 8,
              }}
            >
              Current account
            </div>
            <div className="top-account-section">
              <div className="profile-avatar">
                <img src="https://i.pinimg.com/280x280_RS/b6/72/d9/b672d9d101c6c64d5635ca1f2cbda4a0.jpg"></img>
              </div>
              <div className="profile-name">
                <div>
                  Davis Raimon <i class="fa fa-solid fa-check"></i>
                </div>
                <div style={{ color: "gray", fontSize: 14, fontWeight: 400 }}>
                  Personal
                </div>
                <div style={{ color: "gray", fontSize: 14, fontWeight: 400 }}>
                  davisraimon@gmail.com
                </div>
              </div>
            </div>
            <div className="middle-account-section">
              <div
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  padding: 8,
                  fontWeight: 100,
                }}
              >
                Your Accounts
              </div>
              <div className="account-list-item">Add Account</div>
              <div className="account-list-item">Convert to business</div>
            </div>
          </>
        ) : null}
        <div className="bottom-account-section">
          <div
            style={{
              textAlign: "left",
              fontSize: 12,
              padding: 8,
              fontWeight: 100,
            }}
          >
            More Options
          </div>
          <div className="account-list-item">Settings</div>
          <div className="account-list-item">Tune your Home Feed</div>
          <div className="account-list-item" style={{ display: "flex" }}>
            <div>Install Windows App</div>
            <div style={{ fontSize: 15 }}></div>
          </div>
          <div className="account-list-item">Help</div>
          <div className="account-list-item">Terms and privacy</div>
          <div className="account-list-item">
            {localStorage.getItem("token") &&
            localStorage.getItem("token") == "sampletoken" ? (
              <div
                onClick={() => {
                  localStorage.removeItem("token");
                  this.props.closeAccountMenu();
                  this.props.history.push("/");
                }}
                style={{ borderRadius: 5 }}
              >
                Sign Out
              </div>
            ) : (
              <div style={{ borderRadius: 5 }}>Sign In</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
