import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Avatar, Button, IconButton, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../hooks/user/useUser';
import { useColors } from '../../../hooks/themes/useColors';
import { SearchTwo } from '../../searchBar/SearchTwo';
import HomeIcon from '@mui/icons-material/Home';

const HeaderTwo = ({ setOpenBackDrop }) => {

    const { user } = useUser();
    const { colors, theme } = useColors()
    const navigateTo = useNavigate()

    const modalShow = (modal) => {
        $(`#${modal}`).modal('show');
    }

    const onNavigateUser = () => {
        if (!location.pathname.includes('/user/')) {
            setOpenBackDrop(true)
            setTimeout(() => {
                navigateTo(`/user/${user.id_user ?? 0}`)
            }, 500)
        }
    }

    const onNavigateHome = () => {
        setOpenBackDrop(true)
        setTimeout(() => {
            navigateTo(`/home`)
        }, 500)
    }

    return (
        <div className={`header header-two header-two-${theme}`}>
            <div className='first'>
                <h2 className='text-weight-600 text-nowrap text'>City Alert</h2>
                <div className='button'>
                    <IconButton
                    >
                        <MenuIcon
                            sx={{
                                color: colors?.$color_9
                            }}
                        />
                    </IconButton>
                </div>
            </div>
            <div className='second'>
                <SearchTwo />
            </div>
            <div className='third'>
                <Button
                    variant='contained'
                    color='secondary'
                    endIcon={<HomeIcon />}
                    sx={{
                        fontWeight: "800",
                        borderRadius: "30px",
                        paddingY: "9px",
                        minWidth: "130px",
                        marginRight: "20px",
                    }}
                    onClick={onNavigateHome}
                >
                    Inicio
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    endIcon={<AddCircleIcon />}
                    sx={{
                        fontWeight: "800",
                        borderRadius: "30px",
                        paddingY: "9px",
                        minWidth: "130px",
                        marginRight: "20px",
                    }}
                    onClick={() => {
                        modalShow('newPublication')
                    }}
                >
                    Crear
                </Button>
                <Avatar
                    onClick={onNavigateUser}
                    sx={{
                        ":hover": {
                            cursor: "pointer"
                        }
                    }}
                />
            </div>
        </div>
    )
}

export { HeaderTwo }