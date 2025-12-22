export const TutorialLinks = ({ item }) => {
  return (
    <div>
      <div className="tutorial-links">
        <a target="_blank" rel="noreferrer" href={item.liveDemo}>
          <span style={{ fontSize: "1rem" }}>🔗</span>Live demo here
        </a>
        <a target="_blank" rel="noreferrer" href={item.gitRepo}>
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
