import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;