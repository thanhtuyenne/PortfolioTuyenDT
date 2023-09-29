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
        </div>
        <div className={cx("right-container")}>
          <img alt="personal logo" className={cx("personal-logo")} src={Logo} />
        </div>
      </div>
    </>
  );
}

export default Introduce;
