import { IconArrowNarrowRight } from "@tabler/icons-react";
export const ArticleItemList = ({ item }) => {
  return (
    <div className="full-article-container">
      <div className="date-article">
        <p className="txt-month">{item.dateMonth}</p>
        <div>-</div>
        <p className="txt-date-no">
          {item.dateNumber > 10 ? item.dateNumber : `0${item.dateNumber}`}
        </p>
      </div>
      <div className="img-article-mobile img-article">
        <img
          alt="img-article"
          className="img-full-cover "
          src={item.articleImg}
        />
      </div>
      <div className="">
        <div className="article-detailes">
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
          <p>{`${item.minutesRead} min read`}</p>
          <div className="flex-row">
            {item.categories.map((cat, key) => {
              return <p key={`${item}key`}>{cat}</p>;
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
