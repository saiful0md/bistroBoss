import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";
import Navbar from "../Pages/Sheard/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login')
    return (
        <div>
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;