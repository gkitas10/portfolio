import styles from '../styles/DropdownMenu.module.css';
import Link from 'next/link';

const DropdownMenu = ({ projectsDB, setDropdown }) => {
    const handleMouseLeave = () => {
        setDropdown(false)
    }
    return (
        <div className={ styles.main } onMouseLeave={handleMouseLeave}>
            { projectsDB?.map((project, idx) => (
                // <Link key={projectsDB[idx]._id} href={'/tutorials/' + project._id}><a  className={styles.link}>{ project.name }</a></Link>
                <a key={projectsDB[idx]._id} className={styles.link} href={project.url + 'tutorial'} target="_blank" rel="noopener noreferrer">{ project.name }</a>
            ))}
            
        </div>
    );
}
 
export default DropdownMenu;