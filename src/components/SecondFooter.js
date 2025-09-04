import React from "react";
import LogoScalable from "../core/LogoScalable";
import SocialMediaIcons from "./SocialMediaIcons";

export const SecondFooter = () => {
  return (
    <>
      <section className="container-social-media ">
        <div className="flex-row">
          <LogoScalable
            imagenImg={
              "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/splits-bills%2Fpandas.png?alt=media&token=d45078fa-d2c2-4db5-9a5a-322b7fd092d2"
            }
            customHeight="30px"
            customWidth="30px"
          ></LogoScalable>

          <p> 2025, made by Rosario Fuentes with ♡</p>
        </div>
        <SocialMediaIcons />
      </section>
    </>
  );
};

export default SecondFooter;
