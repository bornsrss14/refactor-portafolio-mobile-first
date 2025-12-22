import React from "react";
import { useThemeT } from "../contexts/ThemeContext";

export const BtnClassic = ({ color, btnText }) => {
  const { isDark, light, dark } = useThemeT();
  const theme = isDark ? dark : light;
  /*
  const StyleBtn = {
    color: color === "white" ? "var(--c-primary-blue)" : "white",
    backgroundColor: color === "white" ? "white" : "var(--c-primary-blue)",
    border: `1px solid ${color === "white" ? "blue" : "none"}`,
    cursor: "pointer",
  };
   */
  const StyleBtn = {
    color: theme.txtSkillBlue,
    backgroundColor: theme.bgSkillBlue,
    cursor: "pointer",
  };
  return (
    <>
      {/*  onSubmit={} */}
      <button style={StyleBtn} className="btn-clasic-blue">
        {btnText}
      </button>
    </>
  );
};

export default BtnClassic;
