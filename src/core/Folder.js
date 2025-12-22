import { useThemeT } from "../contexts/ThemeContext";

const Folder = ({ linkMedia, label = "Proyecto", color }) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <div
      className="slide-top"
      target="_blank"
      rel="noreferrer"
      href={linkMedia}
    >
      <div
        style={{ color: "white", background: theme.folderFront }}
        className="folder shadow-pop-tl typewriter"
      >
        <div
          style={{ background: theme.folderBack }}
          className="folder-tab"
        ></div>
        <span style={{ color: theme.txt }} className="folder-label">
          {label}
        </span>
      </div>
    </div>
  );
};

export default Folder;
