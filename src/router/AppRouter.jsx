import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Index } from '../pages/Index'
import { Home } from '../pages/Home/Home'

export const AppRouter = () => {
    return (
        <Routes>
            {/* Index */} <Route path="/" element={<Index />} />
            {/* Home */} <Route path="/home" element={<Home />} />
        </Routes>
    )
}
