import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },


  {
    path: "/cars",
    display: "Car Listing",
  },
  // {
  //   path: "/blogs",
  //   display: "Blog",
  // },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            At Car Delearship Service, we specialize in dealing with pre-owned cars, providing you with the best options whether you are looking to buy or sell a vehicle. Our mission is to make the process of buying or selling a car as smooth and hassle-free as possible.

            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Mumbai, Maharashtra</p>
              <p className="office__info">Phone: 123456789</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Instagram</h5>
              <a href="#" style={{ textDecoration:"none",}}>
               <button className="btn become__driver-btn mt-4" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"5px",backgroundColor:"cyan"}}>
                 <i className="ri-instagram-line"></i> Follow Us on Instagram
               </button>
              </a>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                <a href="https://www.instagram.com/mandgwebworks/" 
                   rel="noreferrer" 
                   target="_blank" 
                   style={{ color: "white", textDecoration: "underline", transition: "color 0.3s",}}
                   onMouseOver={(e) => e.currentTarget.style.color = 'cyan'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'white'}
                >
                  M&G WebWorks
                </a> . All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;