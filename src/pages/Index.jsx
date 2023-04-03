import React, { useEffect, useState } from 'react'
import { LoginForm } from '../containers/user/loginForm'
import { useUser } from '../hooks/user/useUser'
import { useNavigate } from 'react-router-dom'
import { Backdrop, CircularProgress, Link, Skeleton } from '@mui/material'
import { config } from '../utils/config'

const Index = () => {

    const [openBackDrop, setOpenBackDrop] = useState(false)
    const { user } = useUser()
    const navigateTo = useNavigate()

    const onClickLink = () => {
        setOpenBackDrop(true)
    }

    useEffect(() => {
        if (user?.id_user) {
            navigateTo('/home')
        }
    }, [user])

    return (
        <div className="background background-page background-white-to-green d-grid align-items-center p-3">
            <div>
                <div className="card-local card-xl color-primary card-login">
                    <div className='background background-grey p-5 d-grid align-items-center justify-content-center'>
                        <div>
                            <h1 className='text-color-dark-grey text-weight-700 text-poppins mb-5'>Iniciar Sesión</h1>
                            <LoginForm />
                            <p className='mt-4 text-weight-500 text-center'>
                                ¿No tienes una cuenta? &nbsp;
                                <Link href="/sign-up" underline="hover" color="secondary" onClick={onClickLink}>
                                    Registrate
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className='first background background-white p-5'>
                        <img
                            src='../../public/images/svg/login.svg'
                            alt="login"
                            className='w-100'
                        />
                    </div>
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

export { Index }