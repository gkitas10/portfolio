import { Fragment } from "react";
import styles from "../styles/Projects.module.css";
import Project from "./Project";
import ProjectMobile from "./ProjectMobile";

const Projects = ({ projectsDB }) => {

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{"<Proyectos/>"}</h2>
      <div className={styles.container}>
        {projectsDB.map((project) => (
          < Fragment key={project._id}>
            <Project
              src={project.imgsrc}
              url={project.url}
              repo={project.repo}
              stack={project.stack}
            />
            <ProjectMobile
              src={project.imgsrc}
              url={project.url}
              repo={project.repo}
              stack={project.stack}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
