import React from 'react'
import { SearchOne } from '../../searchBar/SearchOne'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Avatar, Button, IconButton, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { config } from '../../../utils/config';

const HeaderOne = () => {

    const modalShow = (modal) => {
        $(`#${modal}`).modal('show');
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
                />
            </div>
        </div>
    )
}

export { HeaderOne }