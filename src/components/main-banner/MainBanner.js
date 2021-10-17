import React, { Component } from "react";
import "./MainBanner.css";

export default class MainBanner extends Component {
  render() {
    return (
      <div className="main-banner">
        <img src={this.props.src}></img>
      </div>
    );
  }
}
