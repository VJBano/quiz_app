import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing_Page from '../pages/landing_page'
import Home_page from '../pages/home_page'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing_Page/>} />
        <Route path="/quiz_app/*" element={<Landing_Page/>} />

        <Route path="/home" element={<Home_page/>} />
    </Routes>
  )
}

export default Router