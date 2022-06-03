import Link from 'next/link';
import styles from '../styles/Navlinks.module.css';

const Navlinks = (themeclass) => {
    return (
        <ul className={styles.main}>
            <Link href='/about-projects'><a className={styles.anchor + (themeclass === 'dark' ? (' ' + styles.anchor_dark) : '') }>Acerca de mis proyectos</a></Link> 
            <Link href='/aboutme'><a className={styles.anchor + (themeclass === 'dark' ? (' ' + styles.anchor_dark) : '') }>Acerca de mi</a></Link>
            <Link href='/contact'><a className={styles.anchor + (themeclass === 'dark' ? (' ' + styles.anchor_dark) : '') }>Contacto</a></Link>
        </ul>
    );
}
 
export default Navlinks;