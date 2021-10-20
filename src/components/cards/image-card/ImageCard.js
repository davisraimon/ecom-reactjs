import React, { Component } from "react";
import "./ImageCard.css";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="image-card">
        <img style={{ height: 230 }} src={this.props.src}></img>
      </div>
    );
  }
}
