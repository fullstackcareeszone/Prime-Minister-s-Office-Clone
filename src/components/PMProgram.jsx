import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.jpg";
import { Link } from "react-router-dom";

const PMProgram = () => {
  return (
    <div className="container my-5 ">
      <h2 className="text-center mb-5 fw-bold">Prime Minister's Programs</h2>
      <div className="row g-4 ">
        <div className="col-12 col-sm-6 col-md-4 ">
          <div className="card h-100 border-0 shadow-lg rounded-3">
            <img
              src={card1}
              className="card-img-top rounded-top-3"
              alt="Program 1"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body d-flex flex-column pb-4">
              <h5
                className="card-title fw-semibold text-success"
                style={{ cursor: "pointer" }}
              >
                Prime Minister Youth Programme
              </h5>
              <p className="card-text text-muted ">
                The Prime Minister Youth Programme is a comprehensive initiative
                aimed at empowering the youth through education, skill
                development, and employment opportunities.
              </p>
              <a
                href="https://pmyp.gov.pk/"
                className="btn btn-PM mx-auto mt-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <div className="card h-100 border-0 shadow-lg rounded-3">
            <img
              src={card2}
              className="card-img-top rounded-top-3"
              alt="Program 2"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body d-flex flex-column pb-4">
              <h5
                className="card-title fw-semibold text-success"
                style={{ cursor: "pointer" }}
              >
                Prime Minister Relief Fund For Gaza And Lebanon
              </h5>
              <p className="card-text text-muted">
                The Prime Minister Relief Fund for Gaza and Lebanon aims to
                provide critical humanitarian assistance to those affected by
                the ongoing crises.
              </p>
              <Link to="/PMReliefFund" className="btn btn-PM mx-auto border-0 mt-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <div className="card h-100 border-0 shadow-lg rounded-3">
            <img
              src={card3}
              className="card-img-top rounded-top-3"
              alt="Program 3"
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body d-flex flex-column pb-4">
              <h5
                className="card-title fw-semibold text-success"
                style={{ cursor: "pointer" }}
              >
                Prime Minister Flood Relief Fund
              </h5>
              <p className="card-text text-muted">
                The Prime Minister Flood Relief Fund provides vital assistance
                to communities impacted by devastating floods.
              </p>
              <a
                href="https://e-payment.nbp.com.pk/"
                className="btn btn-PM mx-auto mt-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMProgram;
