import React from "react";
import Typewriter from "typewriter-effect";
import "./banner.css";
import { BsMouse } from "react-icons/bs";

// image: https://raw.githubusercontent.com/judygab/web-dev-projects/e17c7bbf4d4d4de447ca1211b06aec66912e695d/personal-portfolio/src/assets/img/header-img.svg

export const Banner = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };
  return (
    <div className="containerPage">
      <div className="containerBanner">
        <div className="banner-slogan">
          <Typewriter
            options={{
              strings: [
                "R is for Recycle",
                "U R is for YOU RECYCLE",
                "R U READY ???",
                "AYE AYE",
              ],
              autoStart: true,
              loop: true,
            }}
            //   onInit={(typewriter) => {
            //     typewriter
            //       .typeString("R is for Recycle")

            //       .pauseFor(1000)
            //       .deleteAll()
            //       .typeString("U R is for YOU RECYCLE")
            //       .pauseFor(1000)
            //       .deleteAll()
            //       .typeString("R U READY ???")
            //       .pauseFor(1000)
            //       .deleteAll()
            //       .typeString("AYE AYE")
            //       .start();
            //   }}
          />
        </div>
        <div>
          <img
            src={"./homepage/cuterecyclingbin2clouds.png"}
            style={{
              width: 400,
              height: 600,
            }}
          />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" onClick={goToTop} />
        </a>
      </div>
    </div>
  );
};
