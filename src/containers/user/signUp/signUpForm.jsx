import React, { useState } from 'react'
import { Step1 } from './step1';
import { Step, StepLabel, Stepper } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FolderShared from '@mui/icons-material/FolderShared';
import LocationOn from '@mui/icons-material/LocationOn';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { config } from '../../../utils/config';
import { useEffect } from 'react';

const Index = () => {

    const [step, setStep] = useState(0)

    const returnStep = () => {
        if (step == 0) {
            return <Step1 />
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

    useEffect(() => {

    }, [])

    return (
        <div>
            <Stepper className='mb-3' activeStep={step} alternativeLabel>
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
            {returnStep()}
        </div>
    )
}

export { Index }