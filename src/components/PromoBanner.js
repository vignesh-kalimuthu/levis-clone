import React from "react";
import Belt from "../assets/images/Belt.jpg";

const PromoBanner = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex align-items-center flex-column justify-content-center text-center text-md-start">
          <div className="text-center">
            <div className="d-inline-block">
              <h2 className="fw-bold text-danger m-0">
                GET A LEVI'S<sup>®</sup> MEN'S HERITAGE
              </h2>
              <h2 className="fw-bold text-danger text-center m-0">BELT</h2>
            </div>
          </div>

          <hr
            className="my-3 w-50 mx-md-0 mx-auto"
            style={{ borderTop: "3px solid #b5121b" }}
          />
          <h5 className="fw-bold">WITH A MIN. PURCHASE OF $220</h5>
          <p className="highlighted-text d-inline-block mt-2 mb-1">
            WHILE STOCKS LAST.
          </p>
          <p className="text-muted small">
            Auto-applied at checkout. Terms & Conditions apply.
          </p>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={Belt}
            alt="Levi's Men's Heritage Belt"
            style={{ width: "350px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
