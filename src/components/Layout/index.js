import Header from "./Header";
import Introduce from "./Introduce";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
import Skills from "./Skills";

const cx = classNames.bind(styles);

function Layout() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Header />
        {/* <Introduce />
        <Skills /> */}
      </div>
    </>
  );
}

export default Layout;
