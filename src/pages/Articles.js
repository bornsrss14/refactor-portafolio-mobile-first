import { IconLayoutGrid, IconList } from "@tabler/icons-react";
import ArticleItemList from "../components/ArticleItemList";
import { allMainArticles } from "../utils/AllArticles";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleItemGrid from "../components/ArticleItemGrid";
import SecondFooter from "../components/SecondFooter";
import { useThemeT } from "../contexts/ThemeContext";

export const Articles = () => {
  const [articles] = useState(allMainArticles);
  const [view, setView] = useState("list");
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <div>
      <div
        style={{ color: theme.txt }}
        className="hero-articles txt-normal-mobile extra-margin"
      >
        {" "}
        This is where i share my latest articles. For me, writing is a great way
        to strengthen the knowledge i gain while coding ✨
      </div>
      <section>
        <div className="container-grid-view">
          <h2 style={{ color: theme.txt }} className="txt-h2-mobile">
            Upcoming articles
          </h2>
          <div className="flex-row">
            <div onClick={() => setView("list")} className="icono-view">
              <IconList className="icons-mobile-grid" />
            </div>
            <div onClick={() => setView("grid")} className="icono-view">
              <IconLayoutGrid className="icons-mobile-grid" />
            </div>
          </div>
        </div>
      </section>
      <div className={view === "grid" ? "view-grid" : ""}>
        {articles.map((item) => {
          return (
            <Link to={`/detalle-articulo/${item.id}`} key={item.id}>
              {view === "list" ? (
                <ArticleItemList item={item} />
              ) : (
                <ArticleItemGrid item={item} />
              )}
            </Link>
          );
        })}
      </div>
      <SecondFooter></SecondFooter>
    </div>
  );
};

export default Articles;
