import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Offcanvas,
  Badge,
} from "react-bootstrap";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import leviLogo from "../assets/images/levis-logo-new-colour.png";
import CartIcon from "../assets/images/cart-icon.jpg";
import Category1 from "../assets/images/JEAN1.jpg";
import Category2 from "../assets/images/JEAN2.webp";
import Category3 from "../assets/images/JEAN3.webp";
import Category4 from "../assets/images/JEAN4.webp";
import { useHeart } from "../context/HeartContext";

const TopNavbar = () => {
  const { heartCount } = useHeart();
  const [searchTerm, setSearchTerm] = useState("");

  const [showTopModal, setShowTopModal] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleMobileMenu = (label) => {
    setActiveTab(label.toUpperCase());
    setShowTopModal(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      console.log("Searching", searchTerm);
    }
  };

  return (
    <>
      <div
        className="d-none d-lg-flex justify-content-between align-items-center px-4 py-2 border-bottom small position-fixed top-0 start-0 w-100"
        style={{ height: "40px", backgroundColor: "white", zIndex: 1040 }}
      >
        <div className="d-flex gap-3">
          <a href="#" className="text-dark text-decoration-none">
            Find A Store
          </a>
          <a href="#" className="text-dark text-decoration-none">
            Track Order
          </a>
        </div>
        <div className="d-flex gap-3">
          <a href="#" className="text-dark text-decoration-none">
            Red Tab™ Program
          </a>
          <a href="#" className="text-dark text-decoration-none">
            Log In/Sign Up
          </a>
          <a href="#" className="text-dark text-decoration-none">
            Singapore
          </a>
        </div>
      </div>

      <div className="d-none d-lg-block" style={{ height: "40px" }}></div>

      {/* Desktop  Navbar */}
      <Navbar
        expand="lg"
        bg="white"
        className="shadow-sm px-2 py-2 d-none d-lg-flex"
        fixed="top"
        style={{ top: "40px", zIndex: 1030 }}
      >
        <Container fluid className="px-4">
          <Navbar.Brand href="#" className="me-4">
            <img
              src={leviLogo}
              className="d-inline-block align-top"
              alt="Levi's"
              height="30"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <div className="d-flex justify-content-between  align-items-center w-100 gap-3 flex-wrap">
              {/* Nav Links */}
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <Nav className="d-flex align-items-center gap-3">
                  <Nav.Link
                    href="#"
                    className="fw-bold text-dark"
                    onClick={() => {
                      setActiveTab("MEN");
                      setShowTopModal(true);
                    }}
                  >
                    MEN
                  </Nav.Link>

                  <Nav.Link
                    href="#"
                    className="text-dark"
                    onClick={() => {
                      setActiveTab("WOMEN");
                      setShowTopModal(true);
                    }}
                  >
                    WOMEN
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="text-dark"
                    onClick={() => {
                      setActiveTab("KIDS");
                      setShowTopModal(true);
                    }}
                  >
                    KIDS
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="text-dark"
                    onClick={() => {
                      setActiveTab("SALE");
                      setShowTopModal(true);
                    }}
                  >
                    SALE
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="text-danger fw-bold"
                    onClick={() => {
                      setActiveTab("501");
                      setShowTopModal(true);
                    }}
                  >
                    501® 150TH
                  </Nav.Link>
                </Nav>
              </div>

              <div className="d-flex align-items-center gap-3 flex-wrap">
                {/* Search Bar */}
                <Form
                  className="d-flex position-relative me-3"
                  onSubmit={handleSearch}
                >
                  <FaSearch className="position-absolute mt-2 ms-2 text-muted" />
                  <FormControl
                    type="search"
                    placeholder="What are you looking for?"
                    className="ps-4 custom-search"
                    style={{
                      border: "none",
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      boxShadow: "none",
                      minWidth: "250px",
                    }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form>

                {/* Icons */}
                <Nav className="d-flex align-items-center gap-2">
                  <Nav.Link href="#" className="position-relative">
                    <FaHeart className="text-dark" />
                    {heartCount > 0 && (
                      <span
                        className="position-absolute start-100 translate-middle badge bg-danger rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "20px",
                          height: "20px",
                          fontSize: "0.75rem",
                          top: "40%",
                          right: "20%",
                        }}
                      >
                        {heartCount}
                      </span>
                    )}
                  </Nav.Link>

                  <Nav.Link href="#" className="position-relative">
                    <img
                      src={CartIcon}
                      alt="Cart"
                      height="20"
                      className="text-dark"
                    />
                    <span
                      className="position-absolute  start-100 translate-middle badge bg-danger rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        fontSize: "0.75rem",
                        top: "40%",
                        right: "20%",
                      }}
                    >
                      0
                    </span>
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile  Navbar */}
      <Navbar
        expand="lg"
        bg="white"
        className="shadow-sm px-2 py-2 d-flex d-lg-none"
      >
        <Container fluid className="px-3">
          <Navbar.Toggle
            aria-controls="mobile-offcanvas"
            onClick={() => setShowTopModal(true)}
            className="border-0 p-0"
          >
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>

          <Navbar.Brand href="#" className="mx-auto">
            <img src={leviLogo} alt="Levi's" height="30" />
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-3 ms-auto">
            <FaSearch className="text-dark fs-5" />
            <div className="position-relative">
              <FaHeart className="text-dark fs-5" />
              <Badge
                pill
                bg="danger"
                className="position-absolute top-0 start-100 translate-middle"
              >
                {heartCount}
              </Badge>
            </div>
            <div className="position-relative">
              <FaShoppingCart className="text-dark fs-5" />
              <Badge
                pill
                bg="danger"
                className="position-absolute top-0 start-100 translate-middle"
              >
                0
              </Badge>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Category Menu - Mobile only */}
      <div
        className="d-flex justify-content-center overflow-auto px-3 py-2 gap-3 border-bottom bg-white d-lg-none"
        style={{
          whiteSpace: "nowrap",
          marginTop: "52px",
        }}
      >
        {[
          { label: "Women", img: Category1 },
          { label: "Men", img: Category2 },
          { label: "Kids", img: Category3 },
          { label: "Sale", img: Category4 },
        ].map((item) => (
          <div
            className="text-center"
            key={item.label}
            style={{ minWidth: "80px" }}
            onClick={() => handleMobileMenu(item.label)}
          >
            <img
              src={item.img}
              className="rounded-circle"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
              alt={item.label}
            />
            <div className="small mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <Offcanvas
        show={showTopModal}
        onHide={() => setShowTopModal(false)}
        placement="top"
        style={{
          height: "auto",
          maxHeight: "85vh",
          zIndex: 1050,
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">
            <Nav className="d-flex align-items-center gap-3">
              {["MEN", "WOMEN", "KIDS", "SALE", "501"].map((label) => (
                <Nav.Link
                  key={label}
                  className={`fw-bold ${
                    label === "501" ? "text-danger" : "text-dark"
                  }`}
                  onClick={() => {
                    setActiveTab(label);
                    setShowTopModal(true);
                  }}
                >
                  {label === "501" ? "501® 150TH" : label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {(activeTab === "MEN" || activeTab === "WOMEN") && (
            <div className="d-flex justify-content-between gap-4 border-bottom border-top mb-2">
              <span role="button" style={{ color: "#134A7D" }}>
                {activeTab === "MEN"
                  ? "Men’s New Arrivals"
                  : "Women’s New Arrivals"}
              </span>
              <span role="button" style={{ color: "#134A7D" }}>
                {activeTab === "MEN"
                  ? "Men’s Bestsellers"
                  : "Women’s Bestsellers"}
              </span>
              <span role="button" style={{ color: "#134A7D" }}>
                Collections & Collabs
              </span>
            </div>
          )}

          {activeTab === "MEN" && (
            <div className="d-flex justify-content-between flex-wrap px-2">
              <div>
                <h6 className="fw-bold">MEN’S CLOTHES</h6>
                <ul className="list-unstyled small">
                  <li>Tees & Polos</li>
                  <li>Buy 2 and Save</li>
                  <li>Shirts</li>
                  <li>Jumpers and Hoodies</li>
                  <li>Shorts</li>
                  <li>Overalls</li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold">MEN’S JEANS BY STYLE</h6>
                <ul className="list-unstyled small">
                  <li>501</li>
                  <li>511 Slim</li>
                  <li>514 Straight</li>
                  <li>541 Athletic</li>
                  <li>505 Regular</li>
                  <li>550 Relaxed Taper</li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold">MEN’S JEANS BY FIT</h6>
                <ul className="list-unstyled small">
                  <li>Straight Jeans</li>
                  <li>Slim Jeans</li>
                  <li>Skinny Jeans</li>
                  <li>Tapered Jeans</li>
                  <li>Bootcut Jeans</li>
                  <li>Relaxed Jeans</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "WOMEN" && (
            <div className="d-flex justify-content-between flex-wrap px-2">
              <div>
                <h6 className="fw-bold">WOMEN’S CLOTHES</h6>
                <ul className="list-unstyled small">
                  <li>Jeans</li>
                  <li>Tees</li>
                  <li>Tops</li>
                  <li>Shirts</li>
                  <li>Sweats & Knits</li>
                  <li>Jumpsuits & Overalls</li>
                  <li>Jackets</li>
                  <li>Pants & Cargos</li>
                  <li>Dresses & Skirts</li>
                  <li>Shorts</li>
                  <li>Plus Size</li>
                  <li>Accessories</li>
                  <li>Shop All Women’s</li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold">WOMEN’S JEANS BY STYLE</h6>
                <ul className="list-unstyled small">
                  <li>501</li>
                  <li>710 Super Skinny</li>
                  <li>720 Hi Rise Super Skinny</li>
                  <li>725 Hi Rise Bootcut</li>
                  <li>311 Shaping Skinny</li>
                  <li>312 Shaping Slim</li>
                  <li>314 Shaping Straight</li>
                  <li>315 Shaping Bootcut</li>
                  <li>Ribcage</li>
                  <li>Wedgie</li>
                  <li>Mile High</li>
                  <li>Mom</li>
                  <li>Baggy Dad</li>
                  <li>Middy</li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold">WOMEN’S JEANS BY FIT</h6>
                <ul className="list-unstyled small">
                  <li>Super Skinny Jeans</li>
                  <li>Skinny Jeans</li>
                  <li>Slim Jeans</li>
                  <li>Taper Jeans</li>
                  <li>Straight Jeans</li>
                  <li>Loose Jeans</li>
                  <li>Bootcut Jeans</li>
                  <li>Flare Jeans</li>
                </ul>
                <div className="mt-3">
                  <div className="fw-bold small">
                    RED TAB PROGRAM <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <div className="fw-bold small mt-2">
                    WOMEN'S JEANS GUIDE{" "}
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <div className="fw-bold small mt-2">
                    BLOG: OFF THE CUFF{" "}
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "KIDS" && (
            <div className="d-flex justify-content-between flex-wrap px-2">
              <div>
                <h6 className="fw-bold">KID’S CLOTHES</h6>
                <ul className="list-unstyled small">
                  <li>Kid's Jean Guide</li>
                  <li>Boys</li>
                  <li>Girls</li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "501" && (
            <div className="d-flex justify-content-between flex-wrap px-2">
              <div>
                <h6 className="fw-bold">501</h6>
                <ul className="list-unstyled small">
                  <li>Women</li>
                  <li>Men</li>
                  <li>Shop All 501</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "SALE" && (
            <div className="d-flex justify-content-between flex-wrap px-2">
              <div>
                <h6 className="fw-bold">SALE</h6>
                <ul className="list-unstyled small">
                  <li>Women Sale</li>
                  <li>Men Sale</li>
                  <li>Shop All</li>
                </ul>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TopNavbar;
