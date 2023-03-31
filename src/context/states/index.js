import { getLogin } from "./user/login"
import { getUser } from "./user/user"

const initial_state = {
    login: getLogin(),
    user: getUser(),
}

export { initial_state }