import { useEffect } from "react";
import { Outlet } from "react-router-dom";
//Hooks
import { useProfiles, useModal } from "../../../hooks";

//Components
import { HeaderAppAdmin, ModalProfile } from "../../../components";
//Style
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./CompanyMasterPage.module.css";
const CompanyMasterPage = () => {
    const { flowGetUserProfile } = useProfiles();
    const { isOpenModalProfile } = useModal();
    const loadPage = async () => {
        await flowGetUserProfile();
    }
    useEffect(() => {
        loadPage();
    }, []);
    return (
        <section className={style.masterPage}>
            <div className={style.masterPageSection}>
                <HeaderAppAdmin />
                <Outlet />
            </div>
            {
                isOpenModalProfile ? (<ModalProfile />) : null
            }
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    )
}

export default CompanyMasterPage