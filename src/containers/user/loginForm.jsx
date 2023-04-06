import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, CircularProgress, FormControl, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useErrorHandler } from '../../hooks/error/useErrorHandler';
import { useLogin } from '../../hooks/user/useLogin';
import { config } from '../../utils/config'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const { login, setLogin, setEmail, setPassword, signIn } = useLogin();
    const { password, email, loading } = login;
    const navigateTo = useNavigate();
    const { errorHandler } = useErrorHandler();

    const { regex } = config;

    const onChangeEmail = (ev) => {
        if (regex.email_on_change.test(ev.target.value)) {
            setEmail({ value: ev.target.value, error: '' })
        }
    }

    const onChangePassword = (ev) => {
        setPassword({ value: ev.target.value, error: '' })
    }

    const onSubmit = async () => {
        setLogin({ loading: true })
        const loged = await signIn()
        if (loged) {
            setTimeout(() => {
                navigateTo('/home')
            }, 500);
        }
    }

    const isDisabled = () => {

        if (regex.email.test(email.value) && password.value) {
            return false;
        } else {
            return true;
        }

    }

    useEffect(() => {

    

    }, [])

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
                    error={errorHandler(email.error)}
                    helperText={email.error ? email.error : " "}
                />
                <FormControl variant='outlined' className='mb-5'    >
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
                        error={errorHandler(password.error)}
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
                        disabled={isDisabled()}
                    >
                        INICIAR SESIÓN
                    </Button>

                }
            </FormGroup>
        </div>
    )
}

export { LoginForm }