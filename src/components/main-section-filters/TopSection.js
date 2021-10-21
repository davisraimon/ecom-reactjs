import React, { Component } from "react";
import { TopSectionImagesMapping } from "../../config-data/MainData";
import ImageRound from "../cards/image-card/ImageRound";
import "./TopSection.css";

export default class TopSection extends Component {
  render() {
    return (
      <div className="top-section">
        {TopSectionImagesMapping.map((item) => (
          <ImageRound src={item.src} caption={item.caption}></ImageRound>
        ))}
      </div>
    );
  }
}
