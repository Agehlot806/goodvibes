import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./mainslider.css";
const SliderComponent = ({
  imageUrls,
  swipeable,
  draggable,
  showDots,
  responsive,
  ssr,
  infinite,
  autoPlay,
  autoPlaySpeed,
  keyBoardControl,
  customTransition,
  transitionDuration,
  containerClass,
  removeArrowOnDeviceType,
  dotListClass,
  itemClass,
  customMainSliderClass,
}) => {
  return (
    <div>
      {/* <Container fluid className="p-0"> */}
      <Carousel
        swipeable={swipeable}
        draggable={draggable}
        showDots={showDots}
        responsive={responsive}
        ssr={ssr} // means to render carousel on server-side.
        infinite={infinite}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        keyBoardControl={keyBoardControl}
        customTransition={customTransition}
        transitionDuration={transitionDuration}
        containerClass={containerClass}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        dotListClass={dotListClass}
        itemClass={itemClass}
      >
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className={customMainSliderClass || "mainslider"}>
            <img src={imageUrl} alt={`Item ${index + 1}`} />
            {!customMainSliderClass && (
              <div className="main-slider-des">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly
                </p>
              </div>
            )}
          </div>
        ))}
      </Carousel>
      {/* </Container> */}
    </div>
  );
};

export default SliderComponent;
