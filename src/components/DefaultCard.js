import React from "react";

export const DefaultCard = () => {
  return (
    <div className="projects-intro">
      <div className="projects-intro-text">
        <div className="postItItem">
          <img
            className="img-full-cover"
            alt="postit"
            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/portfolio%2FwhitePaperRemove.png?alt=media&token=48457f4f-4739-4248-9724-7d5c0b219cc1"
          ></img>
        </div>
        <p>
          Welcome to my main highlighted project section. Here, you can explore
          web apps I've developed using <strong>React</strong>,and{" "}
          <strong>JavaScript</strong>, with a main focus on{" "}
          <strong>responsive design</strong> and <strong>UX/UI</strong>.
        </p>
        <p>
          <strong>1.</strong> Each project includes an animated preview and a
          summary, allowing you to explore its functionality and understand the
          problem I tackled using these technologies
        </p>
        <p>
          <strong>2.</strong> Browse the colored tabs to discover each project
          in detail
        </p>
        <p>
          {" "}
          <strong>3.</strong> Check out the live demo to experience the project
          firsthand.
        </p>
        <p>
          {" "}
          <strong>4.</strong> Acces the Github repo to see the code behind each
          app.
        </p>
      </div>
    </div>
  );
};

export default DefaultCard;
