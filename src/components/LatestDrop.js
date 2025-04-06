import React from "react";
import "./styles/LatestDrop.css";
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
];

const LatestDrop = () => {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="mt-3 mb-3">
          <b>LATEST DROPS</b>
        </h3>
        <button
          style={{ borderRadius: "0px" }}
          className="mt-4 mb-4 btn btn-dark"
        >
          SHOP ALL
        </button>
      </div>
      <div className="product-carousel d-flex">
        {productData.slice(0, 10).map((item, index) => (
          <div key={index} className="product-card text-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={item.mobileImg} />
              <img src={item.webImg} alt={item.title} className="img-fluid" />
            </picture>
            <p
              style={{ fontSize: "0.8em" }}
              className="d-flex justify-content-start mt-2"
            >
              <b>{item.title}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestDrop;
