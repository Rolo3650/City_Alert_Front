import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStateLocation } from '../../../hooks/location/useState';
import { useSignUp } from '../../../hooks/user/useSignUp';
import { usePostalCode } from '../../../hooks/location/usePostalCode';
import { useErrorHandler } from '../../../hooks/error/useErrorHandler';
import { useSettlement } from '../../../hooks/location/useSettlements';
import { config } from '../../../utils/config';
import Swal from 'sweetalert2';
import { useMunicipality } from '../../../hooks/location/useMunicipality';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useEditUser } from '../../../hooks/user/useEditUser';

const Step2 = () => {

    const { getStates } = useStateLocation();
    const { numberToPC, pcToNumber } = usePostalCode();
    const { setMunicipalitiesFromState } = useMunicipality();
    const { getSettlementsByMunicipality, getSettlementsByPC, setSettlementFromMunicipality } = useSettlement()
    const { edit_user, setState, setMunicipality, setEditUser, setPC } = useEditUser();
    const { errorHandler } = useErrorHandler();
    const [states, setStates] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const [settlements, setSettlements] = useState([]);

    const { state, municipality, settlement, pc } = edit_user;

    const onChangeState = async (ev) => {
        setState({ value: ev.target.value, error: '' })
        setMunicipalitiesFromState(ev.target.value, setMunicipalities)
    }

    const onChangeMunicipality = async (ev) => {
        setMunicipality({ value: ev.target.value, error: '' })
        setSettlementFromMunicipality(ev.target.value, setSettlements)
    }

    const onChangeSettlement = async (ev) => {
        const settlement = settlements.find(settlement => settlement.id_settlement == ev.target.value)
        setEditUser({
            settlement: { value: ev.target.value, error: '' },
            pc: { value: numberToPC(settlement?.pc?.id_pc), error: '' }
        })
    }

    const onChangePC = async (ev) => {
        if (config.regex.number_on_change.test(ev.target.value)) {
            setPC({ value: ev.target.value, error: '' })
        }
    }

    const returnStateOptions = () => states?.map(state =>
        <MenuItem value={`${state?.id_state}`} key={state?.id_state}>{state?.state}</MenuItem>
    )

    const returnMunicipalityOptions = () => municipalities?.map(municipality =>
        <MenuItem value={`${municipality?.id_municipality}`} key={municipality?.id_municipality}>{municipality?.municipality}</MenuItem>
    )

    const returnSettlementsOptions = () => settlements?.map(settlement =>
        <MenuItem value={`${settlement?.id_settlement}`} key={settlement?.id_settlement}>{settlement?.name}</MenuItem>
    )

    const searchPC = async () => {
        if (config.regex.pc.test(pc.value)) {
            const settlements = await getSettlementsByPC(pcToNumber(pc.value))

            if (settlements?.length > 0) {
                await setMunicipalitiesFromState(settlements[0]?.pc?.state?.id_state, setMunicipalities)
                setSettlements(settlements)

                setEditUser({
                    state: { value: settlements[0]?.pc?.state?.id_state, error: '' },
                    municipality: { value: settlements[0]?.pc?.municipality?.id_municipality, error: '' },
                    settlement: { value: '', error: '' },
                })

                Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                }).fire({
                    icon: 'success',
                    title: 'CP encontrado e ingresado',
                    text: 'Selecciona tu Colonia.'
                })


            } else {
                Swal.fire(
                    "CP No encontrado",
                    "El Código Postal ingresado no está disponible",
                    "question"
                )
            }

        } else {
            Swal.fire(
                "CP Inválido",
                "Ingresa un Código Postal válido",
                "error"
            )
        }
    }

    const init = async () => {
        const apiStates = await getStates()
        if (apiStates) {
            setStates(apiStates)
        }
        if (config.regex.pc.test(pc.value)) {
            searchPC()
        } else {
            if (state.value) {
                setMunicipalitiesFromState(state.value, setMunicipalities)
            }
            if (municipality.value) {
                setSettlementFromMunicipality(municipality.value, setSettlements)
            }
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div className='d-grid algin-items-center'>
            <div className='grid columns-2 gap-column-20 mb-4 columns-mobile-to-1 gap-row-20 rows-px-56 align-items-center'>
                <TextField
                    label='Código Postal'
                    variant='outlined'
                    value={pc.value}
                    onChange={onChangePC}
                />
                <div>
                    <Button
                        variant="contained"
                        color='secondary'
                        endIcon={<TravelExploreIcon />}
                        onClick={searchPC}
                    >
                        Buscar
                    </Button>
                </div>
            </div>
            <div className='grid columns-2 gap-column-20 mb-4 columns-mobile-to-1 gap-row-20 rows-px-56'>
                <div>
                    <FormControl fullWidth>
                        <InputLabel>Estado</InputLabel>
                        <Select
                            label="Estado"
                            value={state.value}
                            onChange={onChangeState}
                        >
                            {returnStateOptions()}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth>
                        <InputLabel>Municipio</InputLabel>
                        <Select
                            disabled={!errorHandler(state.value)}
                            label="Municipio"
                            value={municipality.value}
                            onChange={onChangeMunicipality}
                        >
                            {returnMunicipalityOptions()}
                        </Select>
                        {!errorHandler(state.value) ?
                            <FormHelperText>Selecciona el Estado primero</FormHelperText>
                            : null
                        }
                    </FormControl>
                </div>
            </div>
            <div className='grid columns-2 gap-column-20 mb-4 columns-mobile-to-1 gap-row-20 rows-px-56'>
                <div>
                    <FormControl fullWidth>
                        <InputLabel>Colonia</InputLabel>
                        <Select
                            label="Colonia"
                            value={settlement.value}
                            onChange={onChangeSettlement}
                        >
                            {returnSettlementsOptions()}
                        </Select>
                        {!errorHandler(municipality.value) ?
                            <FormHelperText>Selecciona el Municipio primero</FormHelperText>
                            : null
                        }
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export { Step2 }