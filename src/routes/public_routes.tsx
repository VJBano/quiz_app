import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing_Page from '../pages/landing_page'
import Login_Page from '../pages/login_page'

const Public_Routes = () => {
  return (
   
    <Routes>
        <Route path='/' element={<Landing_Page/>}/>
        <Route path='/login' element={<Login_Page/>}/>
    </Routes>
  )
}

export default Public_Routes