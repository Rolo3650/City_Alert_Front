import { FilledInput, FormControl, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { config } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import { usePublication } from '../../hooks/publiccation/usePublication';
import { useColors } from '../../hooks/themes/useColors';

const SearchOne = () => {

    const navigateTo = useNavigate()
    const { publications, setFilter } = usePublication()
    const { filter } = publications
    const { colors } = useColors()

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
                        backgroundColor: colors.$color_1,
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
                            backgroundColor: colors.$color_2,
                        },
                        "& .MuiInputBase-input": {
                            color: colors.$color_3,
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