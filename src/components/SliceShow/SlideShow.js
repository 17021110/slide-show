import React, { useState } from "react";
import "./SlideShow.css";

const SlideShow = ({ colors }) => {
  const [index, setIndex] = useState(0);

  const goForward = () => {
    index >= colors.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const goBack = () => {
    index === 0 ? setIndex(colors.length - 1) : setIndex(index - 1);
  };

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))}
      </div>
      <button className="button-left" onClick={goBack}>
        back
      </button>
      <button className="button-right" onClick={goForward}>
        nexts
      </button>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
