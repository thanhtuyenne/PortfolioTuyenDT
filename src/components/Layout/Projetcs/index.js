import classNames from "classnames/bind";
import styles from "./Project.module.scss";

// ICON
import CSharp from "~/assets/csharp.png";
import ReactJS from "~/assets/atom.png";
import Unity from "~/assets/unity.png";
import Java from "~/assets/java.png";
//
const cx = classNames.bind(styles);

function Projects() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("project-header")}>
          <h2 className={cx("project-title")}>MY PROJECTS</h2>
        </div>
        <div className={cx("project-list")}>
          <Project
            logo={CSharp}
            title="DContact and DCard"
            desc="This project will allow user can create their own pages where
            contains their contact such as social media or personal contact"
            href="https://github.com/DTeam-2019-2023/Dteam_Razor_Dcontact"
          />
          <Project
            logo={CSharp}
            title="Jobee"
            desc="Jobee is where you can create your own CV and you can share to the recruitment with the
            basic format"
            href="https://github.com/DTeam-2019-2023/Jobee"
          />
          <Project
            logo={Java}
            title="Duck Education"
            desc="We provide for user all courses have been verified and that can help
            user can access the courses in here"
            href="https://github.com/DTeam-2019-2023/DuckEducation"
          />
          <Project
            logo={Unity}
            title="Master Mouse"
            desc="The game will challenges player with their mouse skills. Player must be
            play play through all levels with different challenges "
            href="https://m.youtube.com/watch?v=YbYCg-_5Xro"
          />
          <Project
            logo={Unity}
            title="Online 3D Card Game"
            desc="Player can play online with everyone or their friends. The type game is TCG and
            player need combined all cards together to build a deck"
            href="https://www.youtube.com/watch?v=BLpK67g4nQo&ab_channel=LuylDaQuach"
          />
          <Project
            logo={ReactJS}
            title="Vans Old Skool"
            desc="This is a website I cloning to practice my ReactJS skill"
            href="https://thanhtuyenne.github.io/Vans/"
          />
        </div>
      </div>
    </>
  );
}

const Project = (props) => {
  return (
    <div className={cx("project-item")}>
      <div className={cx("item-header")}>
        <div className={cx("item-logo")}>
          <img
            alt="logo project"
            className={cx("item-logo-img")}
            src={props.logo}
          />
        </div>
      </div>
      <div className={cx("item-content")}>
        <p className={cx("item-title")}>{props.title}</p>
        <p className={cx("item-desc")}>{props.desc}</p>
        <div className={cx("item-src")}>
          <a
            href={props.href}
            className={cx("item-link")}
            target="_blank"
            rel="noreferrer"
          >
            View source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
