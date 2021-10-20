import React, { Component } from "react";
import ImageCard from "../cards/image-card/ImageCard";
import "./MainDetails.css";

export default class MainDetails extends Component {
  render() {
    return (
      <div className="main-details">
        <div className="card-row">
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/4aca8f35-dea3-4309-9dba-2f13a78a4a671633689177342-H-M.jpg"></ImageCard>
          </div>
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/ce6eb61d-94cf-4002-9fa6-752ccb1d3c731633689177425-Puma.jpg"></ImageCard>
          </div>
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/3d04d7f2-2145-4ad3-b532-783b81bf83091633689177397-Nike.jpg"></ImageCard>
          </div>
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/70f79d87-ded2-4b0d-aad6-fb6e6aef28a01633689177435-Skechers.jpg"></ImageCard>
          </div>
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/5c0e2107-4e14-4004-b283-621681879af41633689177307-Crocs.jpg"></ImageCard>
          </div>
        </div>
        <div className="card-row">
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/3d04d7f2-2145-4ad3-b532-783b81bf83091633689177397-Nike.jpg"></ImageCard>
          </div>
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/5c0e2107-4e14-4004-b283-621681879af41633689177307-Crocs.jpg"></ImageCard>
          </div>
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/4aca8f35-dea3-4309-9dba-2f13a78a4a671633689177342-H-M.jpg"></ImageCard>
          </div>
          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/ce6eb61d-94cf-4002-9fa6-752ccb1d3c731633689177425-Puma.jpg"></ImageCard>
          </div>

          <div>
            <ImageCard src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/8/70f79d87-ded2-4b0d-aad6-fb6e6aef28a01633689177435-Skechers.jpg"></ImageCard>
          </div>
        </div>
      </div>
    );
  }
}
