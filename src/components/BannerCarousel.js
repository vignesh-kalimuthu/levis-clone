import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/BannerCarousel.css";
import Banner1 from "../assets/images/banner1.webp";
import Banner2 from "../assets/images/Banner2.webp";
import Banner3 from "../assets/images/Banner3.webp";

const images = [Banner1, Banner2, Banner3];

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    pauseOnHover: false,

    appendDots: (dots) => (
      <div style={{ marginTop: "7px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4em",
            padding: 0,
            listStyle: "none",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => <div className="custom-dot" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`slide-${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
