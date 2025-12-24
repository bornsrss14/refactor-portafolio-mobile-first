import EducationItem from "../components/EducationItem";
import ExperienceItem from "../components/ExperienceItem";
import PortfolioFolderLayout from "../components/PortfolioFolderLayout";
import BtnClassic from "../core/BtnClassic";
import { IconArrowLeft } from "@tabler/icons-react";
import Folder from "../core/Folder";

import TypeIt from "typeit-react";

import Footer from "../components/Footer";
import Titulo from "../core/Titulo";
import { SectionSubtitle } from "../core/SectionSubtitle";
import { Link } from "react-router-dom";
import { OptimizedImage } from "../hooks/useOptimizedImage";
import { useThemeT } from "../contexts/ThemeContext";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { DataProjectsMobile } from "../utils/DataProjects";

export const Home = () => {
  const foldersData = [
    {
      id: "linkedin",
      linkMedia: "https://www.linkedin.com/in/bornsrss/details/certifications/",
      label: "LinkedIn",
    },
    {
      id: "github",
      linkMedia: "https://github.com/bornsrss14",
      label: "GitHub",
    },
    {
      id: "cv",
      linkMedia:
        "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/CV%2F_CV_ROSARIO_FUENTES_GARCIA_ESP.pdf?alt=media&token=beb76c3e-6a37-442c-995f-5dbb12cd395c",
      label: "Download CV",
    },
  ];

  /*  const tabsMobile = [
    { id: 1001, label: "Preview", className: "blue" },
    { id: 1002, label: "Mobile", className: "purple" },
    { id: 1003, label: "Info", className: "yellow" },
  ]; */
  const SuperStrong = ({ children }) => (
    <p className="name-message" style={{ fontSize: "3.6rem" }}>
      {children}
    </p>
  );
  const strong = {
    fontWeight: "500",
    color: "rgb(84, 84, 84)",
  };

  const listExpertice = [
    "React.js, JavaScript ES6+, HTML5, CSS3",
    "Responsive design & cross-browser compatibility",
    " Component-based architecture and reusable UI patterns",
    " Tailwind CSS, Styles CSS",
    " UX principles and design systems",
    " Git & GitHub",
    "API integration (REST)",
    "State management (React hooks, Context API)",
    "Basic SEO best practices",
    "DB: MySQL (familiar with queries and structure) ",
  ];

  const { isDark, light, dark } = useThemeT();
  const theme = isDark ? dark : light;
  const { isMobile, isDesktop } = useBreakpoint();
  return (
    <>
      <section className="about-me extra-margin">
        <div className="grid-photo-introduction">
          <div className="photo">
            <div className="my-name-txt">
              <TypeIt>
                Hi, It's me {""}
                <SuperStrong>Rosario</SuperStrong>
              </TypeIt>
            </div>
            <div className="brief-intro">
              <p>
                I’m enamored with creating intuitive interfaces where design
                meets seamless code.
              </p>
            </div>
            <div className="picture-of-me">
              <OptimizedImage
                placeholder="/public/lowQuality.jpeg"
                className="rosario rounded-x1 shadow-md"
                skeletonClassName="rounded-x1"
                alt="img-rosario"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2Fme-me.jpg?alt=media&token=f8e75c9e-f940-4e45-8b0c-5dffe6f391c3"
                }
              ></OptimizedImage>

              <div className="blur-overlay"></div>
            </div>
          </div>
        </div>

        <div
          style={{ background: theme.ui, color: theme.txt }}
          className="div-touch-files"
        >
          <div style={{ background: theme.bg }} className="grid-about-me">
            <div className="introduction-g1">
              <h3>Front-End development from México</h3>
              <p>
                with a background in Software Engineering and a user-centered
                mindset. I build clean, <span style={strong}>responsive</span>,
                and functional <span style={strong}>web applications</span>{" "}
                using <span style={strong}>JS</span>,{" "}
                <span style={strong}>React</span>, and
                <span style={strong}> Taildwind CSS</span>
              </p>
            </div>
            {!isMobile && (
              <div className="introduction-g2">
                {/*  <img
                            style={{ height: "130px", width: "200px" }}
                            alt="doodle"
                            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2FOpen%20Doodles%20-%20Reading.png?alt=media&token=cd682543-e3e2-47a1-8caf-51627e802218"
                            ></img> */}
                <Titulo measure="60px"></Titulo>
              </div>
            )}
          </div>
          <div className="div-files">
            <div>
              <p>Explore my professional experience in the links below.</p>
            </div>
            <div className="flex-carpets">
              {foldersData.map((folder) => (
                <a key={folder.id} href={folder.linkMedia}>
                  <Folder label={folder.label} color="var(--azul-pastel)" />
                </a>
              ))}

              <Link to={"/ui-components"}>
                <Folder
                  label="UI Components"
                  color="var(--azul-pastel)"
                ></Folder>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="personal-projects-section">
        <h2 style={{ color: theme.txt }} className="font-sub-titles">
          Personal projects
        </h2>
        <p style={{ color: theme.txt }}>
          Here are some personal projects I've been working lately
        </p>
      </section>
      <section>
        {isMobile &&
          DataProjectsMobile.map((p, index) => (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "auto",
              }}
            >
              <PortfolioFolderLayout itemObject={p} />
            </div>
          ))}
      </section>

      {isDesktop && (
        <section
          style={{ background: theme.bgExperience }}
          className="grid-section-projects"
        >
          <div className="container-arrow-hash-none container-arrow-hash ">
            <div>
              <IconArrowLeft
                color={theme.txt}
                size={"14rem"}
                className="arrow"
              />
            </div>
            <div style={{ color: theme.txt }}>
              <div
                style={{ borderBottom: `1px solid ${theme.colorBorder} ` }}
                className="flex-hash"
              >
                <p>#HTML</p>
                <p>#CSS</p>
              </div>
              <div
                style={{ borderBottom: `1px solid ${theme.colorBorder} ` }}
                className="flex-hash"
              >
                <p>#JavaScript</p>
                <p>#React</p>
              </div>
              <div
                style={{ borderBottom: `1px solid ${theme.colorBorder} ` }}
                className="flex-hash"
              >
                <p>#MySQL</p>
                <p>#NodeJs</p>
              </div>
              <div
                style={{ borderBottom: `1px solid ${theme.colorBorder} ` }}
                className="flex-hash"
              >
                <p>#Figma</p>
                <p>#ContextAPI</p>
                <p>#Hooks</p>
              </div>
              <div
                style={{ borderBottom: `1px solid ${theme.colorBorder} ` }}
                className="flex-hash"
              >
                <p>#TypeScript</p>
                <p>#Taildwind</p>
                <p>#MongoDB</p>
              </div>
            </div>
          </div>
          <PortfolioFolderLayout />
        </section>
      )}
      <section className="grid-experience">
        <div style={{ background: theme.bgExperience }} className="item">
          <div id="myResumen"></div>
          <SectionSubtitle txtSubtitle={"Experience"} />
          <div className="content-true-false">
            <ExperienceItem
              typeWork="Paralegal at notary office"
              place="Notaria no. 9"
              startDate="jan, 2025"
              yearWork={2024}
              endDate="currenly"
            />
            <ExperienceItem
              yearWork={2023}
              typeWork="Editorial | advertising designer"
              place="Compañía Periodistica El Buen Tono S.A. de C.V."
              startDate=" march, 2023"
              endDate="Aug, 2023"
            />
            <ExperienceItem
              yearWork={2023}
              typeWork="Entrepreneur"
              place="pandasneezing: Own business"
              startDate="  Oct, 2023,"
              endDate="jul, 2024"
            />
          </div>
        </div>
        <div style={{ background: theme.bgExperience }} className="item">
          <SectionSubtitle txtSubtitle={"Expertice"} />

          <ul style={{ color: theme.txt }}>
            {listExpertice.map((ex, inx) => {
              return <li key={inx}>{`${inx + 1}. ${ex}`}</li>;
            })}
          </ul>
          <div className="line-full-2"></div>

          <SectionSubtitle txtSubtitle={"Hardskill"} />

          <div>
            <BtnClassic btnText={"React"}></BtnClassic>
            <BtnClassic color="white" btnText={"HTML"}></BtnClassic>
            <BtnClassic color={theme.tags} btnText={"JavaScript"}></BtnClassic>
            <BtnClassic
              color={theme.tags}
              btnText={"tailwind css"}
            ></BtnClassic>
            <BtnClassic color="white" btnText={"NodeJs"}></BtnClassic>
            <BtnClassic color="white" btnText={"MongoDB"}></BtnClassic>
            <BtnClassic color="white" btnText={"TypeScript"}></BtnClassic>
            <BtnClassic color="white" btnText={"HTML"}></BtnClassic>
            <BtnClassic color={theme.tags} btnText={"MySQL"}></BtnClassic>
          </div>
          <div className="line-full-2"></div>

          <SectionSubtitle txtSubtitle={"Softskill"} />
          <div>
            <BtnClassic color={theme.tags} btnText={"#Creativity"}></BtnClassic>
            <BtnClassic color="white" btnText={"#TimeManagment"}></BtnClassic>
            <BtnClassic color={theme.tags} btnText={"#TeamWork"}></BtnClassic>
            <BtnClassic color="white" btnText={"#Communication"}></BtnClassic>
            <BtnClassic
              color={theme.tags}
              btnText={"#AgileEnvironment"}
            ></BtnClassic>
            <BtnClassic
              color={theme.tags}
              btnText={"#TeamCollaboration"}
            ></BtnClassic>
          </div>
        </div>
        <div style={{ background: theme.bgExperience }} className="item">
          <SectionSubtitle txtSubtitle={"Education"} />
          <EducationItem
            course={false}
            date="2025"
            subtitle="Universidad Veracruzana"
            title="Licenciatura, Ingeniería de Software"
          />
          <EducationItem
            date="2024"
            subtitle="Cursera"
            title="Google UX Design Professional Certificate"
            linkCertified={
              "https://www.coursera.org/account/accomplishments/verify/ISY3NR7SA7XF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
            }
          />
          <EducationItem
            date="2024"
            subtitle="Udemy"
            title="JavaScript Course 2024"
            linkCertified="https://www.udemy.com/certificate/UC-39b84bf6-d226-4f6f-b66f-2c52ee5b06f0/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
          />
          <EducationItem
            date="feb. 2024"
            subtitle="freeCodeCamp"
            title="Responsive Web Design"
            linkCertified="https://www.freecodecamp.org/certification/bornsrss/responsive-web-design"
          />
          <EducationItem
            date="jul. 2025"
            subtitle="Udemy"
            title="TypeScript Fundamentals"
            linkCertified="https://www.udemy.com/certificate/UC-7486e84a-fbdd-461d-863f-14fc2c348fbb/"
          />
        </div>
      </section>
      <footer style={{ background: theme.txt_logo }} className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Home;
