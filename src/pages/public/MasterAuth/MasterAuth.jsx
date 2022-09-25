import { Outlet } from "react-router-dom";
import { Header } from "../../../components/Index";
//Style
import style from "./MasterAuth.module.css";
const MasterAuth = () => {
    return (
        <>
            <section className={`${style.container} ${style.page}`}>
                <Header />
                <Outlet />
            </section>
        </>
    );
};

export default MasterAuth;
