import { useThemeT } from "../contexts/ThemeContext";

export const TutorialLinks = ({ item }) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <div>
      <div className="tutorial-links">
        <a
          style={{ color: theme.txt }}
          target="_blank"
          rel="noreferrer"
          href={item.liveDemo}
        >
          <span style={{ fontSize: "1rem" }}>🔗</span>Live demo here
        </a>
        <a
          style={{ color: theme.txt }}
          target="_blank"
          rel="noreferrer"
          href={item.gitRepo}
        >
          {" "}
          <span>
            <img
              src="https://github.githubassets.com/assets/mona-loading-dark-7701a7b97370.gif"
              alt="Funny animation"
              width="25px"
            />
          </span>
          Git repo here
        </a>
      </div>
    </div>
  );
};

export default TutorialLinks;
