import React from "react";
import "./Slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  const baseUrl = "https://react-responsive-carousel.js.org/assets/";
  const datas = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      title: "Titre du slider 1",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti ab quibusdam!`,
    },
    {
      id: 2,
      image: `${baseUrl}2.jpeg`,
      title: "Titre du slider 2",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti ab quibusdam!`,
    },
    {
      id: 3,
      image: `${baseUrl}3.jpeg`,
      title: "Titre du slider 3",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti ab quibusdam!`,
    },
  ];
  return (
    <Carousel
      autoPlay
      interval={6000}
      infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showStatus={false}
    >
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.title} />
          <div className="overlay">
            <h2 className="overlay__title">{slide.title}</h2>
            <p className="overlay__text">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
