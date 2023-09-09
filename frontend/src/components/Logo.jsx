import React from "react";
import imgP from "../img/logo.png";
import Beta from "../img/beta.png";

const Logo = () => {
  return (
    <div className="image">
      <img src={imgP} alt="logoH" className="logo" />
      <img src={Beta} alt="betaV" className="beta" />
    </div>
  );
};

export default Logo;
