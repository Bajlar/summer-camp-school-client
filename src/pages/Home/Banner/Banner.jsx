import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/images/banner/banner-1.jpeg";
import img2 from "../../../assets/images/banner/banner-2.jpg";
import img3 from "../../../assets/images/banner/banner-3.jpg";
import img4 from "../../../assets/images/banner/banner-4.jpg";
import img5 from "../../../assets/images/banner/banner-5.jpg";
import img6 from "../../../assets/images/banner/banner-6.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel className="text-center">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;