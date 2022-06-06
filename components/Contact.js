import { useState } from "react";
import styles from "../styles/Contact.module.css";
import axiosClient from "../axios/axios";
import Layout from "./Layout";

const Contact = () => {
  const [email, setEmail] = useState({
    name: "",
    useremailaddress: "",
    message: "",
  });

  const handleChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
      [e.target.useremailaddress]: e.target.value,
      [e.target.message]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axiosClient.post("/api/contact", email);
  };

  return (
      <div className={styles.main}>
        <div className={styles.form_cont}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <div className={styles.label}>Nombre</div>
              <div className={styles.input_wrapper}>
                <input
                    type="text"
                    name="name"
                    value={email.name}
                    className={styles.form_control}
                    onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.form_group}>
              <div className={styles.label}>Correo</div>
              <div className={styles.input_wrapper}>
                <input
                    type="email"
                    name="useremailaddress"
                    value={email.useremailaddress}
                    className={styles.form_control}
                    onChange={handleChange}
                />
              </div>
              
            </div>
            <div className={styles.form_group + ' ' + styles.msg_form_group }>
              <label className={styles.label}>Mensaje</label>
              <div className={styles.input_wrapper}>
                <textarea
                    className={styles.textarea}
                    name="message"
                    value={email.message}
                    onChange={handleChange}
                />
            </div>
            </div>
            <div className={styles.form_group+ ' ' + styles.btn_wrapper}>
              <input type="submit" value="Enviar" className={styles.input_submit}/>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Contact;
