import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/useReducer'
import { actionTypes } from '../../context/ActionTypes'
import { useApi } from '../api/useApi'
import { CREATE_PUBLICATION } from '../../api/publication/publication'

const useNewPublication = () => {

    const [state, dispatch] = useContext(Context)
    const apiCreatePublication = useApi(CREATE_PUBLICATION)

    const setNewPublication = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: {...state.new_publication, ...payload} });
    }

    const setDescription = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: {...state.new_publication, description: { ...state?.new_publication?.description, ...payload }} });
    }

    const setImgs = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: {...state.new_publication, images: { ...state?.new_publication?.images, ...payload }} });
    }

    const setPublicationType = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: {...state.new_publication, publication_type: { ...state?.new_publication?.publication_type, ...payload }} });
    }

    const setStep = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: {...state.new_publication, step: payload} });
    }

    const setLoading = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: {...state.new_publication, loading: payload} });
    }

    const setState = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: { ...state.new_publication, state: { ...state.sign_up.state, ...payload } } })
    }

    const setMunicipality = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: { ...state.new_publication, municipality: { ...state.sign_up.municipality, ...payload } } })
    }

    const setSettlement = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: { ...state.new_publication, settlement: { ...state.sign_up.settlement, ...payload } } })
    }

    const setPC = (payload) => {
        dispatch({ type: actionTypes.SET_NEW_PUBLICATION, payload: { ...state.new_publication, pc: { ...state.sign_up.pc, ...payload } } })
    }

    const createNewPublication = async (body) => {
        const response = await apiCreatePublication.request(body);
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    }

    return {
        new_publication: state.new_publication,
        setNewPublication,
        setDescription,
        setImgs,
        setPublicationType,
        setStep,
        setLoading,
        setState,
        setMunicipality,
        setSettlement,
        setPC,
        createNewPublication
    }
}

export { useNewPublication }