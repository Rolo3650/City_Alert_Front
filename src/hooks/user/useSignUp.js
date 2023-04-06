import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/useReducer'
import { actionTypes } from '../../context/ActionTypes'
import { useApi } from '../api/useApi'
import { SIGN_UP, USER_REGISTERED } from '../../api/user/user'
import { useCookies } from 'react-cookie'
import { useUser } from './useUser'

const useSignUp = () => {

    const [state, dispatch] = useContext(Context)
    const userRegisteredApi = useApi(USER_REGISTERED)
    const userSignUp = useApi(SIGN_UP)
    const { setUser } = useUser()
    const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);

    const setSignUp = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, ...payload } })
    }

    const setSignUpInitialState = () => {
        dispatch({ type: actionTypes.SET_SIGN_UP_INITIAL_STATE, payload: {} })
    }

    const setStep = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, step: payload } })
    }

    const setName = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, name: { ...state.sign_up.name, ...payload } } })
    }

    const setFatherName = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, father_name: { ...state.sign_up.father_name, ...payload } } })
    }

    const setMotherName = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, mother_name: { ...state.sign_up.mother_name, ...payload } } })
    }

    const setSex = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, sex: { ...state.sign_up.sex, ...payload } } })
    }

    const setEmail = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, email: { ...state.sign_up.email, ...payload } } })
    }

    const setPassword = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, password: { ...state.sign_up.password, ...payload } } })
    }

    const setBirthday = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, birthday: { ...state.sign_up.birthday, ...payload } } })
    }

    const setState = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, state: { ...state.sign_up.state, ...payload } } })
    }

    const setMunicipality = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, municipality: { ...state.sign_up.municipality, ...payload } } })
    }

    const setSettlement = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, settlement: { ...state.sign_up.settlement, ...payload } } })
    }

    const setPC = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, pc: { ...state.sign_up.pc, ...payload } } })
    }

    const setLoading = (payload) => {
        dispatch({ type: actionTypes.SET_SIGN_UP, payload: { ...state.sign_up, loading: payload } })
    }

    const getUserRegistered = async () => {
        const data = {
            email: state.sign_up.email.value,
        }
        const resUserRegistered = await userRegisteredApi.request(data)
        if (resUserRegistered?.ok) {
            return true
        } else {
            return false
        }
    }

    const signUp = async () => {
        const data = {
            name: state.sign_up.name.value,
            last_name: `${state.sign_up.father_name.value} ${state.sign_up.mother_name.value}`,
            birthday: state.sign_up.birthday.value.toISOString(),
            id_sex: parseInt(state.sign_up.sex.value),
            id_settlement: parseInt(state.sign_up.settlement.value),
            email: state.sign_up.email.value,
            password: state.sign_up.password.value
        };
        const resUserSignUp = await userSignUp.request(data);
        if (resUserSignUp.ok) {
            setUserCookie("user", resUserSignUp.user)
            setUser(resUserSignUp.user)
            return true;
        } else {
            return false;
        }
    }

    return {
        setSignUpInitialState,
        setSignUp,
        sign_up: state.sign_up,
        setStep,
        setName,
        setFatherName,
        setMotherName,
        setSex,
        setLoading,
        setBirthday,
        setEmail,
        setPassword,
        setState,
        setMunicipality,
        setSettlement,
        setPC,
        getUserRegistered,
        signUp
    }
}

export { useSignUp }