import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    MainPage,
    MasterAuth,
    SelectionUser,
    SignUp,
    Login,
} from "../pages/Index";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/auth" element={<MasterAuth />}>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="selection" element={<SelectionUser />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
