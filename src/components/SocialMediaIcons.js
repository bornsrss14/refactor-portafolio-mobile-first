import {
  IconBrandLinkedinFilled,
  IconBrandGithub,
  IconBrandPinterestFilled,
  IconBrandBlogger,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const SocialMediaIcons = () => {
  return (
    <>
      <div className="containerIcons">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/bornsrss/"
        >
          <IconBrandLinkedinFilled />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/bornsrss14"
        >
          <IconBrandGithub />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://mx.pinterest.com/bornsrss/_created"
        >
          <IconBrandPinterestFilled />
        </a>
        <Link to={"/blog"}>
          <IconBrandBlogger />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaIcons;
