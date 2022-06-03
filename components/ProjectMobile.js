import styles from '../styles/ProjectMobile.module.css';
import { iconSwitch } from '../helpers/helpers.js';
import { Ghicon } from './icons/icons';


const ProjectMobile = ({ src, url, repo, stack }) => {
    return (
        <div className={styles.main}>
            <div className={styles['project']}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={src} className={styles.project_img}/>
                </a>
            </div>
            <div className={styles.info}>
                <div className={styles['stack-cont']}>
                    { stack.map((tech, idx, arr) => {
                        
                        return iconSwitch(tech, idx)
                    })}
                </div>
                <div className={styles['repo-cont']}>
                    <div className={styles['repo-row']}>
                        <Ghicon small/>
                        <div className={styles['links_cont']}>
                            <div className={ styles['links_wrapper'] }>
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
 
export default ProjectMobile;