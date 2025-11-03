import { IconArrowNarrowRight } from "@tabler/icons-react";
import { OptimizedImage } from "../hooks/useOptimizedImage";
import { useThemeT } from "../contexts/ThemeContext";
export const ArticleItemGrid = ({ item }) => {
  const { isDark, dark, light } = useThemeT();
  const theme = isDark ? dark : light;
  return (
    <div
      style={{ background: theme.ui, color: theme.txt }}
      className="full-article-container-grid"
    >
      <div className="date-article">
        <p style={{ fontSize: "1.4rem" }}>{item.dateMonth}</p>
        <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>
          {item.dateNumber > 10 ? item.dateNumber : `0${item.dateNumber}`}
        </p>
      </div>
      <div className="img-article-grid-mobile">
        <OptimizedImage
          placeholder="/public/lowQuality.jpeg"
          className="rounded-x1 shadow-md"
          skeletonClassName="rounded-x1"
          alt="img-article"
          src={item.articleImg}
        ></OptimizedImage>
      </div>
      <div style={{ width: "100%" }}>
        <div className="article-detailes">
          <h4 className="txt-h4-mobile">{item.title}</h4>
        </div>
        <p>{`${item.minutesRead} min read`}</p>

        <div className="brief-description">
          <p className="truncatedTxt">{item.content}</p>
        </div>
        <div className="enlace ">
          <p> View Details</p>
          <IconArrowNarrowRight stroke={"1px"} size={"18px"} />
        </div>
      </div>
    </div>
  );
};

export default ArticleItemGrid;
