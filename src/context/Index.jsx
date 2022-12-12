import UserSelectionContext, { UserSelectionProvider } from "./UserSelectionContext";
import AuthenticationContext, { AuthenticationProvider } from "./AuthenticationContext";
import VacanciesContext, { VacanciesProvider } from "./VacanciesContext";
import MajorsContext, { MajorsProvider } from "./MajorsContext";
import ProfileContext, { ProfileProvider } from "./ProfileContext";
import UserVacancyContext, {UserVacancyProfile} from "./UserVacancyContext";
import ModalContext, {ModalProvider} from "./ModalContext";

const context = {
    UserSelectionContext,
    AuthenticationContext,
    VacanciesContext,
    MajorsContext,
    ProfileContext,
    UserVacancyContext,
    ModalContext
}
const provider = {
    UserSelectionProvider,
    AuthenticationProvider,
    VacanciesProvider,
    MajorsProvider,
    ProfileProvider,
    UserVacancyProfile,
    ModalProvider
}

export {
    context,
    provider
}