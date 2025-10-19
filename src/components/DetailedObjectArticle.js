import { OptimizedImage } from "../hooks/useOptimizedImage";
import SecondFooter from "./SecondFooter";

export const DetailedObjectArticle = ({ objectItem }) => {
  return (
    <>
      <article className="article-margin">
        <h1>{objectItem.title}</h1>
        <div className="hero-article">
          <p>
            <em>{objectItem.content}</em>
          </p>
          <div className="img-mobile-entire">
            <OptimizedImage
              placeholder="/public/lowQuality.jpeg"
              className="rounded-x1 shadow-md img-full-cover"
              skeletonClassName="rounded-x1"
              alt="img-article"
              src={objectItem.banner}
            ></OptimizedImage>

            <p className="typeWork-txt">{objectItem.balazoArticleImg}</p>
          </div>
        </div>
        {objectItem.paragrapsArticle.map((section, index) => {
          return (
            <section key={index} style={{ margin: "1rem 0" }}>
              {section.subtitleParagraph && (
                <h3 style={{ marginBottom: "0.5rem" }}>
                  {section.subtitleParagraph}
                </h3>
              )}
              {section.paragraph && <p>{section.paragraph}</p>}

              {section.lista && section.lista.length > 0 && (
                <ul>
                  {section.lista.map((objetoLista, index) => {
                    return (
                      <li key={index}>
                        {" "}
                        •{objetoLista.txt_item}
                        <div style={{ padding: "0 1rem" }}>
                          {objetoLista.subList
                            ? objetoLista.subList.map((itemSub, idx) => {
                                return <p key={idx}> ○ {itemSub}</p>;
                              })
                            : ""}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className={`${section.codeSnippet.alignDiv}`}>
                <div className="firstSnippet">
                  {section?.codeSnippet?.codeBreakdown?.length > 0
                    ? section.codeSnippet.codeBreakdown.map(
                        (itemBreakdown, key) => (
                          <p key={key}>{`• ${itemBreakdown}`}</p>
                        )
                      )
                    : ""}
                </div>
                <div className="secondSnippet">
                  {section?.codeSnippet && (
                    <h3>{section.codeSnippet.codeTitleImg}</h3>
                  )}
                  {section.codeSnippet?.codePreview && (
                    <div className="img-container-hundred-porcent">
                      {/*  <img
                        src={section.codeSnippet.codePreview}
                        className="img-full-cover"
                        alt="img-code-preview"
                      /> */}
                      <OptimizedImage
                        placeholder="/lowQuality.jpeg"
                        className="rounded shadow"
                        skeletonClassName="rounded"
                        alt="Imagen del artículo"
                        src={section.codeSnippet.codePreview}
                      ></OptimizedImage>
                      <p>{section.codeSnippet.balazo}</p>
                    </div>
                  )}
                </div>
              </div>

              {section.code && <p>{section.code}</p>}
            </section>
          );
        })}

        <section style={{ marginBottom: "6rem" }}>
          <h3>References</h3>
          <p>
            React. (2025). <i>React documentation</i>. https://react.dev
          </p>
          <p>
            GitHub. (2025). <i>GitHub Docs</i>. https://docs.github.com
          </p>
        </section>
      </article>
      <SecondFooter></SecondFooter>
    </>
  );
};

export default DetailedObjectArticle;
