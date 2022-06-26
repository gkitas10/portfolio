import styles from '../styles/DropdownMenu.module.css';

const DropdownMenu = ({ projectsDB, setDropdown }) => {
    const handleMouseLeave = () => {
        setDropdown(false)
    }
    return (
        <div className={ styles.main } onMouseLeave={handleMouseLeave}>
            { projectsDB?.map((project, idx) => (
                <a key={projectsDB[idx]._id} className={styles.link} href={project.url + 'tutorial'} target="_blank" rel="noopener noreferrer">{ project.name }</a>
            ))}
            
        </div>
    );
}
 
export default DropdownMenu;