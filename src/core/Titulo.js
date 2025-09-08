import SocialMediaIcons from "../components/SocialMediaIcons";

export const Titulo = ({ measure = "130px" }) => {
  const customImgContainer = {
    width: measure,
    height: "auto",
  };
  return (
    <>
      <div className="main-container-titulo">
        <div style={customImgContainer}>
          <img
            className="cover-image"
            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2F_new-photo-titulo.jpg?alt=media&token=b66f786e-73cc-4d27-b0d1-b0797f2da708"
            alt="titulo"
          ></img>
        </div>
        <h3 style={{ fontSize: "1.4rem", color: "rgba(7, 7, 185, 1)" }}>
          {" "}
          Rosario Fuentes García
        </h3>
        <p className=" typeWork-txt">
          Ing. de Software —<span>Cédula:1025479</span>{" "}
        </p>

        <div className="redes-sociales">
          <SocialMediaIcons />
        </div>
      </div>
    </>
  );
};
export default Titulo;
