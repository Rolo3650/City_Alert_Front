import React from 'react'
import { SearchOne } from '../../searchBar/SearchOne'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Avatar, Button, IconButton, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { config } from '../../../utils/config';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../hooks/user/useUser';

const HeaderOne = ({ setOpenBackDrop }) => {

    const { user } = useUser();
    const navigateTo = useNavigate()

    const modalShow = (modal) => {
        $(`#${modal}`).modal('show');
    }

    const onNavigateUser = () => {
        setOpenBackDrop(true);
        setTimeout(() => {
            navigateTo(`/user/${user.id_user ?? 0}`)
        }, 500)
    }

    return (
        <div className='header header-one'>
            <div className='first'>
                <h2 className='text-weight-600 text-nowrap text'>City Alert</h2>
                <div className='button'>
                    <IconButton
                    >
                        <MenuIcon
                            sx={{
                                color: config.colors.WHITE
                            }}
                        />
                    </IconButton>
                </div>
            </div>
            <div className='second'>
                <SearchOne />
            </div>
            <div className='third'>
                <Button
                    variant='contained'
                    color='lightPrimary'
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
                    src={`${user?.avatar?.url != '_' ? user?.avatar?.url : "" }`}
                />
            </div>
        </div>
    )
}

export { HeaderOne }