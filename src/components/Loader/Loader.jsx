import React from "react";
import LoaderImg from "../../images/loader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="Loader flex flex-c">
      <img src={LoaderImg} alt="Loader" />
    </div>
  );
};

export default Loader;
