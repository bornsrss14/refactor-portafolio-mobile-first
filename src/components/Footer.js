import { IconChevronCompactUp } from "@tabler/icons-react";
import LogoScalable from "../core/LogoScalable";
import SocialMediaIcons from "./SocialMediaIcons";
import SecondFooter from "./SecondFooter";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-content">
      <div onClick={scrollToTop} className="up">
        <IconChevronCompactUp fontSize={"20px"} color="black" stroke={"2px"} />
      </div>
      <section className="container-message">
        <h2 className="message-footer">
          Thank you, <span className="message-footer-bye">Bye</span>
        </h2>
        <p>Don't forget to contact me</p>
        <p>Hope to hear from you soon.</p>
      </section>
      <SecondFooter></SecondFooter>
    </div>
  );
};

export default Footer;
