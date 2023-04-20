import React from 'react'
import { useApi } from '../api/useApi'
import { GET_PUBLICATION_TYPES } from '../../api/publication/publication';

const usePublicationType = () => {

    const apiPublicationTypes = useApi(GET_PUBLICATION_TYPES);

    const getPublicationTypes = async () => {
        const response = await apiPublicationTypes.request()
        if (response?.ok) {
            return response?.publicationTypes_array
        } else {
            return null;
        }
    }

    return {
        getPublicationTypes
    }
}

export { usePublicationType }