import React from 'react'
import { useApi } from '../api/useApi'
import { GET_MUNICIPALITIES } from '../../api/location/location'
import { usePostalCode } from './usePostalCode'

const useMunicipality = () => {

    const apiMunicipality = useApi(GET_MUNICIPALITIES)
    const { getPostalCodesByState } = usePostalCode()

    const getMunicipalities = async () => {
        const response = await apiMunicipality.request()
        if (response?.ok) {
            return response?.municipalities_array
        } else {
            return null;
        }
    }

    const setMunicipalitiesFromState = async (id, setState) => {
        const pcByStates = await getPostalCodesByState(id)
        const municipalities = pcByStates?.filter(pc => pc.municipality)?.map(pc => pc.municipality)
        const lock_municipalities = municipalities.filter((obj, index, self) => {
            return index === self.findIndex((t) => (
                t.id_municipality === obj.id_municipality
            ));
        });
        setState(lock_municipalities)
    }

    return {
        getMunicipalities,
        setMunicipalitiesFromState
    }
}

export { useMunicipality }