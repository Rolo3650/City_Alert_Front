import { Button } from '@mui/material'
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight ';
import KeyboardDoubleArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useNewPublication } from '../../../hooks/publiccation/useNewPublication';
import { config } from '../../../utils/config';
import { usePublication } from '../../../hooks/publiccation/usePublication';
import { useUser } from '../../../hooks/user/useUser';

const HandlerSteps = () => {

    const { new_publication, setStep, setLoading, createNewPublication } = useNewPublication();
    const { getAllApiPublications } = usePublication()
    const { user } = useUser();
    const { step, description, settlement, publication_type, images } = new_publication;
    const { regex } = config

    const nextStep = async () => {
        if (step == 1) {
            let body = {
                description: description.value,
                id_publication_type: publication_type.value,
                id_settlement: parseInt(settlement.value),
                images: images.value?.map(img => ({url: img})),
                id_user: user.id_user
            }
            const publicationCreated = await createNewPublication(body);
            if (publicationCreated) {
                $('#newPublication').modal('hide')
                getAllApiPublications()
            }
        } else {
            setStep(step + 1)
        }
    }

    const previousStep = () => {
        setLoading(true)
        setStep(step - 1)
    }

    const disabledStep = () => {
        if (step == 0) {
            if (
                regex.text.test(description.value) &&
                regex.number.test(publication_type.value)
            ) {
                return false;
            } else {
                return true;
            }
        } else if (step == 1) {
            if (settlement.value) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    return (
        <div className='w-100 d-flex justify-content-end'>
            {step > 0 ?
                <Button
                    variant="contained"
                    startIcon={<KeyboardDoubleArrowLeft />}
                    onClick={previousStep}
                >
                    Regresar
                </Button>
                : null}
            <Button
                variant="contained"
                color='secondary'
                className='mx-2'
                endIcon={<KeyboardDoubleArrowRight />}
                onClick={nextStep}
                disabled={disabledStep()}
            >
                {step < 1 ? 'Siguiente' : 'Publicar'}
            </Button>
        </div>
    )
}

export { HandlerSteps }