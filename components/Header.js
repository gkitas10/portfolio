import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return ( 
        <div className={styles.header}>
            <navbar>
                <Link href='/about'><a className={styles.header__anchor}>Acerca de mi</a></Link>
                <Link href='/contact'><a className={styles.header__anchor}>Contacto</a></Link>
            </navbar>
        </div>
     );
}
 
export default Header;