import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Index } from '../pages/Index'
import { Home } from '../pages/Home/Home'
import { SignUp } from '../pages/SignUp/SignUp'
import { User } from '../pages/User/User'

export const AppRouter = () => {
    return (
        <Routes>
            {/* Index */} <Route path="/" element={<Index />} />
            {/* Sign Up */} <Route path="/sign-up" element={<SignUp />} />
            {/* Home */} <Route path="/home" element={<Home />} />
            {/* Home - Search */} <Route path="/home/:query" element={<Home />} />
            {/* User */} <Route path="/user/:id" element={<User />} />
        </Routes>
    )
}
