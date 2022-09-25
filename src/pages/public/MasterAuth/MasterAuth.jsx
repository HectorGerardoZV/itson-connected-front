import { Outlet } from "react-router-dom";
import { Header } from "../../../components/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Style
import style from "./MasterAuth.module.css";
const MasterAuth = () => {
    return (
        <>
            <section className={`${style.container} ${style.page}`}>
                <Header />
                <Outlet />
            </section>
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
        </>
    );
};

export default MasterAuth;
