import React, { useEffect, useState } from 'react'
import { Index } from '../../containers/user/signUp/SignUpForm'
import { Backdrop, CircularProgress } from '@mui/material'
import { useUser } from '../../hooks/user/useUser'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [openBackDrop, setOpenBackDrop] = useState(false)
    const { user } = useUser()
    const navigateTo = useNavigate()

    useEffect(() => {
        if (user?.id_user) {
            setOpenBackDrop(true)
            setTimeout(() => {
                navigateTo('/home')
            }, 500);
        }
    }, [user])

    return (
        <div className="background background-page background-white-to-green d-grid align-items-center p-3">
            <div className="card-local card-xl color-primary card-sign-up">
                <div className='first background background-white p-5 d-grid align-items-center justify-content-center'>
                    <img
                        src='../../public/images/svg/login.svg'
                        alt="login"
                        className='w-100'
                    />
                </div>
                <div className='p-5'>
                    <h1 className='text-color-dark-grey text-weight-700 text-poppins mb-4 text-center'>Regístrate</h1>
                    <Index
                        setOpenBackDrop={setOpenBackDrop}
                    />
                </div>
            </div>
            <Backdrop
                open={openBackDrop}
            >
                <CircularProgress color="secondary" />
            </Backdrop>
        </div>
    )
}

export { SignUp }