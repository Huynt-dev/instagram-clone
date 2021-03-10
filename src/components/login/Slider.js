import React, { useState } from "react";
import { Carousel, CarouselItem } from "reactstrap";
import { image2, image3 } from "../../assets/images/index.js";
import "./css/slider.css";
const items = [
  {
    id: 1,
    altText: "Slide 1",
    img: `${image2}`,
  },
  {
    id: 2,
    altText: "Slide 2",
    img: `${image3}`,
  },
  {
    id: 3,
    altText: "Slide 3",
    img:
      "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
  },
  {
    id: 4,
    altText: "Slide 3",
    img:
      "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
  },
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.img} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="slider">
      <style>
        {`.custom-tag {
              max-width: 240px;
              height: 427px;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
      </Carousel>
    </div>
  );
};

export default Slider;
