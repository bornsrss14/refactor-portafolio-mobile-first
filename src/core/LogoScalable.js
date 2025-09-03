import { Link } from "react-router-dom";

export const LogoScalable = ({ imagenImg, customHeight, customWidth }) => {
  const containerLogo = {
    width: customWidth,
    height: customHeight,
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: "white",
    overflow: "hidden",
  };
  return (
    <div style={containerLogo}>
      <Link to={"/"}>
        <img className="img-full-cover" src={imagenImg} alt="MUBI logo" />
      </Link>
    </div>
  );
};

export default LogoScalable;
