import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState } from "react";
import Logo from "~/assets/logo.webp";
import Skills from "../Skills";
import Introduce from "../Introduce";
import Projects from "../Projetcs";
import Contacts from "../Contacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLightbulb,
  faTableList,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  const [isActive, setActive] = useState(1);

  const navList = [
    {
      id: 1,
      text: "Home",
      icon: faHome,
    },
    {
      id: 2,
      text: "Skills",
      icon: faLightbulb,
    },
    {
      id: 3,
      text: "Projects",
      icon: faTableList,
    },
    {
      id: 4,
      text: "Contact",
      icon: faAddressCard,
    },
  ];

  const handleClick = (id) => {
    setActive(id);
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header-title")}>
          <img alt="Logo" src={Logo} className={cx("logo")} />
        </div>
        <div className={cx("header-nav")}>
          <ul className={cx("nav-list")}>
            {navList.map((nav) => (
              <li
                key={nav.id}
                onClick={() => handleClick(nav.id)}
                className={cx("nav-item", isActive === nav.id ? "active" : "")}
              >
                {nav.text}
              </li>
            ))}
          </ul>
          <ul className={cx("ham-list")}>
            {navList.map((nav) => (
              <li
                key={nav.id}
                onClick={() => handleClick(nav.id)}
                className={cx(
                  "ham-item",
                  isActive === nav.id ? "activeIcon" : ""
                )}
              >
                <FontAwesomeIcon icon={nav.icon} className={cx("ham-icon")} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isActive === 1 && <Introduce />}
      {isActive === 2 && <Skills />}
      {isActive === 3 && <Projects />}
      {isActive === 4 && <Contacts />}
    </>
  );
}

export default Header;
