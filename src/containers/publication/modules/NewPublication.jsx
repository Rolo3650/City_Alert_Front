import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import LocationOn from '@mui/icons-material/LocationOn';
import SourceIcon from '@mui/icons-material/Source';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { config } from '../../../utils/config';
import { Step1 } from '../../../components/publication/newPublication/steps/Step1';
import { Step2 } from '../../../components/publication/newPublication/steps/Step2';
import { useNewPublication } from '../../../hooks/publiccation/useNewPublication';

const NewPublication = () => {

    const { new_publication } = useNewPublication();
    const { step } = new_publication;

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
        <>
            <div>
                <Stepper className='mb-4' activeStep={step} alternativeLabel>
                    <Step>
                        <StepLabel
                            icon={returnStepIcon(<SourceIcon style={returnStepIconColor(0)} />, 1)}
                        >
                            <span className={returnStepClass(0)}>
                                Reporte de la situación
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
            </div>
            <div>
                {returnStep()}
            </div>
        </>
    )
}

export { NewPublication }