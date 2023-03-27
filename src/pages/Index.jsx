import React, { useContext } from 'react'
import { LoginForm } from '../containers/login/loginForm'
import { Context } from '../context/useReducer'

const Index = () => {

    const [state, dispatch] = useContext(Context)

    return (
        <div className="background background-page background-y-scroll background-white-to-green d-grid align-items-center p-3">
            <div>
                <div className="card-local card-xl color-primary card-login">
                    <div className='background background-grey p-5 d-grid align-items-center justify-content-center'>
                        <div>
                            <h1 className='text-color-dark-grey text-weight-700 text-poppins mb-5'>Iniciar Sesión</h1>
                            <LoginForm />
                        </div>
                    </div>
                    <div className='first background background-white p-5'>
                        <img src='../../public/images/svg/login.svg' alt="login" className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Index }