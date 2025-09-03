import { useParams } from "react-router-dom";

import { allMainArticles } from "../utils/AllArticles";
import DetailedObjectArticle from "../components/DetailedObjectArticle";
export const DetailedArticle = () => {
  const { id } = useParams();
  const article = allMainArticles.find((item) => item.id === parseInt(id));
  if (!article) {
    return <p>Article not found!</p>;
  }
  return (
    <div className="container-article">
      <DetailedObjectArticle objectItem={article} />
    </div>
  );
};

export default DetailedArticle;
