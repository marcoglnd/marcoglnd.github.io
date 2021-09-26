import React from "react";

function SkillsCard(props) {
  return (
    <li className="skills-card">
      {props.icon}
      {props.skill}
    </li>
  );
}

export default SkillsCard;
