import styles from '../styles/Slogan.module.css';
import { useRouter } from 'next/router';
import home from '../lang/home';

const Slogan = () => {
    const {locale} = useRouter();
    const {slogan} = home[locale];
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                {slogan.content}
            </div>
        </div>
    );
}
 
export default Slogan;