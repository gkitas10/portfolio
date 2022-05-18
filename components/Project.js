import { useState } from 'react';
import styles from '../styles/Project.module.css';
import ModalStyles from '../styles/Modal.module.css';
import Modal from './Modal';
import { AngularIcon, Ghicon, NodejsIcon, ReactIcon, MongodbIcon } from './icons/icons';
import { iconSwitch } from '../helpers/helpers.js';

const Project = ({ src, url, repo, stack }) => {
    const [ showclass, setShowclass ] =useState(false);
    const [ showlinks, setShowlinks ] = useState(false);

    const handleMouseEnter = () => {
        setShowclass(true)
    }

    const handleMouseLeave = () => {
        setShowclass(false)
    }

    const handleIconMouseEnter = () => {
        setShowlinks(true)
    }

    return ( 
        <div className={styles.main}>
            <div className={styles['project']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={src}/>
                <Modal>
                    <div className={showclass ? ModalStyles.main : ModalStyles['main-hide'] }></div>
                    <a className={showclass ? ModalStyles.btn : ModalStyles['main-hide']} href={url} target="_blank">Visita el sitio</a>
                </Modal>
            </div>
            <div className={styles.info}>
                <div className={styles['repo-cont']}>
                    <div className={styles['repo-row']}>
                        <Ghicon onMouseEnter={handleMouseEnter}/>
                        { showlinks && (<div className={styles['links-cont']}>
                            <a href={repo}>Frontend</a>
                            <a href={repo}>Backend</a>
                        </div>)
                        }
                    </div>
                </div>
                <div className="stack-cont">
                    { stack.map((tech, idx, arr) => {
                        
                        return iconSwitch(tech, idx)
                    })}
                </div>
            </div>
        </div>
        
     );
}
 
export default Project;

