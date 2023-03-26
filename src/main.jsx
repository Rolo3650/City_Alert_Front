import React from 'react'
import { CookiesProvider } from 'react-cookie'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { ReducerContext } from './context/useReducer'
import 'bootstrap/scss/bootstrap.scss'
import './styles/scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider >
      <BrowserRouter>
        <ReducerContext>

          <App />

        </ReducerContext>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
)
