import styles from '../styles/Projects.module.css';
import Project from './Project';

const Projects = () => {
    return ( 
        <div>
            <h2 className={styles.title}>{'<Proyectos/>'}</h2>
            <div className={styles.container}>
                <Project
                src='/habitshome.png'
                />
                <Project
                src='/contadorapp.png'
                />
            </div>
        </div>
     );
}
 
export default Projects;
    