import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, CircularProgress, FormControl, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useLogin } from '../../hooks/login/useLogin';
import { config } from '../../utils/config'

const LoginForm = () => {

    const { login, setLogin, setEmail, setPassword } = useLogin();
    const { password, email, loading } = login;

    const { regex } = config;

    const onChangeEmail = (ev) => {
        if (regex.email_on_change.test(ev.target.value)) {
            setEmail({ value: ev.target.value })
        }
    }

    const onChangePassword = (ev) => {
        setPassword({ value: ev.target.value })
    }

    const onSubmit = () => {

        

    }

    const disableSubmit = () => {

        if (!regex.email.test(email.value) || !password.value) {
            return true
        } else {
            return false
        }

    }

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
                    value={email.value}
                    onChange={onChangeEmail}
                    error={email.error}
                    required
                />
                <FormControl variant='outlined' className='mb-5' required>
                    <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={password.show_password ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { setPassword({ show_password: !password.show_password }) }}
                                    onMouseDown={(event) => { event.preventDefault() }}
                                    edge="end"
                                >
                                    {password.show_password ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        value={password.value}
                        onChange={onChangePassword}
                        label="Contraseña"
                    />
                </FormControl>
                {loading ?
                    <CircularProgress
                        color='secondary'
                        className='mx-auto'
                    />
                    :
                    <Button
                        variant="contained"
                        color='secondary'
                        size='large'
                        onClick={onSubmit}
                        disabled={disableSubmit()}
                    >
                        INICIAR SESIÓN
                    </Button>

                }
            </FormGroup>
        </div>
    )
}

export { LoginForm }