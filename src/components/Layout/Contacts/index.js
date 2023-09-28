import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    text: "Email",
    desc: "thanhtuyendanh17@gmail.com",
    primary: "#2ecc71",
  },
  {
    id: 2,
    icon: faPhone,
    text: "Phone",
    desc: "+84 917 686 993",
    primary: "#3498db",
  },
  {
    id: 3,
    icon: faLocation,
    text: "Address",
    desc: "District 3, HCMC",
    primary: "#f1c40f",
  },
];
const medias = [
  {
    id: 1,
    icon: faFacebook,
    primary: "#2980b9",
    url: "https://www.facebook.com/tuyen.danh.5249/",
  },
  {
    id: 2,
    icon: faLinkedin,
    primary: "#1e3050",
    url: "https://www.linkedin.com/in/thanhtuyendanh/",
  },
];

const openLink = (url) => {
  window.open(url, "_blank", "noreferrer");
};
function Contacts() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("contact-header")}>
          <h2 className={cx("contact-header-title")}>GET IN TOUCH</h2>
          <p className={cx("contact-header-desc")}>
            You can reach me through all the links provided below
          </p>
        </div>
        <div className={cx("contact-list")}>
          {socials.map((social) => (
            <div className={cx("contact-item")} id={social.id}>
              <div
                className={cx("contact-icon")}
                style={{ backgroundColor: `${social.primary}` }}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className={cx("contact-icon-logo")}
                />
              </div>
              <p className={cx("contact-title")}>{social.text}</p>
              <p className={cx("contact-desc")}>{social.desc}</p>
            </div>
          ))}
        </div>
        <div className={cx("social-list")}>
          {medias.map((media) => (
            <div
              className={cx("social-item")}
              id={media.id}
              onClick={() => openLink(media.url)}
            >
              <div className={cx("social-icon")}>
                <FontAwesomeIcon icon={media.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Contacts;
