import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
// ICON
import CSharp from "~/assets/csharp.png";
import HTML from "~/assets/html-5.png";
import CSS from "~/assets/css3.png";
import JS from "~/assets/js.png";
import ReactJS from "~/assets/atom.png";
import Github from "~/assets/github.png";
import SQL from "~/assets/sql-server.png";
import Unity from "~/assets/unity.png";
import SASS from "~/assets/sass.png";
import Playfab from "~/assets/playfab-mark.png";
import JQuery from "~/assets/jquery.png";
import Java from "~/assets/java.png";
//
const cx = classNames.bind(styles);

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: HTML,
  },
  {
    id: 2,
    name: "CSS",
    icon: CSS,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: JS,
  },
  {
    id: 4,
    name: "ReactJS",
    icon: ReactJS,
  },
  {
    id: 5,
    name: "Github",
    icon: Github,
  },
  {
    id: 6,
    name: "Sass",
    icon: SASS,
  },
  {
    id: 7,
    name: "SQL",
    icon: SQL,
  },
  {
    id: 8,
    name: "CSharp",
    icon: CSharp,
  },
  {
    id: 9,
    name: "Unity",
    icon: Unity,
  },
  {
    id: 10,
    name: "Playfab",
    icon: Playfab,
  },
  {
    id: 11,
    name: "JQuery",
    icon: JQuery,
  },
  {
    id: 12,
    name: "Java",
    icon: Java,
  },
];
function Skills() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("skill-header")}>
          <h2 className={cx("skill-header-title")}>WHAT I DO</h2>
          <p className={cx("skill-header-desc")}>
            I'm just graduated from FPTU with major is Software Engineering. And
            I'm waiting GPA from school. Below are the skills I have learned as
            well as experienced
          </p>
        </div>
        <div className={cx("skill-list")}>
          {skills.map((skill) => (
            <div id={skill.id} className={cx("skill-item")}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={cx("skill-item-img")}
              />
              <span className={cx("skill-item-name")}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
