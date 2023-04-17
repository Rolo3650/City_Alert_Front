import { FilledInput, FormControl, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { config } from '../../utils/config';

const SearchOne = () => {
    return (
        <div>
            <FormControl fullWidth>
                <Input
                    id='search'
                    label="Buscar"
                    sx={{
                        backgroundColor: config.colors.WHITE,
                        borderRadius: "20px",
                        paddingX: "5px",
                        paddingY: "5px",
                        fontWeight: "600",
                        "& .MuiSvgIcon-root": {
                            marginX: "10px",
                        },
                        ":before": {
                            display: "none"
                        },
                        ":after": {
                            display: "none"
                        },
                        ":hover": {
                            backgroundColor: config.colors.DARK_WHITE,
                        },
                        "& .MuiInputBase-input": {
                            color: config.colors.DARK_GREY,
                        }
                    }}
                    startAdornment={
                        <SearchIcon color='secondary' />
                    }
                    placeholder='Buscar Publicación'
                />
            </FormControl>
        </div>
    )
}

export { SearchOne }