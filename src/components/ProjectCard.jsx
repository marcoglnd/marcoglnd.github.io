import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function ProjectCard({ name, img, date, summary, deploy, repo }) {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <h4>{date}</h4>
      <img src={img} alt={name} />
      <p>{summary}</p>
      <div className="project-links">
        <a href={deploy} target="_blank" rel="noreferrer">
          <BsLink45Deg />
        </a>
        <a href={repo} target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
