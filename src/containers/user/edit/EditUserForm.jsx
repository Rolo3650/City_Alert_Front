import React, { useEffect, useState } from 'react'
import { CircularProgress, Step, StepLabel, Stepper, Button } from '@mui/material';
import FolderShared from '@mui/icons-material/FolderShared';
import LocationOn from '@mui/icons-material/LocationOn';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { config } from '../../../utils/config';
import { useEditUser } from '../../../hooks/user/useEditUser';
import { Step1 } from '../../../components/editUser/steps/Step1';
import { Step2 } from '../../../components/editUser/steps/Step2';
import { useUser } from '../../../hooks/user/useUser';

const EditUserForm = () => {

    const { edit_user, setEditUser } = useEditUser();
    const { user } = useUser();
    const { step, loading } = edit_user;

    const returnStep = () => {
        if (step == 0) {
            return <Step1 />
        } else if (step == 1) {
            return <Step2 />
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
            </div>
        </div >
    )
}

export { EditUserForm }