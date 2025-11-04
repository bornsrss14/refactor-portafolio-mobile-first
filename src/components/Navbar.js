import { Link } from "react-router-dom";
import LogoScalable from "../core/LogoScalable";
import { useThemeT } from "../contexts/ThemeContext";
import { useState } from "react";
import {
  IconMoonFilled,
  IconLanguageHiragana,
  IconSun,
} from "@tabler/icons-react";

export const Navbar = ({ handleScrollTop }) => {
  const { isDark, dark, light, toggleTheme } = useThemeT();
  const theme = isDark
    ? dark
    : light; /*La variable para iniciar los temas y acceder a theme.txt, theme.ui, theme.bg */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOpenClose = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div style={{ background: theme.bg }} className="div-navbar">
        <header className="header-desktop">
          <Link onClick={() => closeMenu()} to={"/"}>
            <div className="flex-row">
              <h3 style={{ color: theme.txt }} className="txt-logo-desktop">
                <span style={{ color: theme.txt_logo }}>panda</span>
                sneezing
              </h3>
              <LogoScalable
                imagenImg={
                  "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2Fpandas-black-white.png?alt=media&token=39f89382-5898-47d9-83ce-72b11a6872ca"
                }
                customHeight="35px"
                customWidth="35px"
              ></LogoScalable>
            </div>
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "fitContent",
            }}
          >
            {" "}
            <div
              style={{ padding: "8px 14px", cursor: "pointer" }}
              onClick={() => toggleTheme()}
              className="menu-item-nav"
            >
              {!isDark ? (
                <IconMoonFilled
                  className="rotate-center-sun"
                  color="black"
                  size={"22px"}
                ></IconMoonFilled>
              ) : (
                <IconSun
                  className="rotate-center-sun"
                  color={"yellow"}
                  size={"22px"}
                ></IconSun>
              )}
            </div>
            <div
              style={{
                padding: "8px 14px",
                cursor: "pointer",
                color: theme.txt,
              }}
              onClick={console.log("Esto es de español")}
              className="menu-item-nav"
            >
              <IconLanguageHiragana
                size={"22px"}
                stroke={"1.4px"}
              ></IconLanguageHiragana>
            </div>
          </div>
          <button
            aria-label="abrir menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            className="burger-button"
            onClick={toggleOpenClose}
          >
            <span
              style={{ background: theme.txt }}
              className="burger-line"
            ></span>
            <span
              style={{ background: theme.txt }}
              className="burger-line"
            ></span>
            <span
              style={{ background: theme.txt }}
              className="burger-line"
            ></span>
          </button>
        </header>

        <div
          id="main-menu"
          className={`menu-content${isMenuOpen ? "show" : ""}`}
        >
          <ul className="menu-list">
            {/*flex-row-navbar */}
            <li onClick={() => closeMenu()} className="menu-item-nav">
              <a
                style={{ color: theme.txt }}
                className="menu-link-nav"
                href="#myResumen"
              >
                Resume
              </a>
            </li>
            <li onClick={() => closeMenu()} className="menu-item-nav">
              <Link
                style={{ color: theme.txt }}
                className="menu-link-nav"
                to={"/about-me"}
              >
                About me
              </Link>
            </li>
            <li onClick={() => closeMenu()} className="menu-item-nav">
              <Link
                style={{ color: theme.txt }}
                className="menu-link-nav"
                to={"/blog"}
              >
                Articles
              </Link>
            </li>
            <li onClick={() => closeMenu()} className="menu-item-nav">
              <Link
                style={{ color: theme.txt }}
                className="menu-link-nav"
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
