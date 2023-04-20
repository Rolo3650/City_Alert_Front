import React from 'react'
import { CookiesProvider } from 'react-cookie'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { ReducerContext } from './context/useReducer'
import { Theme } from './containers/theme/Index'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterMoment } from '@mui/x-date-pickers-pro/AdapterMoment'
import 'bootstrap/scss/bootstrap.scss'
import './styles/SCSS/index.scss'
import '@sweetalert2/themes/material-ui'
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider >
      <BrowserRouter>
        <ReducerContext>

          <Theme>
            <LocalizationProvider dateAdapter={AdapterMoment}>

              <App />

            </LocalizationProvider>
          </Theme>

        </ReducerContext>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
)
