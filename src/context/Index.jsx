import UserSelectionContext, { UserSelectionProvider } from "./UserSelectionContext";
import AuthenticationContext, { AuthenticationProvider } from "./AuthenticationContext";
import VacanciesContext, { VacanciesProvider } from "./VacanciesContext";
import MajorsContext, { MajorsProvider } from "./MajorsContext";

const context = {
    UserSelectionContext,
    AuthenticationContext,
    VacanciesContext,
    MajorsContext,
}
const provider = {
    UserSelectionProvider,
    AuthenticationProvider,
    VacanciesProvider,
    MajorsProvider,
}

export {
    context,
    provider
}