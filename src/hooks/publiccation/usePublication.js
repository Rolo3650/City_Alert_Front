import React, { useContext } from 'react'
import { actionTypes } from '../../context/ActionTypes'
import { Context } from '../../context/useReducer'
import { GET_ALL_PUBLICATIONS } from '../../api/publication/publication'
import { useApi } from '../api/useApi'

const usePublication = () => {

    const [state, dispatch] = useContext(Context)
    const resGetAllPublications = useApi(GET_ALL_PUBLICATIONS);

    const setPublicationsInitialState = () => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS_INITIAL_STATE, payload: {} });
    }

    const setPublicationsLoading = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS, payload: {...state.publications, loading: payload} });
    }

    const setPublicationsList = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS, payload: {...state.publications, publicationList: payload} });
    }

    const setPublications = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS, payload: payload });
    }

    const getAllApiPublications = async () => {
        setPublicationsLoading(true)
        const response = await resGetAllPublications.request()
        setTimeout(() => {
            if (response.ok) {
                setPublications({
                    loading: false,
                    publicationList: response.publications_array
                })
            }   
        }, 500)
    }

    return {
        publications: state.publications,
        setPublicationsInitialState,
        setPublicationsLoading,
        setPublicationsList,
        getAllApiPublications
    }

}

export { usePublication }