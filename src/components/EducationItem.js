import { IconSchool, IconRosetteDiscountCheck } from "@tabler/icons-react";
import { useThemeT } from "../contexts/ThemeContext";

export const EducationItem = ({
  date = "2018 -2025",
  title = "Licenciatura, Ingeniería de Software",
  subtitle = "universidad veracruzana",
  course = true,
  linkCertified = "klsd",
}) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <>
      <div
        style={{
          color: theme.txt,
          background: theme.uiEduExp,
        }}
        className="div-education"
      >
        <a
          target="_blank"
          href={linkCertified}
          alt="dkl"
          rel="noreferrer"
          title="certifications"
        >
          <div className="years">
            <button className="btn-clasic-blue">{date}</button>
            <div className="icon">
              {course ? (
                <IconRosetteDiscountCheck color={theme.txt} size={"24px"} />
              ) : (
                <IconSchool color={theme.txt} size={"24px"} />
              )}
            </div>
          </div>
          <div className="title">
            <p className="typeWork-txt">{subtitle}</p>
            <p className="workAs-txt">{title}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default EducationItem;
