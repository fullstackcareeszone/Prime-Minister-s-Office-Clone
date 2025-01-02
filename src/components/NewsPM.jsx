import React from "react";

const news = (probs) => {
  return (
    <div className="d-flex container mt-4 newzHead">
      <div>
        <img className="img-fluid rounded-pill" src={probs.Img} alt="" />
      </div>
      <div className="ps-3 ms-3 ">
        {probs.time} <br />
        {probs.head}
      </div>
    </div>
  );
};

export default news;
