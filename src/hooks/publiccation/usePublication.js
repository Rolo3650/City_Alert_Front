import React, { useContext } from 'react'
import { actionTypes } from '../../context/ActionTypes'
import { Context } from '../../context/useReducer'
import { GET_ALL_PUBLICATIONS, GET_ALL_PUBLICATIONS_BY_SETTLEMENT } from '../../api/publication/publication'
import { useApi } from '../api/useApi'
import { useUser } from '../user/useUser'

const usePublication = () => {

    const [state, dispatch] = useContext(Context)
    const resGetAllPublications = useApi(GET_ALL_PUBLICATIONS);
    const resGetParamsPublications = useApi(GET_ALL_PUBLICATIONS_BY_SETTLEMENT);
    const { user } = useUser();

    const setPublicationsInitialState = () => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS_INITIAL_STATE, payload: {} });
    }

    const setPublicationsResumeInitialState = () => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS_RESUME_INITIAL_STATE, payload: {} });
    }

    const setPublicationsLoading = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS, payload: { ...state.publications, loading: payload } });
    }

    const setPublicationsResumeLoading = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS_RESUME, payload: { ...state.publications, loading: payload } });
    }

    const setPublicationsList = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS, payload: { ...state.publications, publicationList: payload } });
    }

    const setPublicationsFilter = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS, payload: { ...state.publications, publicationFilter: payload } });
    }

    const setFilter = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS, payload: { ...state.publications, filter: payload } });
    }

    const setPublicationsResumeList = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS_RESUME, payload: { ...state.publications, publicationList: payload } });
    }

    const setPublications = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS, payload: payload });
    }

    const setPublicationsResume = (payload) => {
        dispatch({ type: actionTypes.SET_PUBLICATIONS_RESUME, payload: payload });
    }

    const getAllApiPublications = async () => {
        setPublicationsLoading(true)
        const response = await resGetAllPublications.request()
        setTimeout(() => {
            if (response.ok) {
                setPublications({
                    loading: false,
                    publicationList: response.publications_array,
                    publicationFilter: [],
                    filter: ''
                })
            }
        }, 500)
    }

    const getAllApiNearUser = async () => {
        setPublicationsResumeLoading(true)

        const obj = {
            id_settlement: user?.person?.settlement?.id_settlement
        }

        const response = await resGetParamsPublications.request(obj)
        setTimeout(() => {
            if (response.ok) {
                setPublicationsResume({
                    loading: false,
                    publicationList: response.publications_array
                })
            }
        }, 500)
    }

    return {
        publications: state.publications,
        publications_resume: state.publications_resume,
        setPublicationsInitialState,
        setPublicationsLoading,
        setPublicationsList,
        getAllApiNearUser,
        setPublicationsResumeInitialState,
        setPublicationsResumeList,
        setPublicationsResumeLoading,
        getAllApiPublications,
        setPublicationsFilter,
        setFilter
    }

}

export { usePublication }