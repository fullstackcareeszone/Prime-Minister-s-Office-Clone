import React from "react";
import "../components/FooterStyle.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <div className="footerEnd   text-dark">
        <div className="container py-5 pb-2">
          <div className="row pt-5">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <ul
                className="list-unstyled "
                style={{ cursor: "pointer", color: "white" }}
              >
                <div
                  style={{ height: "100px", width: "100px" }}
                  className="  ps-3 ms-4 pt-1 d-flex justify-content-center bg-light rounded-circle
"
                >
                  <Link className="navbar-brand " to="/">
                    <img src={logo} width={100} alt="" />
                  </Link>
                </div>
                <li className="links-footer mt-3 me-4">
                  {" "}
                  Prime Minister of the Islamic Republic of Pakistan and
                  President of the Pakistan Muslim League (N)
                </li>
              </ul>
              <div className="social-icons mt-3">
                <span className="icon-container">
                  <FaFacebook />
                </span>
                <span className="icon-container ms-2">
                  <FaInstagram />
                </span>
                <span className="icon-container ms-2">
                  <FaTiktok />
                </span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="footer-heading" style={{ color: "white " }}>
                Foundational Principles
              </h5>
              <ul
                className="list-unstyled"
                style={{ cursor: "pointer", color: "white" }}
              >
                <li className="links-footer"> LIST OF SENIOR OFFICERS</li>
                <li className="links-footer">
                  {" "}
                  PERSONS WORKING IN HO- <br />
                  NORARY CAPACITY
                </li>
                <li className="links-footer"> TENDERS</li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="footer-heading" style={{ color: "white" }}>
                Pages
              </h5>
              <ul
                className="list-unstyled"
                style={{ cursor: "pointer", color: "white" }}
              >
                <li className="links-footer">
                  <FaHome className="me-2" />
                  Home
                </li>
                <li className="links-footer">
                  <i className="fa fa-book me-2"></i>About
                </li>
                <li className="links-footer">
                  <i className="fa fa-address-book me-2"></i>
                  Contact Us
                </li>
                <li className="links-footer">
                  <span className="me-2">
                    {" "}
                    <MdPrivacyTip />
                  </span>
                  Privacy Policy
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="footer-heading" style={{ color: "white" }}>
                Contact Us
              </h5>
              <ul className="list-unstyled" style={{ color: "white" }}>
                <li style={{cursor: "pointer"}} className="links-footer">
                  
                  <i  class="fa fa-envelope me-2"></i> info@pmo.gov.pk{" "}
                
                </li>
                <li className="links-footer">
                  <i class="fa fa-phone  me-3"></i>+92 519201637{" "}
                </li>
                <li className="links-footer">
                  <i class="fa fa-address-card me-2"></i>Prime Minister's
                  Secretariat, Constitution Ave, Red Zone, Islamabad, Islamabad
                  Capital Territory, Pakistan{" "}
                </li>
              </ul>
            </div>
          </div>

          <hr
            style={{
              color: "white",
              backgroundColor: "white",
              border: "1px solid white",
            }}
            className="footer-divider "
          />

          <div className="text-center d-flex justify-content-center mt-4">
            <p className="footer-note text-light ">
              <strong>Note:</strong>
              <strong> Copyrights</strong> &copy; All rights reserved to IT
              Department
            </p>
            <p style={{textDecoration: "none", cursor: "pointer", fontSize:"15px"}} className="footer-note text-light ms-auto ">
              career
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
