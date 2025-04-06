import React from "react";

const SpecialOfferBanner = () => {
  return (
    <div className="bg-danger text-white text-center py-5">
      <div className="container">
        <p
          className="text-uppercase mb-2"
          style={{
            letterSpacing: "1px",
            fontWeight: "bold",
            fontSize: "0.8rem",
          }}
        >
          Special Offers
        </p>
        <h2 className="mb-3" style={{ fontWeight: "bold" }}>
          40% OFF SELECTED STYLES
        </h2>
        <p className="mb-4">Treat yourself to some of our favourite styles.</p>
        <div className="d-flex justify-content-center flex-wrap gap-2">
          <button
            style={{ borderRadius: "0px" }}
            className="btn btn-light text-dark px-4"
          >
            SHOP MEN
          </button>
          <button
            style={{ borderRadius: "0px" }}
            className="btn btn-light text-dark px-4"
          >
            SHOP WOMEN
          </button>
          <button
            style={{ borderRadius: "0px" }}
            className="btn btn-light text-dark px-4"
          >
            SHOP KIDS
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
