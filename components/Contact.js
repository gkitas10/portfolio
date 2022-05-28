import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import axiosClient from '../axios/axios';

const Contact = () => {
    const [ email, setEmail ] = useState({
        name:'',
        useremailaddress:'',
        message:''
    })

    const handleChange = e => {
        setEmail({
            ...email,
            [e.target.name]:e.target.value,
            [e.target.useremailaddress]:e.target.value,
            [e.target.message]:e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        await axiosClient.post('/api/contact', email);
    }

    return (
        <div className={styles.main}>
            <div className={styles.form_cont}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <div className={styles.label}>nombre</div>
                        <input type="text" name='name' value={email.name} className={styles.form_control} onChange={handleChange}/>
                    </div>
                    <div className={styles.form_group}>
                        <div className={styles.label}>Correo</div>
                        <input type="email" name='useremailaddress' value={email.useremailaddress} className={styles.form_control} onChange={handleChange}/>
                    </div>
                    <div className={styles.form_group}>
                        <label className={styles.label}>Mensaje</label>
                        <textarea className={styles.textarea} name='message' value={email.message} onChange={handleChange}/>
                    </div>
                    <div className={styles.form_group}>
                        <input type='submit' value='Enviar'/>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;