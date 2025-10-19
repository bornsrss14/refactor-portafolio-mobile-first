import { IconArrowNarrowRight } from "@tabler/icons-react";
import { OptimizedImage } from "../hooks/useOptimizedImage";
export const ArticleItemList = ({ item }) => {
  console.log(item, "Este es mi item y la imagen es", item.articleImg);
  return (
    <div className="full-article-container">
      <div className="date-article">
        <p className="txt-month">{item.dateMonth}</p>
        <div>-</div>
        <p className="txt-date-no">
          {item.dateNumber > 10 ? item.dateNumber : `0${item.dateNumber}`}
        </p>
      </div>
      <div className=" img-article">
        <OptimizedImage
          placeholder="/lowQuality.jpeg"
          className="rounded shadow"
          skeletonClassName="rounded"
          alt="Imagen del artículo"
          src={item.articleImg}
        ></OptimizedImage>
      </div>
      <div style={{ width: "100%" }} className="">
        <div className="article-detailes">
          <h3 style={{ color: "#3c3cbf" }} className="txt-h3-mobile">
            {item.title}
          </h3>
          <p>{item.subtitle}</p>
          <p>{`${item.minutesRead} min read`}</p>
          <div style={{ color: "#3c3cbf" }} className="flex-row">
            {item.categories.map((cat, key) => {
              return (
                <p className="hidden-mobile" key={`${item}key`}>
                  {cat}
                </p>
              );
            })}
          </div>
        </div>

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

export default ArticleItemList;
