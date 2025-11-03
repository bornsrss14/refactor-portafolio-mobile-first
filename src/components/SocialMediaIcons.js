import {
  IconBrandLinkedinFilled,
  IconBrandGithub,
  IconBrandPinterestFilled,
  IconBrandBlogger,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useThemeT } from "../contexts/ThemeContext";

export const SocialMediaIcons = () => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <>
      <div className="containerIcons">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/bornsrss/"
        >
          <IconBrandLinkedinFilled color={theme.txt} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/bornsrss14"
        >
          <IconBrandGithub color={theme.txt} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://mx.pinterest.com/bornsrss/_created"
        >
          <IconBrandPinterestFilled color={theme.txt} />
        </a>
        <Link to={"/blog"}>
          <IconBrandBlogger color={theme.txt} />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaIcons;
