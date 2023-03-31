import { getLogin } from "./login/login"

const initial_state = {
    login: getLogin()
}

export { initial_state }