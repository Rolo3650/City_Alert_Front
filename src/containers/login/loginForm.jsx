import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, CircularProgress, FormControl, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useLogin } from '../../hooks/login/useLogin';

const LoginForm = () => {

    const { login, setLogin, setEmail, setPassword } = useLogin()

    useEffect(() => {


    }, [login])

    return (
        <div>
            <FormGroup className='w-100'>
                <TextField
                    className='mb-3'
                    variant='outlined'
                    label='Correo'
                    type='email'
                    required
                />
                <FormControl variant='outlined' className='mb-5' required>
                    <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={login.password.show_password ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { setPassword({ show_password: !login.password.show_password }) }}
                                    onMouseDown={(event) => { event.preventDefault() }}
                                    edge="end"
                                >
                                    {login.password.show_password ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Contraseña"
                    />
                </FormControl>
                {login.loading ?
                    <CircularProgress
                        color='secondary'
                        className='mx-auto'
                    />
                    :
                    <Button
                        variant="contained"
                        color='secondary'
                        size='large'
                    >
                        INICIAR SESIÓN
                    </Button>

                }
            </FormGroup>
        </div>
    )
}

export { LoginForm }