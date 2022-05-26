import { useState } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { LinkedIn } from "./icons/icons";
import DropdownMenu from "./DropdownMenu";

const Footer = ({ projectsDB }) => {
  const [ dropdown, setDropdown] = useState(false);
  const handleMouseEnter = () => {
    setDropdown(true);
  };

  return (
    <footer className={styles.main}>
      <div className={styles["links-cont"]}>
        <Link href="/about-portfolio">
          <a className={styles.link}>Acerca de este portafolio</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link}>Contacto</a>
        </Link>
        <div
          className={styles.link + " " + styles.tutorials}
          onMouseEnter={handleMouseEnter}
        >
          Tutoriales
          <img src="dropdownarrow.png" className={styles.img} />
          { dropdown && (<DropdownMenu projectsDB={projectsDB} setDropdown={setDropdown} />)
           }
          
        </div>
      </div>
      <div className={styles["social-cont"]}>
        <LinkedIn />
      </div>
      <div className={styles["logo-cont"]}>
        <img src="jggris.svg" />
      </div>
    </footer>
  );
};

export default Footer;
