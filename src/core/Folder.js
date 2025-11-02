const Folder = ({ linkMedia, label = "Proyecto", color }) => {
  const style = { backgroundColor: color, color: "white" };
  return (
    <a className="slide-top" target="_blank" rel="noreferrer" href={linkMedia}>
      <div className="folder shadow-pop-tl typewriter" style={style}>
        <div style={style} className="folder-tab"></div>
        <span className="folder-label">{label}</span>
      </div>
    </a>
  );
};

export default Folder;
