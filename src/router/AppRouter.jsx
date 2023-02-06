import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Index } from '../pages/Index'

export const AppRouter = () => {
    return (
        <Routes>
            {/* Index */} <Route path="/" element={<Index />} />
        </Routes>
    )
}
