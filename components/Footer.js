import { useState } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { LinkedIn } from "./icons/icons";
import DropdownMenu from "./DropdownMenu";
import { useMediaQuery } from "react-responsive";

const Footer = ({ projectsDB }) => {
  const [ dropdown, setDropdown] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  })

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleClick = () => {
    setDropdown(!dropdown);
  }

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
          onClick={ !isDesktop ? handleClick : null }
          onMouseEnter={isDesktop ? handleMouseEnter : null }
        >
          Tutoriales
          <img src="dropdownarrow.png" className={styles.arrow} />
          { dropdown && (<DropdownMenu projectsDB={projectsDB} setDropdown={setDropdown} />)
           }
          
        </div>
      </div>
      <div className={styles.logos_cont}>
        <div className={styles.jglogo_cont}>
          <img src="jggris.svg" />
        </div>
        <LinkedIn />
      </div>
      
    </footer>
  );
};

export default Footer;
