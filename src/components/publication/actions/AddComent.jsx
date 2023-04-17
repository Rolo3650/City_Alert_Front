import { Button, FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useComent } from '../../../hooks/publiccation/useComent';
import { useUser } from '../../../hooks/user/useUser';
import { usePublication } from '../../../hooks/publiccation/usePublication';

const AddComent = ({ publication }) => {

    const [coment, setComent] = useState("");
    const { user } = useUser()
    const { addComent, setPublicationsComent } = useComent();

    const onChangeComent = (e) => {
        if (e?.target?.value?.length <= 500) {
            setComent(e.target.value)
        }
    }

    const onClick = async () => {
        let body = {
            "coment": coment,
            "id_publication": publication?.id_publication,
            "id_user": user.id_user,
            
        }
        let newComent = await addComent(body)
        if (newComent) {
            newComent.user = user
            newComent.deleted = false
            setPublicationsComent(newComent)
        }
    }

    return (
        <div className='d-flex'>
            <FormControl fullWidth >
                <TextField
                    label="Agrega un comentario"
                    multiline
                    maxRows={3}
                    value={coment}
                    onChange={onChangeComent}
                />
            </FormControl>
            <div className='mx-3 mt-2'>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={onClick}
                >
                    AGREGAR
                </Button>
            </div>
        </div>
    )
}

export { AddComent }