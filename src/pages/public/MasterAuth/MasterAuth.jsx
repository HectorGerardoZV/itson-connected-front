import { Outlet } from "react-router-dom";
import { Header } from "../../../components";
//Style
import style from "./MasterAuth.module.css";
const MasterAuth = () => {
    return (
        <>
            <section className={style.container}>
                <Header />
                <Outlet />
            </section>
        </>
    );
};

export default MasterAuth;
