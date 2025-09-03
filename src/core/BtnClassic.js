import React from "react";

export const BtnClassic = ({ color, btnText }) => {
  const StyleBtn = {
    color: color === "white" ? "rgb(60, 60, 191)" : "white",
    backgroundColor: color === "white" ? "white" : "rgb(60, 60, 191)",
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
