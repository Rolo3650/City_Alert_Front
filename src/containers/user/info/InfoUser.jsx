import React, { useEffect, useState } from 'react'
import { useColors } from '../../../hooks/themes/useColors'
import { Avatar, Link } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useUser } from '../../../hooks/user/useUser'
import { config } from '../../../utils/config'
import moment from 'moment'

const InfoUser = () => {

    const [user, setUser] = useState({});
    const { colors, theme } = useColors()
    const navigateTo = useNavigate()
    const { id } = useParams();
    const { getUser } = useUser();

    const navigateHome = () => {
        navigateTo('/home')
    }

    const init = async () => {
        if (config.regex.number.test(id)) {
            const userApi = await getUser(parseInt(id))
            setUser(userApi)
            console.log(userApi)
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div className={`info-user info-user-${theme}`}>
            <div className='perfil-image-container mb-5'>
                <div className='avatar'>
                    <Avatar
                        sx={{
                            height: "175px",
                            width: "175px",
                            borderStyle: "solid",
                            borderWidth: "5px",
                        }}
                    />
                </div>
            </div>
            <div className='background background-white info mx-auto p-4 border-rounded-all-10 mb-4'>
                <h3 className='text-center text-weight-600 mb-3'>
                    {`${user?.person?.name}`}
                </h3>
                <div className='d-flex'>
                    <Link
                        color='secondary'
                        underline='hover'
                        sx={{
                            ":hover": {
                                cursor: 'pointer',
                                color: colors.$color_11,
                            },
                        }}
                        onClick={navigateHome}
                    >
                        <h5>
                            Inicio
                        </h5>
                    </Link>
                </div>
            </div>
            <div className='background background-white info mx-auto px-4 pt-4 border-rounded-all-10 mb-5'>
                <div className='text-weight-400 grid columns-2 gap-column-20 mb-4 columns-mobile-to-'>
                    <div>
                        <p>Nombre: {`${user?.person?.name}`}</p>
                    </div>
                    <div>
                        <p>Correo: {`${user?.email}`}</p>
                    </div>
                    <div>
                        <p>Apellidos: {`${user?.person?.last_name}`}</p>
                    </div>
                    {user?.person?.sex?.sex != 'PREFIERO NO DECIRLO' ?
                        <div>
                            <p>Sexo: {`${user?.person?.sex?.sex}`}</p>
                        </div>
                        : ''}
                    <div>
                        <p>Fecha de Nacimiento: {moment(user?.person?.birthday ?? new Date()).format('DD/MM/YYYY')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { InfoUser }