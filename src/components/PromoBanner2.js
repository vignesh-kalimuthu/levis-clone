import React from "react";
import "./styles/PromoBanner2.css";
import LevisRedTab from "../assets/images/LevisREDTAB.png";

const PromoBanner = () => {
  return (
    <div>
      <div className="bg-light text-center py-5">
        <img
          src={LevisRedTab}
          alt="Levi's RedTab Logo"
          className="mb-3"
          style={{ maxWidth: "220px" }}
        />
        <p className="mx-auto" style={{ maxWidth: "700px" }}>
          Membership is free and open to all. Your Levi’s® Red Tab™ member
          program rewards you with exclusive access to products, VIP events and
          offers, all when you shop on{" "}
          <a href="https://www.levis.com.sg">Levi.com.sg</a> and in-store.
        </p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <span className="underline-link">SIGN UP</span>
          <span className="underline-link">MEMBER EXCLUSIVES</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4">
        <div
          className=" text-white text-center py-5"
          style={{ backgroundColor: "#032281" }}
        >
          <p className="text-uppercase fw-bold mb-2">LEVI’S® SALE</p>
          <h2 className="fw-bold mb-3">30% OFF SALE STYLES</h2>
          <p className="mb-4">
            Get your next forever-favourite pieces at marked down prices.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <button
              style={{ borderRadius: "0px" }}
              className="btn btn-outline-light"
            >
              SHOP MEN
            </button>
            <button
              style={{ borderRadius: "0px" }}
              className="btn btn-outline-light"
            >
              SHOP WOMEN
            </button>
            <button
              style={{ borderRadius: "0px" }}
              className="btn btn-outline-light"
            >
              SHOP ALL
            </button>
          </div>
        </div>
        <div
          className="d-flex justify-content-start py-3"
          style={{ backgroundColor: "#032281" }}
        >
          <small className="d-flex justify-content-start text-white">
            Online only. All sales are final.{" "}
            <a href="#" className="text-white text-decoration-underline">
              Terms & Conditions
            </a>{" "}
            apply.
          </small>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
