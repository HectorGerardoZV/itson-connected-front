import { Outlet } from "react-router-dom";

const MasterAuth = () => {
    return (
        <>
            <h1>Auth Master</h1>
            <Outlet />
        </>
    );
};

export default MasterAuth;
