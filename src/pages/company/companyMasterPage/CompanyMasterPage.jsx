import { Outlet } from "react-router-dom";
//Components
import { HeaderAppAdmin } from "../../../components";
//Style
import style from "./CompanyMasterPage.module.css";
const CompanyMasterPage = () => {
    return (
        <section className={style.masterPage}>
            <HeaderAppAdmin />
            <Outlet />
        </section>
    )
}

export default CompanyMasterPage