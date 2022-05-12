import styles from '../styles/Project.module.css';

const Project = ({ src }) => {
    return ( 
        <div className={styles['project']}>
            <img src={src}/>
        </div>
     );
}
 
export default Project;

