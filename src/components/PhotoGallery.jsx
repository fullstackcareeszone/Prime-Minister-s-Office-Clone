import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footerbbottom";
import img from "../assets/img.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./Gallery.css";

const images = [
  "src/assets/GP1.jpg",
  "src/assets/GP2.jpg",
  "src/assets/GP3.jpg",
  "src/assets/GP4.jpg",
  "src/assets/GP5.jpg",
  "src/assets/GP6.jpg",
  "src/assets/GP7.jpg",
  "src/assets/GP8.jpg",
  "src/assets/GP9.jpg",
  "src/assets/GP10.jpg",
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <Navbar />
      <div className="position-relative">
        <img
          className="img-fluid w-100"
          src={img}
          alt="Gallery"
          style={{
            objectFit: "cover",
            filter: "brightness(40%)",
            height: "auto",
          }}
        />
        <h2
          className="position-absolute text-white fs-1 fs-md-4"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Gallery
        </h2>
      </div>

      <div className="gallery-container container">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image img-fluid"
            />
          </div>
        ))}

        {currentIndex !== null && (
          <div
            className="modal show d-block"
            tabIndex="-1"
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1050,
            }}
          >
            <button
              type="button"
              className="btn-close-icon position-absolute"
              aria-label="Close"
              onClick={closeModal}
            >
              <i className="bi bi-x"></i>
            </button>

            <button
              className="btn nav-btn left-btn"
              onClick={showPrevious}
              aria-label="Previous"
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              className="btn nav-btn right-btn"
              onClick={showNext}
              aria-label="Next"
            >
              <i className="bi bi-arrow-right"></i>
            </button>

            <div className="d-flex justify-content-center align-items-center h-100">
              <img
                src={images[currentIndex]}
                alt={`Gallery Image ${currentIndex + 1}`}
                className="img-fluid"
                style={{
                  maxHeight: "80vh",
                  maxWidth: "90%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PhotoGallery;
