import React, { Component } from "react";
import "./ImageRound.css";

export default class ImageRound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="image-round-container">
        <img className="image-round" src={this.props.src}></img>
        <span className="image-caption">{this.props.caption}</span>
      </div>
    );
  }
}
