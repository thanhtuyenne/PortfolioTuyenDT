import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
import Logo from "~/assets/personal-orange.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Introduce() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("left-container")}>
          <h1>Hi,</h1>
          <h1>
            I'm <span className={cx("name-highlight")}>TuyenDT</span>
          </h1>
          <h3>Front-End Developer</h3>
          <div className={cx("about-me")}>
            <span>
              I'm graduated from FPTU with major is Software Engineering and my{" "}
              {""}
              <b>GPA is 7.88/10</b>. I have a <b>TOEIC</b> certificate with a
              score of <b>705</b> and I can communicate in English. I am also
              learning <b>Japanese</b> to enhance my career prospects.
            </span>
          </div>
          <button className={cx("btn-cv")}>
            <a
              href="https://drive.google.com/file/d/1spZCwZGtVvwoqI30k6S8YPoHb7g60y43/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              MY RESUME{" "}
              {/* <FontAwesomeIcon
                icon={faInfoCircle}
                className={cx("btn-info-icon")}
              /> */}
            </a>
          </button>
        </div>
        <div className={cx("right-container")}>
          <img alt="personal logo" className={cx("personal-logo")} src={Logo} />
        </div>
      </div>
    </>
  );
}

export default Introduce;
