import React, { useEffect, useState } from 'react'
import { Step1 } from '../../../components/signUp/steps/Step1';
import { CircularProgress, Step, StepLabel, Stepper, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FolderShared from '@mui/icons-material/FolderShared';
import LocationOn from '@mui/icons-material/LocationOn';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { config } from '../../../utils/config';
import { useSignUp } from '../../../hooks/user/useSignUp';
import { HandlerSteps } from '../../../components/signUp/HandlerSteps';
import { Step2 } from '../../../components/signUp/steps/Step2';
import { Step3 } from '../../../components/signUp/steps/Step3';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const Index = ({ setOpenBackDrop }) => {

    const { sign_up } = useSignUp();
    const { step, loading } = sign_up;
    const navigateTo = useNavigate()

    const returnStep = () => {
        if (step == 0) {
            return <Step1 />
        } else if (step == 1) {
            return <Step2 />
        } else if (step == 2) {
            return <Step3 />
        } else {
            // setStep(0);
            return null;
        }
    }

    const returnStepClass = (index) => {
        return step >= index ? 'text-color-secondary text-weight-700' : 'text-weight-700'
    }

    const returnStepIconColor = (index) => {
        return { color: step >= index ? config.colors.SECONDARY : config.colors.DARK_GREY }
    }

    const returnStepIcon = (child, index) => {
        return step < index ? child : <CheckCircle style={returnStepIconColor(0)} />;
    }

    const returnToLogin = () => {
        setOpenBackDrop(true)
        setTimeout(() => {
            navigateTo('/')
        }, 500)
    }

    return (
        <div>
            <Stepper className='mb-4' activeStep={step} alternativeLabel>
                <Step>
                    <StepLabel
                        icon={returnStepIcon(<FolderShared style={returnStepIconColor(0)} />, 1)}
                    >
                        <span className={returnStepClass(0)}>
                            Datos Personales
                        </span>
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel
                        icon={returnStepIcon(<AccountCircle style={returnStepIconColor(1)} />, 2)}
                    >
                        <span className={returnStepClass(1)}>
                            Cuenta
                        </span>
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel
                        icon={returnStepIcon(<LocationOn style={returnStepIconColor(2)} />, 3)}
                    >
                        <span className={returnStepClass(2)}>
                            Ubicación
                        </span>
                    </StepLabel>
                </Step>
            </Stepper>
            <div className='step-sign-up'>
                <div className={`align-items-center d-${!loading ? 'none' : 'grid'}`}>
                    <CircularProgress
                        color='secondary'
                        className='mx-auto'
                    />
                </div>
                <div className={`${loading ? 'd-none' : ''}`}>
                    {returnStep()}
                </div>
                <div className='w-100 d-flex justify-content-between'>
                    <div className='w-100 d-flex justify-content-start'>
                        <Button
                            variant='outlined'
                            color='secondary'
                            startIcon={<LoginIcon />}
                            onClick={returnToLogin}
                        >
                            INICIAR SESIÓN
                        </Button>
                    </div>
                    <HandlerSteps />
                </div>
            </div>
        </div >
    )
}

export { Index }