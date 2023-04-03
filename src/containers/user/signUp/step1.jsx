import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import useSex from '../../../hooks/user/useSex'
import { useState } from 'react'
import { useEffect } from 'react'

const Step1 = () => {

    const { getSexs } = useSex()
    const [sexs, setSexs] = useState([]);

    const returnSexsOptions = () => sexs?.map(sex =>
        <MenuItem value={sex?.id}>{sex?.sex}</MenuItem>
    )

    const init = async () => {
        const apiSexs = await getSexs()
        getSexs()
        if (apiSexs) {
            setSexs(apiSexs)
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div className='d-grid algin-items-center'>
            <div className='grid columns-2 gap-column-20 mb-4 columns-mobile-to-1 gap-row-20'>
                <TextField
                    label='Apellido Paterno'
                    variant='outlined'
                />
                <TextField
                    label='Apellido Materno'
                    variant='outlined'
                />
            </div>
            <div className='grid columns-2 gap-column-20 mb-4'>
                <TextField
                    label='Nombre'
                    variant='outlined'
                />
            </div>
            <div className='grid columns-2 gap-column-20 mb-4'>
                <div>
                    <FormControl fullWidth>
                        <InputLabel>Sexo</InputLabel>
                        <Select
                            label="Sexo"
                        >
                            {returnSexsOptions()}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export { Step1 }