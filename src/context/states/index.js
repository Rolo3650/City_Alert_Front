import { getPublications } from "./publicartion/publications"
import { getLogin } from "./user/login"
import { getSignUp } from "./user/signUp"
import { getUser } from "./user/user"

const initial_state = {
    login: getLogin(),
    user: getUser(),
    sign_up: getSignUp(),
    publications: getPublications(),
}

export { initial_state }