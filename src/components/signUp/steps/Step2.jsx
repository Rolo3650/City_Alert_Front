import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import { useSignUp } from '../../../hooks/user/useSignUp'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { config } from '../../../utils/config';
import { useErrorHandler } from '../../../hooks/error/useErrorHandler';

const Step2 = () => {

    const { sign_up, setEmail, setPassword } = useSignUp();
    const { errorHandler } = useErrorHandler();
    const { password, email } = sign_up;

    const { regex } = config

    const onChangeEmail = (ev) => {
        let obj = { value: ev.target.value, error: '' }
        if (regex.email_on_change.test(ev.target.value)) {
            if (ev.target.value != email.confirmation) {
                obj.error = "Los correos no coinciden"
            }
            setEmail(obj)
        }
    }

    const onChangeEmailConfirmation = (ev) => {
        let obj = { confirmation: ev.target.value, error: '' }
        if (regex.email_on_change.test(ev.target.value)) {
            if (ev.target.value != email.value) {
                obj.error = "Los correos no coinciden"
            }
            setEmail(obj)
        }
    }

    const onChangePassword = (ev) => {
        let obj = { value: ev.target.value, error: '' }
        if (ev.target.value != password.confirmation) {
            obj.error = "Las contraseñas no coinciden"
        }
        setPassword(obj)
    }

    const onChangePasswordConfirmation = (ev) => {
        let obj = { confirmation: ev.target.value, error: '' }
        if (ev.target.value != password.value) {
            obj.error = "Las contraseñas no coinciden"
        }
        setPassword(obj)
    }

    return (
        <div className='d-grid algin-items-center'>
            <div className='grid columns-2 gap-column-20 mb-4 columns-mobile-to-1 gap-row-20 rows-px-56'>
                <TextField
                    label='Correo'
                    variant='outlined'
                    value={email.value}
                    onChange={onChangeEmail}
                    error={errorHandler(email.error)}
                />
                <TextField
                    label='Confirmación de Correo'
                    variant='outlined'
                    onChange={onChangeEmailConfirmation}
                    error={errorHandler(email.error)}
                    value={email.confirmation}
                    helperText={email.error}
                />
            </div>
            <div className='grid columns-2 gap-column-20 mb-4 columns-mobile-to-1 gap-row-20 rows-px-56'>
                <FormControl variant='outlined' className='mb-5'>
                    <InputLabel htmlFor="outlined-adornment-password-1" error={errorHandler(password.error)}>Contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-1"
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
                        error={errorHandler(password.error)}
                        onChange={onChangePassword}
                        label="Contraseña"
                    />
                </FormControl>
                <FormControl variant='outlined' className='mb-5'>
                    <InputLabel htmlFor="outlined-adornment-password-2" error={errorHandler(password.error)}>Contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-2"
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
                        value={password.confirmation}
                        onChange={onChangePasswordConfirmation}
                        error={errorHandler(password.error)}
                        label="Contraseña"
                    />
                    {errorHandler(password.error) ? <FormHelperText error>Las contraseñas no coinciden</FormHelperText> : null}
                </FormControl>
            </div>
        </div>
    )
}

export { Step2 }