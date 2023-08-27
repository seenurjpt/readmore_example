import React from "react";
import "./Slide.css";
import Img1 from "./assets/1.jpg";
import Img2 from "./assets/2.png";
import Img3 from "./assets/3.jpg";
import Img4 from "./assets/4.jpg";

const SlideShow = () => {
  return (
    <div className="container">
      <h1>[ Slide Show ]</h1>

      {/* Main Div */}
      <div className="slide_show">
        {/* First Div  */}
        <div className="slides">
          <img src={Img1} />
          <img src={Img2} />
          <img src={Img3} />
          <img src={Img4} />
        </div>

        {/* Second Div  */}
        <div className="slides">
          <img src={Img1} />
          <img src={Img2} />
          <img src={Img3} />
          <img src={Img4} />
        </div>

      </div>
    </div>
  );
};

export default SlideShow;
