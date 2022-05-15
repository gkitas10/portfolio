import styles from '../styles/Modal.module.css';

const Modal = ({ showclass }) => {
    return (
        <div className={showclass ? styles.main : styles['main-hide'] }>
            <button className={styles.btn}>Visita el sitio</button>
            
        </div>
    );
}
 
export default Modal;
 