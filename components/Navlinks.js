import Link from 'next/link';
import styles from '../styles/Navlinks.module.css';

const Navlinks = () => {
    return (
        <ul className={styles.main}>
            <Link href='/about-projects'><a className={styles.anchor}>Acerca de mis proyectos</a></Link> 
            <Link href='/aboutme'><a className={styles.anchor}>Acerca de mi</a></Link>
            <Link href='/contact'><a className={styles.anchor}>Contacto</a></Link>
        </ul>
    );
}
 
export default Navlinks;