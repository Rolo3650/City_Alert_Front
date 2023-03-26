import React, { useContext, useEffect } from 'react'
import { Context } from '../context/useReducer'
import { TextField } from '@mui/material'

const Index = () => {

    const [state, dispatch] = useContext(Context)

    return (
        <div className="background background-page background-scroll background-white-to-green d-grid align-items-center px-3">
            <div>
                <div className="card-local card-xl color-primary card-login">
                    <div className='background background-grey p-5'>
                        <div>
                            Hola
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