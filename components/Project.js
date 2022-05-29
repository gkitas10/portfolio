import { useState } from 'react';
import styles from '../styles/Project.module.css';
import ModalStyles from '../styles/Modal.module.css';
import Modal from './Modal';
import { AngularIcon, Ghicon, NodejsIcon, ReactIcon, MongodbIcon } from './icons/icons';
import { iconSwitch } from '../helpers/helpers.js';

const Project = ({ src, url, repo, stack }) => {
    const [ showclass, setShowclass ] =useState(false);
    const [ animatelinks, setAnimatelinks ] = useState(false);

    const handleMouseEnter = () => {
        setShowclass(true)
    }

    const handleMouseLeave = () => {
        setShowclass(false)
    }

    return ( 
        <div className={styles.main}>
            <div className={styles['project']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={src}/>
                <Modal>
                    <div className={showclass ? ModalStyles.main : ModalStyles['main-hide'] }></div>
                    <a className={showclass ? ModalStyles.btn : ModalStyles['main-hide']} href={url} target="_blank" rel="noopener noreferrer">Visita el sitio</a>
                </Modal>
            </div>
            <div className={styles.info}>
                <div className={styles['stack-cont']}>
                    { stack.map((tech, idx, arr) => {
                        
                        return iconSwitch(tech, idx)
                    })}
                </div>
                <div className={styles['repo-cont']}>
                    <div className={styles['repo-row']}>
                        <Ghicon setAnimatelinks={setAnimatelinks} hover/>
                        <div className={styles['links-relative-cont']}>
                            <div className={animatelinks ? styles['links-cont'] : styles['links-cont-hidden'] }>
                                <a className={styles.link + ' ' + styles.front} href={repo?.frontend} target="_blank" rel="noopener noreferrer">Frontend</a>
                                <a className={styles.link + ' ' + styles.back} href={repo?.backend} target="_blank" rel="noopener noreferrer">Backend</a>
                            </div>
                        </div>
                        


                    </div>
                </div>
            </div>
        </div> 
     );
}
 
export default Project;

