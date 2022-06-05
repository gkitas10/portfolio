import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ projectsDB, children }) => {
    return (
        <div>
            <Header/>
            { children }
            <Footer projectsDB={projectsDB}/>
        </div>
    );
}
 
export default Layout;