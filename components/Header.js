import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { Jglogo } from './icons/icons';

const Header = () => {
    return ( 
        <div className={styles.header}>
            <div className={styles['logo-cont']}>
                <Link href='/'><div className={styles['link-wrapper']}><a></a></div></Link>
            </div>
            <div className={styles['nav-cont']}>
                <navbar>
                    <Link href='/about-projects'><a className={styles.header__anchor}>Acerca de mis proyectos</a></Link> 
                    <Link href='/about'><a className={styles.header__anchor}>Acerca de mi</a></Link>
                    <Link href='/contact'><a className={styles.header__anchor}>Contacto</a></Link>
                </navbar>
            </div>
            
        </div>
     );
}
 
export default Header;