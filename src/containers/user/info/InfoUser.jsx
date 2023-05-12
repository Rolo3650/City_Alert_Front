import React, { useEffect, useState } from 'react'
import { useColors } from '../../../hooks/themes/useColors'
import { Avatar, Link } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useUser } from '../../../hooks/user/useUser'
import { config } from '../../../utils/config'
import moment from 'moment'
import { EditUserModal } from '../../modal/user/EditUserModal'

const InfoUser = ({ setOpenBackDrop, openBackDrop }) => {

    const [userApi, setUser] = useState({});
    const { colors, theme } = useColors()
    const navigateTo = useNavigate()
    const { id } = useParams();
    const { getUser, user, signOut } = useUser();

    const navigateHome = () => {
        setOpenBackDrop(true)
        setTimeout(() => {
            navigateTo('/home')
        }, 500)
    }

    const editUser = () => {
        $('#editUser').modal('show')
    }

    const init = async () => {
        if (config.regex.number.test(id)) {
            const userApi = await getUser(parseInt(id))
            setUser(userApi)
        }
        setTimeout(() => {
            setOpenBackDrop(false)
        }, 500)
    }

    useEffect(() => {
        init()
    }, [])

    return (<>
        <div className={`info-user info-user-${theme}`}>
            <div className='perfil-image-container mb-5'>
                <div className={`avatar ${!user?.avatar?.url && !openBackDrop ? 'before' : ''}`}>
                    <Avatar
                        sx={{
                            height: "175px",
                            width: "175px",
                            borderStyle: "solid",
                            borderWidth: "5px",
                        }}
                        src={`${user?.avatar?.url != '_' ? user?.avatar?.url : ""}`}
                    />
                </div>
            </div>
            <div className='background background-white info mx-auto p-4 border-rounded-all-10 mb-4'>
                <h3 className='text-center text-weight-600 mb-3'>
                    {`${userApi?.person?.name}`}
                </h3>
                <div className='d-flex text-color-secondary'>
                    <Link
                        color='secondary'
                        underline='hover'
                        sx={{
                            ":hover": {
                                cursor: 'pointer',
                                color: colors.$color_11,
                            },
                        }}
                        className='mx-2'
                        onClick={navigateHome}
                    >
                        <h5>
                            Inicio
                        </h5>
                    </Link> |
                    {user.id_user == userApi?.id_user && <>
                        <Link
                            color='secondary'
                            underline='hover'
                            sx={{
                                ":hover": {
                                    cursor: 'pointer',
                                    color: colors.$color_11,
                                },
                            }}
                            className='mx-2'
                            onClick={editUser}
                        >
                            <h5>
                                Editar Usuario
                            </h5>
                        </Link> |
                        <Link
                            color='secondary'
                            underline='hover'
                            sx={{
                                ":hover": {
                                    cursor: 'pointer',
                                    color: colors.$color_11,
                                },
                            }}
                            className='mx-2'
                            onClick={() => {signOut(setOpenBackDrop)}}
                        >
                            <h5>
                                Cerrar Sesión
                            </h5>
                        </Link>
                    </>}
                </div>
            </div>
            <div className='background background-white info mx-auto px-4 pt-4 border-rounded-all-10 mb-5'>
                <div className='text-weight-400 grid columns-2 gap-column-20 mb-4 columns-mobile-to-'>
                    <div>
                        <p>Nombre: {`${userApi?.person?.name}`}</p>
                    </div>
                    <div>
                        <p>Correo: {`${userApi?.email}`}</p>
                    </div>
                    <div>
                        <p>Apellidos: {`${userApi?.person?.last_name}`}</p>
                    </div>
                    {userApi?.person?.sex?.sex != 'PREFIERO NO DECIRLO' ?
                        <div>
                            <p>Sexo: {`${userApi?.person?.sex?.sex}`}</p>
                        </div>
                        : ''}
                    <div>
                        <p>Fecha de Nacimiento: {moment(userApi?.person?.birthday ?? new Date()).format('DD/MM/YYYY')}</p>
                    </div>
                </div>
            </div>
        </div>
        <EditUserModal getUser={init} />
    </>)
}

export { InfoUser }