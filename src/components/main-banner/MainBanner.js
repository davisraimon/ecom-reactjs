import React, { Component } from "react";
import "./MainBanner.css";

export default class MainBanner extends Component {
  render() {
    return (
      <div className="main-banner">
        <img
          src={this.props.src}
          style={{ height: this.props.height ? this.props.height : "" }}
        ></img>
      </div>
    );
  }
}
