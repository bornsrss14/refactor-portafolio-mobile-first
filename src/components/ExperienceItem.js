import { IconBriefcaseFilled } from "@tabler/icons-react";
import React from "react";
import { useThemeT } from "../contexts/ThemeContext";

export const ExperienceItem = ({
  typeWork = "none",
  place = "everywhere",
  startDate = "jan, 2025",
  endDate = "now",
  yearWork,
}) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <>
      <div
        style={{
          color: theme.txt,
          background: theme.uiEduExp,
          border: `.31px solid ${theme.border}`,
        }}
        className="itemContainerExperience"
      >
        <div className="years">
          <button className="btn-clasic-blue">{yearWork}</button>
          <div className="icon">
            <IconBriefcaseFilled color={theme.txt} size={"24px"} />
          </div>
        </div>
        <div className="title">
          <p className="typeWork-txt">{typeWork}</p>
          <p className="workAs-txt">{place}</p>
        </div>
        <div className="lines">
          <div className="pene">
            <div className="circle"></div>
            <div className="line-full"></div>
            <div className="circle"></div>
          </div>
          <div className="div-dates-txt">
            <p>{startDate} </p>
            <p>{endDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
