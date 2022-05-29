import styles from '../styles/AboutMe.module.css';
import { AngularIcon, Auth0Icon, ExpressIcon, FirebaseIcon, Ghicon, Jsicon, MongodbIcon, NodejsIcon, ReactIcon, NextjsIcon } from './icons/icons';

const AboutMe = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text_cont}>
                <p>{`Soy un desarrollador web full-stack con 3 años de experiencia estudiando y creando aplicaciones. Mi misión es ofrecer soluciones creativas a los problemas y ayudar a
                    realizar proyectos ambiciosos que busquen tener un beneficio para los demás.`}</p>
                <p>{`Las principales tecnologías que he utilizado en mis proyectos son: React para crear la interfaz de usuario, Nodejs para escribir código que corre del lado del servidor
                    y MongoDB como base de datos. También he tenido la oportunidad de aprender Angular, un framework para desarrollo web. En lo que se refiere a autenticación, se configurar
                    el servicio de Firebase así como el de Auth0. También cuento con los conocimientos para desplegar aplicaciones en servicios de la nube como: Firebase de Google o Heroku
                    entre otros.`}</p>
                <p>{`Por otra parte he estudiado Inglés por mas de 6 años, tengo un nivel avanzado en conversación y consulto mucho material escrito durante el desarrollo; foros, tutoriales
                    , videos y documentación de las tecnologías que utilizo.`}</p>                    
            </div>
            <div className={styles.icons_section}>
                <div className={styles.icons_cont}>
                    <ReactIcon/>
                    <AngularIcon/>
                    <NodejsIcon/>
                    <ExpressIcon/>
                    <MongodbIcon/>
                    <FirebaseIcon/>
                    <Ghicon/>
                    <Auth0Icon/>
                    <Jsicon/>
                    <NextjsIcon/>
                </div>
            </div>
        </div>
        
    );
}
 
export default AboutMe;