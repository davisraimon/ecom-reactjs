import React, { Component } from "react";
import MainBanner from "../../components/main-banner/MainBanner";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let currentCategory = localStorage.getItem("currentCategory");
    return (
      <div>
        {currentCategory && currentCategory != "" ? currentCategory : null}
        <MainBanner></MainBanner>
      </div>
    );
  }
}
