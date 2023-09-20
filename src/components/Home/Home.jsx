import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <p>this is home page</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;