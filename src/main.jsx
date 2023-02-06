import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { ReducerContext } from './context/useReducer'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReducerContext>

        <App />

      </ReducerContext>
    </BrowserRouter>
  </React.StrictMode>,
)
