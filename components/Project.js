import { useState } from 'react';
import styles from '../styles/Project.module.css';
import Modal from './Modal';

const Project = ({ src }) => {
    const [ showclass, setShowclass ] =useState(false);

    const handleMouseEnter = () => {
        setShowclass(true)
    }

    const handleMouseLeave = () => {
        setShowclass(false)
    }

    return ( 
        <div className={styles['project']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={src}/>
            <Modal
            showclass={showclass}
            />
        </div>
     );
}
 
export default Project;

