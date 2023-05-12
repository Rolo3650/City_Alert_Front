import { Button } from '@mui/material'
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight ';
import KeyboardDoubleArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEditUser } from '../../hooks/user/useEditUser';
import { config } from '../../utils/config';
import { useUser } from '../../hooks/user/useUser';

const HandlerSteps = ({ getUser }) => {

    const { edit_user, setStep, setLoading, setEditUserInitialState, editUser } = useEditUser();
    const { user } = useUser();
    const { step } = edit_user;

    const nextStep = async () => {
        if (step == 1) {
            editUser()
            getUser()
            $('#editUser').modal('hide')
            setEditUserInitialState()
        } else {
            setStep(step + 1)
        }
    }

    const previousStep = () => {
        setLoading(true)
        setStep(step - 1)
    }

    const disabledStep = () => {
        if (
            step == 0 &&
            edit_user.name.value &&
            edit_user.father_name.value &&
            edit_user.mother_name.value &&
            edit_user.sex.value &&
            edit_user.birthday.value
        ) {
            return false
        } else if (
            step == 1 &&
            edit_user.settlement.value
        ) {
            return false
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
                {step < 1 ? 'Siguiente' : 'Actualizar'}
            </Button>
        </div>
    )
}

export { HandlerSteps }