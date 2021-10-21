import React, { Component } from "react";
import { TopSectionImagesMapping } from "../../config-data/MainData";
import ImageRound from "../cards/image-card/ImageRound";
import "./TopSection.css";

export default class TopSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="top-section">
        {TopSectionImagesMapping.map((item) => (
          <ImageRound
            src={item.src}
            caption={item.caption}
            link=""
          ></ImageRound>
        ))}
      </div>
    );
  }
}
