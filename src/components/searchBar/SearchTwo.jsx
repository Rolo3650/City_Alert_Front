import { FilledInput, FormControl, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { config } from '../../utils/config';
import { useColors } from '../../hooks/themes/useColors';
import { useNavigate } from 'react-router-dom';
import { usePublication } from '../../hooks/publiccation/usePublication';

const SearchTwo = () => {

    const { colors } = useColors();

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
                        backgroundColor: colors?.$color_9,
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
                            backgroundColor: colors?.$color_11,
                        },
                        "& .MuiInputBase-input": {
                            color: colors?.$color_1,
                            "::placeholder": {
                                opacity: ".90",
                                color: colors?.$color_1,
                            }
                        }
                    }}
                    startAdornment={
                        <SearchIcon color='lightPrimary' />
                    }
                    placeholder='Buscar Publicación'
                    onChange={onChange}
                />
            </FormControl>
        </div>
    )
}

export { SearchTwo }