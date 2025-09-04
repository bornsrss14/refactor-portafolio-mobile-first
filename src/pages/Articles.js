import { IconLayoutGrid, IconList } from "@tabler/icons-react";
import ArticleItemList from "../components/ArticleItemList";
import { allMainArticles } from "../utils/AllArticles";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleItemGrid from "../components/ArticleItemGrid";
import SecondFooter from "../components/SecondFooter";

export const Articles = () => {
  const [articles] = useState(allMainArticles);
  const [view, setView] = useState("list");
  return (
    <div>
      <div className="hero-articles txt-normal-mobile">
        {" "}
        Este es un breve espacio donde podrás leer mis artículos más recientes.
        Creo que una de las mejores formas de reforzar mi conocimiento es
        escribir sobre lo que voy entendiendo después de la práctica ✨
      </div>
      <section>
        <div className="container-grid-view">
          <h2 className="txt-h2-mobile">Upcoming articles</h2>
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
