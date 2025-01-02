import React, { useState } from "react";
import img from "../assets/cont.jpg";
import Navbar from "./Navbar";
import Footer from "./Footerbbottom";
import "../components/ContactUs.css";

const ContactUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <Navbar />
      <div>
        <img
          className="img-fluid"
          src={img}
          style={{
            objectFit: "cover",
            filter: "brightness(40%)",
            position: "relative",
            height: "auto",
          }}
          alt=""
        />
        <h2
          className="position-absolute text-white fs-1 fs-md-4"
          style={{
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Contact Us
        </h2>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center pt-5 m-md-2">
        {[
          {
            icon: "fa-envelope",
            text: "info@pmo.gov.pk",
          },
          {
            icon: "fa-phone",
            text: "+92 519201637",
          },
          {
            icon: "fa-address-card-o",
            text: "Prime Minister's Secretariat, Constitution Ave, Red Zone, Islamabad, Pakistan",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="border mb-3 mb-md-0 border-1 col-md-3 me-md-3 card-indivisual"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              padding: "100px 30px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="rounded-pill m-2 ms-4 icon-contact"
              style={{
                marginLeft: "0px",
                width: "100px",
                height: "100px",
                position: "relative",
                border: "1px solid black",
                backgroundColor: hoveredCard === index ? "green" : "white",
                color: hoveredCard === index ? "white" : "black",
              }}
            >
              <i
                style={{
                  fontSize: "30px",
                  position: "absolute",
                  top: "35%",
                  left: "35%",
                }}
                className={`fa ${card.icon}`}
              ></i>
            </div>
            <div>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Form Section */}
      <div className="d-flex flex-column flex-md-row justify-content-center mt-5 container">
        <div className="col-md-6 p-md-4 mb-3 mb-md-0 m-md-3 pe-md-0 ">
          <form action="" className="form-control p-4 shadow-sm rounded-3 ">
            <h3 className="text-center mb-4 fw-bold">Get in Touch</h3>
            <div className="mb-3">
              <input
                style={{ height: "60px" }}
                className="form-control"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <input
                style={{ height: "60px" }}
                className="form-control"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Write your message here"
                className="form-control"
                id="message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btnsub w-100">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-5 p-md-4 mb-3 mb-md-0 ps-md-0 m-md-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13272.275540062077!2d73.08668540588349!3d33.73303482245783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc0632572b191%3A0x8a5c79723f02234e!2sPrime%20Minister%E2%80%99s%20Office!5e0!3m2!1sen!2s!4v1735566476841!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
