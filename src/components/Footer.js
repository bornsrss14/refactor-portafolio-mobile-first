import { IconChevronCompactUp } from "@tabler/icons-react";
import SecondFooter from "./SecondFooter";
import { useThemeT } from "../contexts/ThemeContext";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;

  return (
    <div style={{ background: theme.bgfooter }} className="footer-content">
      <div
        style={{ background: theme.bgfooter }}
        onClick={scrollToTop}
        className="up"
      >
        <IconChevronCompactUp
          fontSize={"20px"}
          color={theme.txt}
          stroke={"2px"}
        />
      </div>
      <section className="container-message">
        <h2 style={{ color: theme.txt }} className="message-footer">
          Thank you,{" "}
          <span style={{ color: theme.txt }} className="message-footer-bye">
            Bye
          </span>
        </h2>
        <p style={{ color: theme.txt }}>Don't forget to contact me</p>
        <p style={{ color: theme.txt }}>Hope to hear from you soon.</p>
      </section>
      <SecondFooter></SecondFooter>
    </div>
  );
};

export default Footer;
