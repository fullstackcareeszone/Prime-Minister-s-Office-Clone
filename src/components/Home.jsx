import React from "react";
import Navbar from "./Navbar";
import ImgSec from "./ImgSec";
import PMProgram from "./PMProgram";
import fedralGov from "../assets/fedralGov.jpg";
import govPunjab from "../assets/govPunjab.jpg";
import govSindh from "../assets/govSindh.jpg";
import kpkGov from "../assets/kpkGov.png";
import govBaloch from "../assets/govBaloch.png";
import govGilgit from "../assets/govGilgit.png";
import govAjk from "../assets/govAjk.png";
import supremeCourt from "../assets/supremeCourt.jpg";
import growthScale from "../assets/growthScale.avif";
import service from "../assets/service.jpg";
import Complains from "./Complains";
import ImportantLinks from "./ImportantLinks";
import NewsPM from "./NewsPM";
import Footerbbottom from "./Footerbbottom";
import news1 from "../assets/news1.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-2">
        <ImgSec img1={banner1} img2={banner2} img3={banner3} />
      </div>
      <PMProgram />
      <div className="d-flex container  ">
        <div className="d-lg-flex">
          <div
            className=" compalin ps-0 pt-3 me-lg-4  mt-5 col-12 col-lg-8 "
            style={{}}
          >
            <Complains />
          </div>
          <div
            className=" complain-news pt-2 pb-4 mt-5 col-12 col-lg-4"
            style={{ borderRadius: "5px" }}
          >
            <h1 className="ps-3 pt-2">News & Events</h1>
            <div
              style={{ overflow: "auto", height: "400px", cursor: "pointer" }}
            >
              <NewsPM
                Img={news1}
                time="Dec 19, 2024"
                head="Meeting between the Prime Minister of Pakistan and Chief Adviser of Bangladesh"
              />
              <NewsPM
                Img={news1}
                time="Dec 19, 2024"
                head="Meeting between the Prime Minister of Pakistan and Chief Adviser of Bangladesh"
              />
              <NewsPM
                Img={news1}
                time="Dec 19, 2024"
                head="Meeting between the Prime Minister of Pakistan and Chief Adviser of Bangladesh"
              />
              <NewsPM
                Img={news1}
                time="Dec 19, 2024"
                head="Meeting between the Prime Minister of Pakistan and Chief Adviser of Bangladesh"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="imp-link ">
        <div className="d-flex container  mt-3 mb-4 pt-3">
          <div className="d-flex   link-text my-auto pb-5">
            <div className="d-sm-flex  p-0">
              <div className="pe-sm-5 p-0 col-12 col-sm-6 text-center text-md-start">
                <h4 style={{ marginBottom: "0px" }}>Other Links For</h4>
                <h1 className="mt-2">
                  <strong
                    className="vital-text"
                    style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
                  >
                    Essential
                  </strong>
                  <br />
                  <strong
                    className="info-Text"
                    style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
                  >
                    Information
                  </strong>
                </h1>
              </div>

              <div className=" container-fluid d-flex align-items-center px-lg-3 col-sm-6 px-lg-5 mx-sm-3 mx-lg-5 col-12 justify-content-center text-center text-sm-start">
                <p>
                  The essential link for vital information, provided by the
                  official government website, offers access to crucial updates,
                  guidelines, and resources. This platform serves as a reliable
                  and authoritative source for the latest government
                  announcements, regulations, and policies, ensuring that
                  citizens and stakeholders stay informed and up-to-date on key
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-auto container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <ImportantLinks Img={fedralGov} linkhead="Federal Government" />
            </div>
            <div className="col-md-4 mb-4">
              <ImportantLinks Img={govPunjab} linkhead="Government of Punjab" />
            </div>
            <div className="col-md-4 mb-4">
              <ImportantLinks Img={govSindh} linkhead="Government of Sindh" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <ImportantLinks Img={kpkGov} linkhead="Government of KPK" />
            </div>
            <div className="col-md-4 mb-4">
              <ImportantLinks
                Img={govBaloch}
                linkhead="Government of Balochistan"
              />
            </div>
            <div className="col-md-4 mb-4">
              <ImportantLinks
                Img={govGilgit}
                linkhead="Government of Gilgit Baltistan"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <ImportantLinks Img={govAjk} linkhead="Government of AJ & K" />
            </div>
            <div className="col-md-4 mb-4">
              <ImportantLinks
                Img={supremeCourt}
                linkhead="Supreme Court of Pakistan"
              />
            </div>
            <div className="col-md-4 mb-4">
              <ImportantLinks
                Img={growthScale}
                linkhead="Performance Report 2021"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <ImportantLinks
                Img={service}
                linkhead="E-gov Service Repository of E-Forms"
              />
            </div>
          </div>
        </div>
      </div>

      <Footerbbottom />
    </>
  );
};

export default Home;
