import React from "react";
import LargeBanner from "../assets/images/LargeBanner.webp";
import LargeBanner1 from "../assets/images/LargeBanner1.webp";
const LargePromoBanner = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center mb-4">
        <div className="col-md-6 order-md-1 text-center text-md-start px-4">
          <img src={LargeBanner} alt="Male model" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-0 px-4">
          <p className="text-danger fw-bold">LEVI'S® REDTAB™</p>
          <h3 className="fw-bold">
            LIVE NOW: <br /> PLANT-BASED 501® ORIGINAL JEANS
          </h3>
          <p className="text-muted">
            Our plant-based 501® Originals are made from 97% bio-based
            content...
          </p>
          <div className="d-flex gap-3">
            <button style={{ borderRadius: "0px" }} className="btn btn-dark">
              SHOP NOW
            </button>
            <button
              style={{ borderRadius: "0px" }}
              className="btn btn-outline-dark"
            >
              STORE LOCATOR
            </button>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 px-4">
          <img src={LargeBanner1} alt="Outdoor models" className="img-fluid" />
        </div>
        <div className="col-md-6 px-4">
          <p className="text-primary fw-bold">LEVI'S® Performance</p>
          <h3 className="fw-bold">+LEVI’S® COOL</h3>
          <p className="text-muted">
            Advanced fabrics. Innovative technology. Designed to keep you cool
            on hot days.
          </p>
          <button style={{ borderRadius: "0px" }} className="btn btn-dark">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default LargePromoBanner;
