import UserSelectionContext, { UserSelectionProvider } from "./UserSelectionContext";
import AuthenticationContext, { AuthenticationProvider } from "./AuthenticationContext";
import VacanciesContext, { VacanciesProvider } from "./VacanciesContext";
import MajorsContext, { MajorsProvider } from "./MajorsContext";
import ProfileContext, { ProfileProvider } from "./ProfileContext";
import UserVacancyContext, {UserVacancyProfile} from "./UserVacancyContext";

const context = {
    UserSelectionContext,
    AuthenticationContext,
    VacanciesContext,
    MajorsContext,
    ProfileContext,
    UserVacancyContext
}
const provider = {
    UserSelectionProvider,
    AuthenticationProvider,
    VacanciesProvider,
    MajorsProvider,
    ProfileProvider,
    UserVacancyProfile
}

export {
    context,
    provider
}