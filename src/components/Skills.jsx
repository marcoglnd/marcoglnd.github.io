import React from "react";
import "../styles/Skills.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { RiEmpathizeFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { VscCompareChanges } from "react-icons/vsc";
import { BiBookReader } from "react-icons/bi";
import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <section id="skills">
      <h2>habilidades</h2>
      <div class="inner-skills">
        <div class="skills-div">
          <h3>hard skills</h3>
          <ul class="skills-list">
            <SkillsCard skill={"HTML"} icon={<AiFillHtml5 />} />
            <SkillsCard skill={"CSS"} icon={<DiCss3 />} />
            <SkillsCard skill={"JavaScript"} icon={<IoLogoJavascript />} />
            <SkillsCard skill={"React"} icon={<FaReact />} />
            <SkillsCard skill={"Redux"} icon={<SiRedux />} />
            <SkillsCard skill={"Sass"} icon={<FaSass />} />
            <SkillsCard skill={"Git"} icon={<DiGit />} />
            <SkillsCard skill={"SQL"} icon={<GrMysql />} />
            <SkillsCard skill={"MongoDB"} icon={<DiMongodb />} />
          </ul>
        </div>
        <div class="skills-div">
          <h3>soft skills</h3>
          <ul class="skills-list">
            <SkillsCard skill={"Empatia"} icon={<RiEmpathizeFill />} />
            <SkillsCard skill={"Colaboração"} icon={<GiTeamIdea />} />
            <SkillsCard skill={"Comunicação"} icon={<RiKakaoTalkFill />} />
            <SkillsCard skill={"Comprometimento"} icon={<MdWork />} />
            <SkillsCard skill={"Adaptabilidade"} icon={<VscCompareChanges />} />
            <SkillsCard
              skill={"Aprendizagem contínua"}
              icon={<BiBookReader />}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
