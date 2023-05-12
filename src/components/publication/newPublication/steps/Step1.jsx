import { FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React from 'react'
import { useNewPublication } from '../../../../hooks/publiccation/useNewPublication'
import { useEffect } from 'react'
import { usePublicationType } from '../../../../hooks/publiccation/usePublicationTypes'
import { useState } from 'react'

const Step1 = () => {

    const { getPublicationTypes } = usePublicationType()
    const { new_publication, setNewPublication, setDescription, setImgs, setPublicationType } = useNewPublication()
    const { description, images, publication_type } = new_publication
    const [publicationTypes, setPublicationTypes] = useState([]);

    const onChangeDescription = (ev) => {
        setDescription({ value: ev.target.value, error: '' })
    }

    const onChangeURL = (ev) => {
        var archivo = ev.target.files[0];
        var reader = new FileReader();
        reader.onload = () => {
            setImgs({ value: [reader.result], error: '' })
        }

        reader.readAsDataURL(archivo);
    }

    const onChangePublicationType = (ev) => {
        setPublicationType({ value: ev.target.value, error: '' })
    }

    const returnPublicationsOptions = () => publicationTypes?.map(publicationType =>
        <MenuItem value={publicationType?.id_publicationType} key={publicationType?.id_publicationType}>{publicationType?.publicationType}</MenuItem>
    )

    const init = async () => {
        const apiPublicationTypes = await getPublicationTypes()
        if (apiPublicationTypes) {
            setPublicationTypes(apiPublicationTypes)
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div>
            <div className='d-grid algin-items-center'>
                <div className='grid gap-column-20 mb-4 columns-mobile-to-1 gap-row-20'>
                    <TextField
                        label='Description'
                        variant='outlined'
                        multiline
                        maxRows={4}
                        value={description.value}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className='grid columns-2 gap-column-20 columns-mobile-to-1 mb-4'>
                    <div className='mb-4'>
                        <FormControl fullWidth>
                            <InputLabel>Tipo de Publicación</InputLabel>
                            <Select
                                label="Tipo de Publicación"
                                value={publication_type.value}
                                onChange={onChangePublicationType}
                            >
                                {returnPublicationsOptions()}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel
                                shrink={true}
                                htmlFor="outlined-adornment-input"
                            >Imagen de Publicación</InputLabel>
                            <Input
                                id='outlined-adornment-input'
                                type='file'
                                label='Imagen de Publicación'
                                accept='.jpg, .jpeg, .png'
                                onChange={onChangeURL}
                            />
                        </FormControl>
                    </div>
                </div>
                <div className='grid columns-2 gap-column-20 columns-mobile-to-1 mb-4 gap-row-20'>
                </div>
            </div>
        </div>
    )
}

export { Step1 }