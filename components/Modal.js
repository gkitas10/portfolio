import styles from '../styles/Modal.module.css';

const Modal = ({ showclass }) => {
    return (
        <>
            <div className={showclass ? styles.main : styles['main-hide'] }></div>
            <a className={showclass ? styles.btn : styles['main-hide']}>Visita el sitio</a>
        </> 
    );
}
 
export default Modal;
 