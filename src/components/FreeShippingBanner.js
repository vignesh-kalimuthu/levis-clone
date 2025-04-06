import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/FreeShippingBanner.css";

const FreeShippingBanner = () => {
  return (
    <>
      <div className="free-shipping-banner d-flex align-items-center justify-content-center">
        <Container>
          <Row className="text-center">
            <Col>
              <p className="date-text">14–31 AUG</p>
              <h6 className="subheading">AWESOME AUGUST</h6>
              <h2 className="fw-bold">FREE SHIPPING SITEWIDE</h2>
              <p>No min. spend required</p>
              <div className="mt-4">
                <Button
                  variant="outline-dark"
                  style={{ borderRadius: "0px" }}
                  className="me-2"
                >
                  SHOP MEN
                </Button>
                <Button
                  variant="outline-dark"
                  style={{ borderRadius: "0px" }}
                  className="me-2"
                >
                  SHOP WOMEN
                </Button>
                <Button variant="outline-dark" style={{ borderRadius: "0px" }}>
                  SHOP ALL
                </Button>
              </div>
              <p className="terms mt-3">
                *Valid on all items. Discount auto-applied at checkout.
                <br />
                <a href="#" className="terms-link">
                  Terms & Conditions
                </a>
                <span className="ms-1">apply.</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: "55px" }}></div>
    </>
  );
};

export default FreeShippingBanner;
