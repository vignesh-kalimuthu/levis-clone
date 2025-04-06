import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/TrendingProducts.css";
import ProductCarousel from "./ProductCarousel";

const TrendingProducts = () => {
  return (
    <>
      <Container>
        <Row className="text-center">
          <Col>
            <div className="typing-container">
              <h2 className="typing-word">TRENDING COLLECTIONS</h2>
            </div>

            <div className="mt-4 mb-4">
              <Button
                variant="outline-dark"
                style={{ borderRadius: "0px" }}
                className="me-2"
              >
                HOODIES AND SWEATSHIRTS
              </Button>
              <Button
                variant="outline-dark"
                style={{ borderRadius: "0px" }}
                className="me-2"
              >
                JEANS
              </Button>
              <Button
                variant="outline-dark"
                className="me-2"
                style={{ borderRadius: "0px" }}
              >
                BACKPACKS
              </Button>
              <Button variant="outline-dark" style={{ borderRadius: "0px" }}>
                TRUCKERS AND SHERPAS
              </Button>
            </div>
          </Col>
        </Row>
        <ProductCarousel />
      </Container>
    </>
  );
};

export default TrendingProducts;
