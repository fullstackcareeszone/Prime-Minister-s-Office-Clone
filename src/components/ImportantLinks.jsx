import React from "react";
const ImportantLinks = (probs) => {
  return (
    <>
      <div className="important-links-container d-flex  ">
        <span className="ps-3 ">{probs.linkhead}</span>

        <img
          className="ms-auto"
          src={probs.Img}
          width={"100"}
          height={"100"}
          style={{ borderRadius: "0px", objectFit: "cover" }}
          alt="probs of imges"
        />
      </div>
    </>
  );
};

export default ImportantLinks;
