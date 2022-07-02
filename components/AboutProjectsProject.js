import Slider from './Slider';
import styles from '../styles/AboutProjects.module.css';

const AboutProjectsProject = ({ project, projectsDB, idx}) => {
    return (
      <div className={styles.project}>
        <div className={styles.info}>
          <h2>{project.name}</h2>
          <p className={styles.paragraph}>{project.description}</p>
        </div>
        <div className={styles["imgs-section"]}>
          <Slider project={projectsDB[idx]} />
        </div>
      </div>
    );
}
 
export default AboutProjectsProject;