import { useThemeT } from "../contexts/ThemeContext";

const Folder = ({ linkMedia, label = "Proyecto", color }) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <a className="slide-top" target="_blank" rel="noreferrer" href={linkMedia}>
      <div
        style={{ color: "white", background: theme.folderFront }}
        className="folder shadow-pop-tl typewriter"
      >
        <div
          style={{ background: theme.folderBack }}
          className="folder-tab"
        ></div>
        <span className="folder-label">{label}</span>
      </div>
    </a>
  );
};

export default Folder;
