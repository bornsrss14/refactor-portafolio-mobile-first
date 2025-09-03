export default function PostIt({ height = 150, children }) {
  const styles = {
    height: `${height}px`,
    width: "200px",
    background: "#fff78a",
    padding: "1rem",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#333",
    position: "relative",
    transform: "rotate(-2deg)",
    boxShadow: "15px 20px 5px rgba(0,0,0,0.25)",
    // ✨ efecto doblado: degradado sutil en el fondo
    backgroundImage: "linear-gradient(135deg, #fff78a 75%, #e6d85f 100%)",
    borderRadius: "2px",
  };

  const foldedCorner = {
    content: '""',
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "40px",
    height: "40px",
    background: "linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.2) 50%)",
    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
  };

  return (
    <div style={styles}>
      {children}
      <div style={foldedCorner}></div>
    </div>
  );
}
