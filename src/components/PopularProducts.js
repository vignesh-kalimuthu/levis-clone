import React from "react";
import "./styles/PopularProducts.css";
import { FaHeart } from "react-icons/fa";
import { useHeart } from "../context/HeartContext";
import Product1 from "../assets/images/JEAN1.jpg";
import Product2 from "../assets/images/JEAN2.webp";
import Product3 from "../assets/images/JEAN3.webp";
import Product4 from "../assets/images/JEAN4.webp";

const productData = [
  {
    title: "HOODIES & SWEATSHIRTS",
    webImg: Product1,
    mobileImg: Product1,
    price: "$540",
  },
  {
    title: "JEANS",
    webImg: Product2,
    mobileImg: Product2,
    price: "$540",
  },
  {
    title: "BACKPACKS",
    webImg: Product3,
    mobileImg: Product3,
    price: "$540",
  },
  {
    title: "TRUCKERS & SHERPAS",
    webImg: Product4,
    mobileImg: Product4,
    price: "$540",
  },
  {
    title: "BACKPACKS",
    webImg: Product3,
    mobileImg: Product3,
    price: "$540",
  },
  {
    title: "TRUCKERS & SHERPAS",
    webImg: Product4,
    mobileImg: Product4,
    price: "$540",
  },
  {
    title: "JEANS",
    webImg: Product2,
    mobileImg: Product2,
    price: "$540",
  },
  {
    title: "BACKPACKS",
    webImg: Product3,
    mobileImg: Product3,
    price: "$540",
  },
  {
    title: "TRUCKERS & SHERPAS",
    webImg: Product4,
    mobileImg: Product4,
    price: "$540",
  },
  {
    title: "HOODIES & SWEATSHIRTS",
    webImg: Product1,
    mobileImg: Product1,
    price: "$540",
  },
  {
    title: "JEANS",
    webImg: Product2,
    mobileImg: Product2,
    price: "$540",
  },
  {
    title: "BACKPACKS",
    webImg: Product3,
    mobileImg: Product3,
    price: "$540",
  },
];

const PopularProducts = () => {
  const { heartedProducts, toggleHeart } = useHeart();

  const isHearted = (title) =>
    heartedProducts.some((product) => product.title === title);
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="mt-3 mb-3">
          <b>BEST SELLERS</b>
        </h3>
      </div>
      <div className="product-carousel1 ">
        {productData.map((item, index) => (
          <div
            key={index}
            className="product-card1 text-center position-relative"
            style={{ width: "180px" }}
          >
            <div
              className="position-absolute top-0 end-0 p-2"
              style={{ cursor: "pointer", zIndex: 10 }}
              onClick={() => toggleHeart(item)}
            >
              <FaHeart
                color={isHearted(item.title) ? "red" : "#ccc"}
                size={20}
              />
            </div>
            <picture>
              <source media="(max-width: 768px)" srcSet={item.mobileImg} />
              <img
                src={item.webImg}
                alt={item.title}
                className="img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
            </picture>
            <p
              style={{ fontSize: "0.8em" }}
              className="d-flex justify-content-start mt-2"
            >
              {item.title}
            </p>
            <p
              style={{ fontSize: "0.8em" }}
              className="d-flex justify-content-start mt-2"
            >
              <b>{item.price}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
