import { Button } from '@mui/material'
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight ';
import KeyboardDoubleArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React from 'react'
import { useSignUp } from '../../hooks/user/useSignUp';
import { config } from '../../utils/config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const HandlerSteps = () => {

    const { sign_up, setStep, setLoading, getUserRegistered, signUp } = useSignUp();
    const navigateTo = useNavigate();
    const { step, name, father_name, mother_name, sex, email, password, settlement } = sign_up;
    const { regex } = config

    const nextStep = async () => {
        if (step == 1) {
            const isNotRegistered = await getUserRegistered();
            if (isNotRegistered) {
                setLoading(true)
                setStep(step + 1)
            } else {
                Swal.fire(
                    "Correo ya registrado",
                    "El correo electrónico ingresado ya esta registado como parte de otra cuenta.",
                    "error"
                )
            }
        } else if (step == 2) {
            const isNotRegistered = await getUserRegistered();
            if (isNotRegistered) {
                const registered = await signUp()
                if (registered) {
                    Swal.fire(
                        "Registrado Exitosamente",
                        "Bienvenido a City Alert, informate e informa sobre toda la ciudad.",
                        "success"
                    )
                } else {
                    Swal.fire(
                        "Error Inesperados",
                        "Se ha producido un error inesperado y no ha sido registrado, intentalo más tarde.",
                        "error"
                    )
                }
            } else {
                Swal.fire(
                    "Correo ya registrado",
                    "El correo electrónico ingresado ya esta registado como parte de otra cuenta.",
                    "error"
                )
            }
        } else {
            setLoading(true)
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
                regex.text.test(name.value) &&
                regex.text.test(father_name.value) &&
                regex.text.test(mother_name.value) &&
                regex.number.test(sex.value)
            ) {
                return false;
            } else {
                return true;
            }
        } else if (step == 1) {
            if (
                regex.email.test(email.value) &&
                email.value == email.confirmation &&
                regex.password.test(password.value) &&
                password.value == password.confirmation
            ) {
                return false;
            } else {
                return true;
            }
        } else if (step == 2) {
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
                {step < 2 ? 'Siguiente' : 'Registrarse'}
            </Button>
        </div>
    )
}

export { HandlerSteps }