import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Forget_Pass_Page from '../pages/forget_pass_page'
import Landing_Page from '../pages/landing_page'

import Signup_Page from '../pages/signup_page'

const Public_Routes = () => {
  return (
   
    <Routes>
        <Route path='/' element={<Landing_Page/>}/>
        <Route path='/login/*' element={<Landing_Page/>}/>
        <Route path='/signup/*' element ={<Signup_Page/>}/>
        <Route path={"/forget-password"} element={<Forget_Pass_Page/>}/>
    </Routes>
  )
}

export default Public_Routes