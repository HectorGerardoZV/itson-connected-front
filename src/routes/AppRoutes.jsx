import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    MainPage,
    MasterAuth,
    SelectionUser,
    SignUp,
    Login,
    HomeStudent,
    StudentMasterPage,
    VacanciesPage,
    VacancyPage,
    CompanyMasterPage,
    CompanyMyVacanciesPage,
    CompanyVacancyPage,
    CompanyAddVacancyPage,
    StudentProfilePage,
    CompanyProfilePage
} from "../pages";
import { provider } from "../context";
const {
    UserSelectionProvider,
    AuthenticationProvider,
    VacanciesProvider,
    MajorsProvider,
    ProfileProvider
} = provider;
const AppRoutes = () => {
    return (
        <Router>
            <UserSelectionProvider>
                <AuthenticationProvider>
                    <ProfileProvider>
                        <VacanciesProvider>
                            <MajorsProvider>
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
                                        <Route path="vacancies/:id" element={<VacancyPage />} />
                                        <Route path="myProfile" element={<StudentProfilePage />} />
                                    </Route>
                                </Routes>
                                <Routes>
                                    <Route path="/company" element={<CompanyMasterPage />}>
                                        <Route index element={<CompanyMyVacanciesPage />} />
                                        <Route path="myVacancies" element={<CompanyMyVacanciesPage />} />
                                        <Route path="myVacancies/:id" element={<CompanyVacancyPage />} />
                                        <Route path="myVacancies/add" element={<CompanyAddVacancyPage />} />
                                        <Route path="myProfile" element={<CompanyProfilePage />} />
                                    </Route>
                                </Routes>
                            </MajorsProvider>
                        </VacanciesProvider>
                    </ProfileProvider>
                </AuthenticationProvider>
            </UserSelectionProvider>
        </Router>
    );
};
export default AppRoutes;
