import React from "react";

export const BtnClassic = ({ color, btnText }) => {
  const StyleBtn = {
    color: color === "white" ? "var(--c-primary-blue)" : "white",
    backgroundColor: color === "white" ? "white" : "var(--c-primary-blue)",
    border: `1px solid ${color === "white" ? "blue" : "none"}`,
    cursor: "pointer",
  };
  return (
    <>
      <button onSubmit={""} style={StyleBtn} className="btn-clasic-blue">
        {btnText}
      </button>
    </>
  );
};

export default BtnClassic;
