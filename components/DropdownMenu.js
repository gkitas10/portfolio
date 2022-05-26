import styles from '../styles/DropdownMenu.module.css';
import Link from 'next/link';

const DropdownMenu = ({ projectsDB, setDropdown }) => {
    const handleMouseLeave = () => {
        setDropdown(false)
    }
    return (
        <div className={ styles.main } onMouseLeave={handleMouseLeave}>
            { projectsDB?.map((project, idx) => (
                <Link key={projectsDB[idx]._id} href={'/tutorials/' + project._id}><a  className={styles.link}>{ project.name }</a></Link>
            ))}
            
        </div>
    );
}
 
export default DropdownMenu;