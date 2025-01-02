import React from "react";
import logo from "../assets/logo.png";
import pakflag from "../assets/pakistan_Flag.gif";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navCont1 navCont position-sticky top-0 ">
      <div className=" container    d-flex py-3  text-align-center flex-wrap ">
        <div className=" d-flex col-4 col-md-5 col-lg-4">
          <div className="">
          <Link className="navbar-brand" to="/">
            <img src={logo} width={100} alt="" />
            </Link>
          </div>
          <div className="my-auto ms-4  d-none d-md-block ">
            <h5 className="m-0 fs-6">PRIME MINISTER'S OFFICE</h5>
            <hr className="my-1  border border-2 border-success" />
            <h6 className="islamicRepublic">ISLAMIC REPUBLIC OF PAKISTAN</h6>
          </div>
        </div>

        <div className="d-flex justify-content-center me-md-5 col-4 col-sm-2 col-md-2 col-lg-6">
          <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
             
              
              
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav fw-bold me-auto mb-2 mb-lg-0 ms-lg-4 ">
                  <li className="nav-item">
                    <Link
                      className="nav-link active rounded-pill "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link
                      className="nav-link active rounded-pill"
                      aria-current="page"
                      to="/PhotoGallery"
                    >
                      Photo Gallery
                    </Link>
                  </li>

                 
                  <li className="nav-item">
                    <Link
                      className="nav-link active rounded-pill"
                      aria-current="page"
                      to="/PM"
                    >
                      Prime Minister
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active rounded-pill"
                      aria-current="page"
                      to="/ContactUs"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div
          className="col-4 col-sm-3 col-md-4 col-lg-1 ms-auto"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <img src={pakflag} width={100} alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
