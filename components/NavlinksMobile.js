import Link from 'next/link';
import styles from '../styles/NavlinksMobile.module.css';
import { useRouter } from 'next/router';
import home from '../lang/home';

const NavlinksMobile = () => {
    const { locale } = useRouter();
    const { header } = home[locale];
    const { aboutprojects, aboutme, contact } = header?.navlinks;

    return (
        <ul className={ styles.main }>
            <Link href='/about-projects' locale={locale}><a className={styles.anchor}>{aboutprojects}</a></Link> 
            <Link href='/aboutme' locale={locale}><a className={styles.anchor}>{aboutme}</a></Link>
            <Link href='/contact' locale={locale}><a className={styles.anchor}>{contact}</a></Link>
        </ul>
    );
}
 
export default NavlinksMobile;