import { useThemeT } from "../contexts/ThemeContext";

export const CardDetailsAbout = ({ item }) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;

  return (
    <section className="section-detail-stack">
      <div>
        <h3 style={{ color: theme.txt }}>Tech stack</h3>
        <h4 style={{ color: theme.txt }} className="">
          {item.techStack}
        </h4>
        <ul>
          {item.features.map((feat) => (
            <li style={{ color: theme.txt }}>
              <span>－</span>
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CardDetailsAbout;
