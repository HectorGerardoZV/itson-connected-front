import { Outlet } from "react-router-dom";
import { HeaderApp } from "../../../components/Index";


import style from "./StudentMasterPage.module.css";
const StudentMasterPage = () => {
    return (
        <section className={style.masterPage}>
            <HeaderApp />
            <div>
                <Outlet />
            </div>
        </section>
    )
}

export default StudentMasterPage