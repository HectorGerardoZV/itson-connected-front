import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    MainPage,
    MasterAuth,
    SelectionUser,
    SignUp,
    Login,
} from "../pages/Index";

import { provider } from "../context/Index";
const { UserSelectionProvider } = provider;

const AppRoutes = () => {
    return (
        <Router>
            <UserSelectionProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/auth" element={<MasterAuth />}>
                        <Route index element={<Login />} />
                        <Route path="login" element={<Login />} />
                        <Route path="selection" element={<SelectionUser />} />
                        <Route path="signup" element={<SignUp />} />
                    </Route>
                </Routes>
            </UserSelectionProvider>
        </Router>
    );
};

export default AppRoutes;
