import { useState } from 'react';
import styles from '../styles/Slider.module.css';

const Slider = ({ project }) => {
    const { name, imgs } = project; 
    const [ index, setIndex ] = useState(0);

    return (
        <div className={styles.slideshow}>
            <div className={styles.slider}
            style={{ transform: `translate(${-index * 100}%)`}}
            >
                { imgs.map((imgname, idx) => (
                    <img src={name+ '/' + imgname} key={idx} className={styles.image}/>
                ))}
                
            </div>
            <div className={styles['dots-cont']}>
                { imgs.map((_, idx) => (
                    <div 
                    key={idx}
                    className={styles.dot + (index === idx ? ' ' + styles.active : '') }
                    onClick={() => setIndex(idx)}></div>
                ))}
                
            </div>
        </div>
        
    );
}
 
export default Slider;
