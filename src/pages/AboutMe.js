import { IconFlareFilled } from "@tabler/icons-react";
import MasonryGallery from "../components/MasonryGallery";
import BtnClassic from "../core/BtnClassic";
import Footer from "../components/Footer";
import { useThemeT } from "../contexts/ThemeContext";

export const AboutMe = () => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <>
      <main
        style={{ background: theme.bgMansory, color: theme.txt }}
        id="main-grid-about"
        className="extra-margin"
      >
        <section className="sec-txt item-about">
          <h1 style={{ color: theme.txt_logo }} className="message-footer-bye">
            <span>
              Inspiration
              <IconFlareFilled />
            </span>{" "}
          </h1>
          <div>
            <BtnClassic color={"white"} btnText={"hike"} />
            <BtnClassic color={"white"} btnText={"photography"} />
            <BtnClassic color={"white"} btnText={"travel"} />
          </div>
          <div className="paragraph-about-me">
            <div>
              <p>
                Besides enjoying work in web development, I also love
                photography (even if I’m not professional, at least not yet)
                exploring new places, <strong>hiking on weekdays </strong>in the
                outskirts, <strong>riding </strong>my bike and doing morning
                workout.
              </p>
            </div>
            <div>
              <p>
                These activities give me a lot of <strong>inspiration </strong>.
                Here I share with you some photos of my days, reflecting what
                inspires me both in my{" "}
                <strong>professional and personal </strong> life.
              </p>
            </div>
            <div>
              <p>
                I’m a curious mind. I’d like to learn several languages, and I’m
                currently <strong>learning English </strong>. I’m proficient in
                writing and technical reading, and I’m working on improving my
                communication skills. I’m also self-learning at French.
              </p>
            </div>
            <p>
              The hike-pandas project was inspired by the idea of tracking the
              places I visit from time to time.
            </p>
          </div>
        </section>
        <section className="sec-masonry item-about">
          <MasonryGallery />
        </section>
      </main>
      <div className="fine-line"></div>
      <Footer></Footer>
    </>
  );
};

export default AboutMe;
