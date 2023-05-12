import React, { useContext } from 'react'
import { Context } from '../../context/useReducer';
import { useCookies } from 'react-cookie';
import { actionTypes } from '../../context/ActionTypes';
import { GET_USER } from '../../api/user/user';
import { useApi } from '../api/useApi';

const useUser = () => {

    const [state, dispatch] = useContext(Context)
    const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);
    const getUserApi = useApi(GET_USER);

    const setUserInitialState = (payload) => {
        dispatch({ type: actionTypes.SET_USER_INITIAL_STATE, payload: {} })
    }

    const setUser = (payload) => {
        dispatch({ type: actionTypes.SET_USER, payload: { ...state.user, ...payload } })
    }

    const setUserFromCookie = () => {
        setUser(userCookie["user"])
    }

    const getUser = async (id) => {
        let reponse = await getUserApi.request({ "id_user": id })
        if (reponse.ok) {
            return reponse.user;
        } else {
            return {}
        }
    }

    const signOut = async (setBackDrop) => {
        removeUserCookie("user")
        setBackDrop(true)
        setTimeout(() => { window.location.assign('/') }, 500)
    }

    return {
        setUserFromCookie,
        setUserInitialState,
        user: state.user,
        setUser,
        getUser,
        signOut
    }
}

export { useUser }