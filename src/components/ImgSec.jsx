import React from "react";
import "../components/ImgSecMainStyle.css";

const ImgSec = (probs) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="imgslider">
              <img src={probs.img1} class="d-block w-100" alt="..." />
            </div>
            <div
              className="textslider"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", cursor: "pointer" }}
            >
              <h1>PM in the family photo of the One-Water Summit</h1>
            </div>
          </div>

          <div class="carousel-item">
            <div className="imgslider">
              <img src={probs.img2} class="d-block w-100" alt="..." />
            </div>
            <div
              className="textslider"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", cursor: "pointer" }}
            >
              <h1>Prime Minister meets with President of Belarus</h1>
            </div>
          </div>

          <div class="carousel-item">
            <div className="imgslider">
              <img src={probs.img3} class="d-block w-100" alt="..." />
            </div>
            <div
              className="textslider"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", cursor: "pointer" }}
            >
              <h1>PM meets the President of Iran</h1>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default ImgSec;
