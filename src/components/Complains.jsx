import React from "react";
import citizenportal from "../assets/citizenPortal.png";

const Complains = () => {
  return (
    <>
      <div className="container d-flex ">
        <div className="">
          <div className="">
            <h1 className="">For Complains</h1>
            <hr />
          </div>
          <div className="">
            <img
              src={citizenportal}
              className="img-fluid"
              width={"auto"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Complains;
