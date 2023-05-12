import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/useReducer'
import { actionTypes } from '../../context/ActionTypes'
import { useApi } from '../api/useApi'
import { EDIT_USER } from '../../api/user/user'
import { useUser } from './useUser'
import { useCookies } from 'react-cookie'

const useEditUser = () => {

    const [state, dispatch] = useContext(Context)
    const { user, setUser } = useUser();
    const editUserApi = useApi(EDIT_USER);
    const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);

    const setEditUser = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, ...payload } })
    }

    const setEditUserInitialState = () => {
        dispatch({ type: actionTypes.SET_EDIT_USER_INITIAL_STATE, payload: {} })
    }

    const setStep = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, step: payload } })
    }

    const setName = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, name: { ...state.edit_user.name, ...payload } } })
    }

    const setFatherName = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, father_name: { ...state.edit_user.father_name, ...payload } } })
    }

    const setMotherName = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, mother_name: { ...state.edit_user.mother_name, ...payload } } })
    }

    const setSex = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, sex: { ...state.edit_user.sex, ...payload } } })
    }

    const setBirthday = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, birthday: { ...state.edit_user.birthday, ...payload } } })
    }

    const setState = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, state: { ...state.edit_user.state, ...payload } } })
    }

    const setMunicipality = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, municipality: { ...state.edit_user.municipality, ...payload } } })
    }

    const setSettlement = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, settlement: { ...state.edit_user.settlement, ...payload } } })
    }

    const setPC = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, pc: { ...state.edit_user.pc, ...payload } } })
    }

    const setLoading = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: { ...state.edit_user, loading: payload } })
    }

    const setImgs = (payload) => {
        dispatch({ type: actionTypes.SET_EDIT_USER, payload: {...state.edit_user, images: { ...state?.edit_user?.images, ...payload }} });
    }

    const editUser = async () => {
        const data = {
            "id_user": user.id_user,
            "id_person": user?.person?.id_person,
            "name": state?.edit_user.name.value,
            "last_name": `${state?.edit_user.father_name.value} ${state?.edit_user.mother_name.value}`,
            "birthday": state?.edit_user?.birthday?.value,
            "id_sex": state?.edit_user?.sex?.value,
            "id_settlement": parseInt(state?.edit_user?.settlement?.value ?? 1),
            "id_avatar": user?.avatar?.id_avatar,
            "url": state?.edit_user?.images?.value[0],
            "deleted": false
        }
        const resEditUser = await editUserApi.request(data);
        if (resEditUser.ok) {
            setUserCookie("user", resEditUser.user)
            setUser(resEditUser.user)
            return true;
        } else {
            return false;
        }
    }

    return {
        setEditUserInitialState,
        setEditUser,
        edit_user: state.edit_user,
        setStep,
        setName,
        setFatherName,
        setMotherName,
        setSex,
        setLoading,
        setBirthday,
        setState,
        setMunicipality,
        setSettlement,
        setPC,
        editUser,
        setImgs
    }
}

export { useEditUser }