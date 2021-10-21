import React, { Component } from "react";
import MainBanner from "../../components/main-banner/MainBanner";
import MainDetails from "../../components/main-details/MainDetails";
import TopSection from "../../components/main-section-filters/TopSection";
import { BannerMappingData } from "../../config-data/MainData";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentCategory = localStorage.getItem("currentCategory");
    let banner_src =
      currentCategory && currentCategory != ""
        ? BannerMappingData[currentCategory]
        : BannerMappingData["home-shop"];
    let height = currentCategory != "" ? "308px" : "";
    let token = localStorage.getItem("token");
    if (token == "sampletoken") {
      return (
        <div style={{ padding: "16px 32px 32px 16px" }}>
          <TopSection></TopSection>
          <MainBanner src={banner_src} height={height}></MainBanner>
          <MainDetails></MainDetails>
        </div>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}
