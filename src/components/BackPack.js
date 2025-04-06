import React from "react";

import "./styles/BackPack.css";
import { Button } from "react-bootstrap";
import Product1 from "../assets/images/bag1.webp";
import Product2 from "../assets/images/bag2.webp";
import Product3 from "../assets/images/bag3.webp";

const productData = [
  {
    webImg: Product1,
    mobileImg: Product1,
  },
  {
    webImg: Product2,
    mobileImg: Product2,
  },
  {
    webImg: Product3,
    mobileImg: Product3,
  },
  {
    webImg: Product2,
    mobileImg: Product2,
  },
  {
    webImg: Product3,
    mobileImg: Product3,
  },
  {
    webImg: Product2,
    mobileImg: Product2,
  },
  {
    webImg: Product2,
    mobileImg: Product2,
  },
  {
    webImg: Product3,
    mobileImg: Product3,
  },
  {
    webImg: Product2,
    mobileImg: Product2,
  },
  {
    webImg: Product1,
    mobileImg: Product1,
  },
  {
    webImg: Product2,
    mobileImg: Product2,
  },
  {
    webImg: Product3,
    mobileImg: Product3,
  },
];

const PopularProducts = () => {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="mt-3 mb-4">
          <b>BACKPACKS</b>
        </h3>
        <Button
          variant="outline-dark"
          style={{ borderRadius: "0px" }}
          className="me-2 mb-4"
        >
          SHOP NOW
        </Button>
      </div>
      <div className="product-carousel d-flex">
        {productData.slice(0, 15).map((item, index) => (
          <div key={index} className="product-card text-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={item.mobileImg} />
              <img src={item.webImg} alt={item.title} className="img-fluid" />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
