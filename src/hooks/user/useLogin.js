import React, { useContext } from 'react'
import { actionTypes } from '../../context/ActionTypes'
import { Context } from '../../context/useReducer'
import { LOGIN } from '../../api/user/user'
import { useApi } from '../api/useApi'
import { useCookies } from 'react-cookie'
import { useUser } from './useUser'

const useLogin = () => {

    const [state, dispatch] = useContext(Context)
    const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);
    const { setUser } = useUser()
    const apiLogin = useApi(LOGIN);

    const setLogin = (payload) => {
        dispatch({ type: actionTypes.SET_LOGIN, payload: { ...state.login, ...payload } })
    }

    const setLoginInitialState = () => {
        dispatch({ type: actionTypes.SET_LOGIN_INITIAL_STATE, payload: {} })
    }

    const setEmail = (payload) => {
        dispatch({ type: actionTypes.SET_LOGIN, payload: { ...state.login, email: { ...state.login.email, ...payload } } })
    }

    const setPassword = (payload) => {
        dispatch({ type: actionTypes.SET_LOGIN, payload: { ...state.login, password: { ...state.login.password, ...payload } } })
    }

    const signIn = async () => {
        const data = {
            email: state.login.email.value,
            password: state.login.password.value,
        }
        const resLogin = await apiLogin.request(data)
        if (resLogin?.ok) {
            setUserCookie("user", resLogin.user)
            setLoginInitialState()
            setUser(resLogin.user)
            return true
        } else {
            setLogin({
                email: {
                    ...state.login.email,
                    error: 'Usuario y/o contraseña incorrectos'
                },
                password: {
                    ...state.login.password,
                    error: 'Usuario y/o contraseña incorrectos'
                },
                login: false
            })
            return false
        }
    }

    return {
        login: state.login,
        setLogin,
        setEmail,
        setPassword,
        signIn
    }

}

export { useLogin }