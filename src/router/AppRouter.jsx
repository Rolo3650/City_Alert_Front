import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Index } from '../pages/Index'
import { Home } from '../pages/Home/Home'
import { SignUp } from '../pages/SignUp/SignUp'

export const AppRouter = () => {
    return (
        <Routes>
            {/* Index */} <Route path="/" element={<Index />} />
            {/* SIGN UP */} <Route path="/sign-up" element={<SignUp />} />
            {/* Home */} <Route path="/home" element={<Home />} />
        </Routes>
    )
}
