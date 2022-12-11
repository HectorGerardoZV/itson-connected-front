import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HeaderApp } from "../../../components/Index";
import {useProfiles} from "../../../hooks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./StudentMasterPage.module.css";
const StudentMasterPage = () => {
    const {flowGetUserProfile} = useProfiles();

    useEffect(()=>{
        flowGetUserProfile();
    },[]);

    return (
        <section className={style.masterPage}>
            <HeaderApp />
            <div>
                <Outlet />
            </div>
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

export default StudentMasterPage;