import { Link } from "react-router-dom";
import LogoScalable from "../core/LogoScalable";
import { IconChevronDown } from "@tabler/icons-react";
import LanguageToggle from "../core/LanguageToggle";
import { useState } from "react";

export const Navbar = () => {
  const languajes = [
    {
      idiom: "EN",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    },
    {
      idiom: "ES",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/330px-Flag_of_Mexico.svg.png",
    },
  ];
  const [languaje, setLanguaje] = useState(languajes[0]);
  const toggleLanguaje = () => {
    setLanguaje((prev) => (prev.idiom === "EN" ? languajes[1] : languajes[0]));
  };
  const viceversa = languaje.idiom === "EN" ? languajes[1] : languajes[0];
  return (
    <div className="flex-row div-navbar">
      <Link to={"/"}>
        <div className="flex-row">
          <h3>
            <span style={{ color: "rgb(60, 60, 191)" }}>panda</span>
            sneezing
          </h3>
          <LogoScalable
            imagenImg={
              "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2Fpandas-black-white.png?alt=media&token=39f89382-5898-47d9-83ce-72b11a6872ca"
            }
            customHeight="30px"
            customWidth="30px"
          ></LogoScalable>
        </div>
      </Link>

      <ul className="flex-row-navbar">
        <li>
          <a href="#myResumen">Resume</a>
        </li>
        <li>
          <Link to={"/about-me"}>About me</Link>
        </li>

        <li>
          <Link to={"/blog"}>Articles</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="container-col">
        <div className="flex-row-nav">
          <p>{viceversa.idiom}</p>
          <LogoScalable
            imagenImg={viceversa.flag}
            customHeight={"1.3rem"}
            customWidth={"1.3rem"}
          />
          <IconChevronDown />

          <div className="submenu">
            <LanguageToggle
              toggleLanguaje={toggleLanguaje}
              languaje={languaje}
              setLanguaje={setLanguaje}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
