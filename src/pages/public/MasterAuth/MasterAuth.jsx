import { Outlet } from "react-router-dom";
import { Header } from "../../../components";
//Style
import style from "./MasterAuth.module.css";
const MasterAuth = () => {
    return (
        <>
            <section className="">
                <Header />
                <Outlet />
            </section>
        </>
    );
};

export default MasterAuth;
