import UserSelectionContext, { UserSelectionProvider } from "./UserSelectionContext";
import AuthenticationContext, { AuthenticationProvider } from "./AuthenticationContext";
import VacanciesContext, { VacanciesProvider } from "./VacanciesContext";
import MajorsContext, { MajorsProvider } from "./MajorsContext";
import ProfileContext, { ProfileProvider } from "./ProfileContext";

const context = {
    UserSelectionContext,
    AuthenticationContext,
    VacanciesContext,
    MajorsContext,
    ProfileContext
}
const provider = {
    UserSelectionProvider,
    AuthenticationProvider,
    VacanciesProvider,
    MajorsProvider,
    ProfileProvider
}

export {
    context,
    provider
}