import Link from 'next/link';
import styles from '../styles/Navlinks.module.css';
import { useRouter } from 'next/router';
import home from '../lang/home';

const Navlinks = () => {
    const { locale } = useRouter();
    const { header } = home[locale];
    const { aboutprojects, aboutme, contact } = header?.navlinks;
    return (
        <ul className={styles.main}>
            <Link href='/about-projects'><a className={styles.anchor}>{aboutprojects}</a></Link> 
            <Link href='/aboutme'><a className={styles.anchor}>{aboutme}</a></Link>
            <Link href='/contact'><a className={styles.anchor}>{contact}</a></Link>
        </ul>
    );
}
 
export default Navlinks;