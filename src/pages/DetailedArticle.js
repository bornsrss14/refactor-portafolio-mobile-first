import { useParams } from "react-router-dom";

import { allMainArticles } from "../utils/AllArticles";
import DetailedObjectArticle from "../components/DetailedObjectArticle";
import { useThemeT } from "../contexts/ThemeContext";
export const DetailedArticle = () => {
  const { id } = useParams();
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  const article = allMainArticles.find((item) => item.id === parseInt(id));
  if (!article) {
    return <p>Article not found!</p>;
  }

  return (
    <div
      style={{ background: theme.bgExperience, color: theme.txt }}
      className="container-article"
    >
      <DetailedObjectArticle objectItem={article} />
    </div>
  );
};

export default DetailedArticle;
