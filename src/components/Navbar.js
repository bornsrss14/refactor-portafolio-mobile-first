import { Link } from "react-router-dom";
import LogoScalable from "../core/LogoScalable";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import LanguageToggle from "../core/LanguageToggle";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOpenClose = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    <>
      <div className="div-navbar">
        <header>
          <Link onClick={() => closeMenu()} to={"/"}>
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
          <button
            aria-label="abrir menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            className="burger-button"
            onClick={toggleOpenClose}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </header>
        <div
          id="main-menu"
          className={`menu-content${isMenuOpen ? "show" : ""}`}
        >
          <ul className=" menu-list ">
            {/*flex-row-navbar */}
            <li onClick={() => closeMenu()} className="menu-item-nav">
              <a className="menu-link-nav" href="#myResumen">
                Resume
              </a>
            </li>
            <li onClick={() => closeMenu()} className="menu-item-nav">
              <Link className="menu-link-nav" to={"/about-me"}>
                About me
              </Link>
            </li>
            <li onClick={() => closeMenu()} className="menu-item-nav">
              <Link className="menu-link-nav" to={"/blog"}>
                Articles
              </Link>
            </li>
            <li onClick={() => closeMenu()} className="menu-item-nav">
              <Link className="menu-link-nav" to={"/contact"}>
                Contact
              </Link>
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
      </div>
    </>
  );
};

export default Navbar;
