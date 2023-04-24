import { getNewPublication } from "./publicartion/newPublication"
import { getPublications } from "./publicartion/publications"
import { getColorsLight } from "./themes/colors"
import { getThemeLight } from "./themes/theme"
import { getLogin } from "./user/login"
import { getSignUp } from "./user/signUp"
import { getUser } from "./user/user"

const initial_state = {
    login: getLogin(),
    user: getUser(),
    sign_up: getSignUp(),
    publications: getPublications(),
    new_publication: getNewPublication(),
    theme: getThemeLight(),
    colors: getColorsLight(),
}

export { initial_state }