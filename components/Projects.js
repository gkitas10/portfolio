import styles from '../styles/Projects.module.css';
import Project from './Project';

const Projects = ({ projectsDB }) => {
    return ( 
        <div className={styles.main}>
            <h2 className={styles.title}>{'<Proyectos/>'}</h2>
            <div className={styles.container}>
                { projectsDB.map((project) => (
                    <Project
                    key={project._id}
                    src={project.imgsrc}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Projects;
    