import { useState } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useMediaQuery } from "react-responsive";
import { useRouter } from 'next/router';
import home from '../lang/home';

const Footer = ({ projectsDB }) => {
  const router = useRouter();
  const [ dropdown, setDropdown] = useState(false);

  const {locale} = useRouter();
    const {footer} = home[locale];
    const { aboutportfolio, contact, tutorials } = footer;

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  })

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleClick = () => {
    setDropdown(!dropdown);
  }

  const handleChange = e => {
    router.push(router.pathname, router.pathname, { locale: e.target.value })
  }

  return (
    <footer className={styles.main}>
      <div className={styles["links-cont"]}>
        <Link href="/about-portfolio">
          <a className={styles.link}>{aboutportfolio}</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link}>{contact}</a>
        </Link>
        <div
          className={styles.link + " " + styles.tutorials}
          onClick={ !isDesktop ? handleClick : null }
          onMouseEnter={isDesktop ? handleMouseEnter : null }
        >
          {tutorials}
          <img src="/dropdownarrow.png" className={styles.arrow} />
          { dropdown && (<DropdownMenu projectsDB={projectsDB} setDropdown={setDropdown} />)
           }
          
        </div>
        <select onChange={handleChange} defaultValue='es'>
          <option value='en'>English</option>
          <option value='es'>Español</option>
        </select>
      </div>
      <div className={styles.logos_cont}>
        <div className={styles.jglogo_cont}>
          <a href='https://www.linkedin.com/in/jorge-antonio-g-cant%C3%B3n-iuit-6366b2241/' target="_blank" rel="noopener noreferrer">
            <img src="/linkedin3.png" />
          </a>
          
        </div>
        <div className={styles.jglogo_cont}>
          <img src="/jggris.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
