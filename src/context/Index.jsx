import UserSelectionContext, {UserSelectionProvider} from "./UserSelectionContext";
import AuthenticationContext, {AuthenticationProvider} from "./AuthenticationContext";

const context={
    UserSelectionContext,
    AuthenticationContext
}
const provider={
    UserSelectionProvider,
    AuthenticationProvider
}

export {
    context,
    provider
}