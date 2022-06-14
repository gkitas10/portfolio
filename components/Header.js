import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
import { BurguerIcon, JgIcon } from './icons/icons';
import Navlinks from './Navlinks';
import NavlinksMobile from './NavlinksMobile';
import { useRouter } from 'next/router';

const Header = () => {
    const [ showmobile, setShowmobile ] = useState(false);
    const router = useRouter()
    const home = router.route === '/' ? true : false;
    
    return ( 
        <div className={ styles.main }>
            <div className={styles['logo-cont']}>
                <Link href='/'><a className={styles.anchor}>{<JgIcon home={home}/>}</a></Link> 
            </div>
            <div className={styles.burger_wrapper}>
                <div className={styles.burger_background + (showmobile ? (' ' + styles.burger_background_active) : '')}
                onClick={ () => setShowmobile(!showmobile) }
                >
                     <BurguerIcon/>
                </div>
            </div>
            <navbar className={styles.nav}>
                { showmobile ? <NavlinksMobile/> : <Navlinks/> }
            </navbar>
        </div>
     );
}
 
export default Header;