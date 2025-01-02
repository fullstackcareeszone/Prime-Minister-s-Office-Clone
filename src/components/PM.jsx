import React from "react";
import imgPMO from "../assets/pmo.jpg";
import Navbar from "./Navbar";
import Footer from "./Footerbbottom";
import pmshah from "../assets/pmshahbaz.jpeg";

const PM = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="position-relative">
          <img
            src={imgPMO}
            className="img-fluid w-100"
            style={{
              objectFit: "cover",
              filter: "brightness(40%)",
              height: "auto",
              maxHeight: "500px",
            }}
            alt="Prime Minister's Office"
          />
          <h2
            className="position-absolute text-white fs-1 fs-md-4 text-center"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            PRIME MINISTER OF PAKISTAN
          </h2>
        </div>

        <div className="container text-center pt-5 mb-5">
          <img
            src={pmshah}
            className="img-fluid rounded mb-4"
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "400px",
            }}
            alt="Prime Minister"
          />
          <h1 className="fs-3 fs-md-2">Mr. Muhammad Shehbaz Sharif</h1>
          <p className="fw-bold text-muted">
            Prime Minister of the Islamic Republic of Pakistan and President of
            the Pakistan Muslim League (N)
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PM;
