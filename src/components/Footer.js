import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product1 from "../assets/images/JEAN1.jpg";
import Product2 from "../assets/images/JEAN4.webp";
import Product3 from "../assets/images/JEAN2.webp";
import Visa from "../assets/images/VISA.png";
import Mastercard from "../assets/images/Master.png";
import AmericanExpress from "../assets/images/AmericanExpress.png";
import GrabPay from "../assets/images/GrapPay.png";
import "./styles/Footer.css";

const Footer = () => {
  const images = [Product1, Product2, Product3, Product1];

  return (
    <div className=" container-fluid liveinlevis-wrapper bg-light text-dark">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center py-4">
            <h3 className="fw-bold">#LIVEINLEVIS</h3>
            <p>Tag @levis_sea on Instagram for a chance to be featured.</p>
          </div>

          <div className="container mb-5">
            <div className="row justify-content-center">
              {images.map((src, index) => (
                <div className="col-6 col-md-3 mb-4" key={index}>
                  <img
                    src={src}
                    alt={`Levis ${index}`}
                    className="img-fluid rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="container text-center  mt-4 px-4">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12 text-md-start mb-3 mb-md-0">
                <h5 className="fw-bold">
                  GET THE ORIGINAL STYLE INSPIRATION AND MORE BENEFITS!
                </h5>
                <button
                  style={{ borderRadius: "0px" }}
                  className="btn btn-dark w-100 mt-3"
                >
                  Sign up now
                </button>
                <p className="small mt-2">
                  By clicking the button above, you are willing to become a
                  Levi’s® Red Tab™ member and have agreed to the{" "}
                  <a href="#" className="text-decoration-underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-decoration-underline">
                    Terms and Conditions
                  </a>
                  .
                </p>
                {/* Payment Icons */}
                <div className="d-flex gap-2 flex-wrap mt-2">
                  {[Visa, Mastercard, GrabPay, AmericanExpress].map(
                    (method, idx) => (
                      <img key={idx} src={method} height="25" />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-top py-4">
        <div className="container">
          <div className="row text-center text-md-start small">
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">Support</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Find A Store</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Levi’s Red Tab™ Program</a>
                </li>
                <li>
                  <a href="#">Find a store</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
            {/* Copyright */}
            <div className="col-md-3 d-flex flex-column align-items-center align-items-md-end">
              <p>&copy; 2023 Levi Strauss & Co</p>
              <div className="d-flex gap-3">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
