import SocialMediaIcons from "../components/SocialMediaIcons";
import { OptimizedImage } from "../hooks/useOptimizedImage";

export const Titulo = ({ measure = "130px" }) => {
  const customImgContainer = {
    width: measure,
    height: "auto",
  };
  return (
    <>
      <div className="main-container-titulo">
        <div style={customImgContainer}>
          <OptimizedImage
            placeholder="/public/lowQuality.jpeg"
            className="rosario rounded-x1 shadow-md cover-image"
            skeletonClassName="rounded-x1"
            alt="titulo"
            src={
              "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2F_new-photo-titulo.jpg?alt=media&token=b66f786e-73cc-4d27-b0d1-b0797f2da708"
            }
          ></OptimizedImage>
        </div>
        <h3 style={{ fontSize: "1.1rem", color: "rgba(7, 7, 185, 1)" }}>
          {" "}
          Rosario Fuentes García
        </h3>
        <p className=" typeWork-txt">
          Ing. de Software <span> | Universidad Veracruz</span>{" "}
        </p>

        <div className="redes-sociales">
          <SocialMediaIcons />
        </div>
      </div>
    </>
  );
};
export default Titulo;
