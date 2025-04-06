import React from "react";
import "./styles/ProductCarousel.css";
import Product1 from "../assets/images/JEAN1.jpg";
import Product2 from "../assets/images/JEAN2.webp";
import Product3 from "../assets/images/JEAN3.webp";
import Product4 from "../assets/images/JEAN4.webp";

const productData = [
  {
    title: "HOODIES & SWEATSHIRTS",
    webImg: Product1,
    mobileImg: Product1,
  },
  {
    title: "JEANS",
    webImg: Product2,
    mobileImg: Product2,
  },
  {
    title: "BACKPACKS",
    webImg: Product3,
    mobileImg: Product3,
  },
  {
    title: "TRUCKERS & SHERPAS",
    webImg: Product4,
    mobileImg: Product4,
  },
  {
    title: "BACKPACKS",
    webImg: Product3,
    mobileImg: Product3,
  },
  {
    title: "TRUCKERS & SHERPAS",
    webImg: Product4,
    mobileImg: Product4,
  },
];

const ProductCarousel = () => {
  return (
    <div className="container my-4">
      <div className="d-flex  overflow-auto product-carousel">
        {productData.slice(0, 6).map((item, index) => (
          <div key={index} className="product-card text-center ">
            <picture>
              <source media="(max-width: 768px)" srcSet={item.mobileImg} />
              <img src={item.webImg} alt={item.title} className="img-fluid" />
            </picture>
            <p className="d-flex justify-content-start mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
