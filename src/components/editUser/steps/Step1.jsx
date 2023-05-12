import { CircularProgress, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import useSex from '../../../hooks/user/useSex'
import { useState } from 'react'
import { useEffect } from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers-pro'
import { datePickerTheme } from '../../../containers/theme/DatePicker/datePickerTheme'
import { config } from '../../../utils/config'
import moment from 'moment'
import { useEditUser } from '../../../hooks/user/useEditUser'

const Step1 = () => {

    const { edit_user, setName, setFatherName, setMotherName, setSex, setLoading, setBirthday, setEditUser, setImgs } = useEditUser()
    const { getSexs } = useSex()
    const [sexs, setSexs] = useState([]);
    const [maxDate, setMaxDate] = useState(new Date());

    const { sx } = datePickerTheme()
    const { name, father_name, mother_name, sex, birthday } = edit_user;
    const { regex } = config;

    const onChangeName = (ev) => {
        if (regex.text_on_change.test(ev.target.value)) {
            setName({ value: ev.target.value, error: '' })
        }
    }

    const onChangeFatherName = (ev) => {
        if (regex.text_on_change.test(ev.target.value)) {
            setFatherName({ value: ev.target.value, error: '' })
        }
    }

    const onChangeMotherName = (ev) => {
        if (regex.text_on_change.test(ev.target.value)) {
            setMotherName({ value: ev.target.value, error: '' })
        }
    }

    const onChangeSex = (ev) => {
        setSex({ value: ev.target.value, error: '' })
    }

    const onChangeBirthday = (ev) => {
        setBirthday({ value: ev.toDate(), error: '' })
    }

    const returnSexsOptions = () => sexs?.map(sex =>
        <MenuItem value={sex?.id_sex} key={sex?.id_sex}>{sex?.sex}</MenuItem>
    )

    const onChangeURL = (ev) => {
        var archivo = ev.target.files[0];
        var reader = new FileReader();
        reader.onload = () => {
            setImgs({ value: [reader.result], error: '' })
        }

        reader.readAsDataURL(archivo);
    }

    const init = async () => {
        let maxDateLocal = new Date();
        maxDateLocal.setFullYear(maxDateLocal.getFullYear() - 15)
        setMaxDate(maxDateLocal)
        const apiSexs = await getSexs()
        if (apiSexs) {
            setSexs(apiSexs)
        }
        setEditUser({
            loading: false,
            birthday: { value: maxDateLocal, error: '' }
        })
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div className='d-grid algin-items-center'>
            <div className='grid columns-2 gap-column-20 mb-4 columns-mobile-to-1 gap-row-20 rows-px-56'>
                <TextField
                    label='Apellido Paterno'
                    variant='outlined'
                    value={father_name.value}
                    onChange={onChangeFatherName}
                />
                <TextField
                    label='Apellido Materno'
                    variant='outlined'
                    value={mother_name.value}
                    onChange={onChangeMotherName}
                />
            </div>
            <div className='grid columns-2 gap-column-20 columns-mobile-to-1 mb-4'>
                <TextField
                    label='Nombre'
                    variant='outlined'
                    value={name.value}
                    onChange={onChangeName}
                />
            </div>
            <div className='grid columns-2 gap-column-20 columns-mobile-to-1 mb-4 gap-row-20'>
                <div>
                    <FormControl fullWidth>
                        <InputLabel>Sexo</InputLabel>
                        <Select
                            label="Sexo"
                            value={sex.value}
                            onChange={onChangeSex}
                        >
                            {returnSexsOptions()}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth>
                        <DesktopDatePicker
                            label="Fecha de Nacimiento"
                            slotProps={{
                                popper: {
                                    sx: sx()
                                }
                            }}
                            maxDate={moment(maxDate)}
                            value={moment(birthday.value)}
                            onChange={onChangeBirthday}
                        />
                    </FormControl>
                </div>
            </div>
            <div className='grid columns-2 gap-column-20 columns-mobile-to-1 mb-4 gap-row-20'>
                <div>
                    <FormControl fullWidth>
                        <InputLabel
                            shrink={true}
                            htmlFor="outlined-adornment-input"
                        >Foto de Perfil</InputLabel>
                        <Input
                            id='outlined-adornment-input'
                            type='file'
                            label='Foto de Perfil'
                            accept='.jpg, .jpeg, .png'
                            onChange={onChangeURL}
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export { Step1 }