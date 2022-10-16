import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    MainPage,
    MasterAuth,
    SelectionUser,
    SignUp,
    Login,
    HomeStudent,
    StudentMasterPage,
    VacanciesPage
} from "../pages/Index";

import { provider } from "../context/Index";
const { UserSelectionProvider, AuthenticationProvider } = provider;

const AppRoutes = () => {
    return (
        <Router>
            <UserSelectionProvider>
                <AuthenticationProvider>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/auth" element={<MasterAuth />}>
                            <Route index element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route
                                path="selection"
                                element={<SelectionUser />}
                            />
                            <Route path="signup" element={<SignUp />} />
                        </Route>
                    </Routes>
                    <Routes>
                        <Route path="/student" element={<StudentMasterPage />} >
                            <Route index element={<HomeStudent />} />
                            <Route path="vacancies" element={<VacanciesPage />} />
                        </Route>
                    </Routes>
                </AuthenticationProvider>
            </UserSelectionProvider>
        </Router>
    );
};

export default AppRoutes;
