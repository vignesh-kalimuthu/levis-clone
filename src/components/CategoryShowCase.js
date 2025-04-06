import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Women from "../assets/images/LargeBanner.webp";
import Male from "../assets/images/male.webp";
import Accessories from "../assets/images/shopAccessories.webp";

const CategoryShowcase = () => {
  const categories = [
    {
      title: "Men",
      image: Male,
      link: "#",
    },
    {
      title: "Women",
      image: Women,
      link: "#",
    },
    {
      title: "Accessories",
      image: Accessories,
      link: "#",
    },
  ];

  return (
    <div className="container my-5" style={{ backgroundColor: "#FDF5EB" }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold text-uppercase mb-4">Need to see more?</h2>
      </div>

      <div className="row g-4">
        {categories.map((cat, index) => (
          <div key={index} className="col-12 col-md-4">
            <a href={cat.link} className="text-decoration-none text-dark">
              <div className="mb-2">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "400px" }}
                />
              </div>
              <p className="fw-bold mb-0">
                Shop <span className="fw-normal">/ {cat.title}</span>
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryShowcase;
