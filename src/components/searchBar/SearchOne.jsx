import { FilledInput, FormControl, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { config } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import { usePublication } from '../../hooks/publiccation/usePublication';

const SearchOne = () => {

    const navigateTo = useNavigate()
    const { publications, setFilter } = usePublication()
    const { filter } = publications

    const onChange = (e) => {
        navigateTo('/home/' + e.target.value);
        setFilter(e.target.value)
    };

    return (
        <div>
            <FormControl fullWidth>
                <Input
                    value={filter}
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

                    onChange={onChange}
                />
            </FormControl>
        </div>
    )
}

export { SearchOne }