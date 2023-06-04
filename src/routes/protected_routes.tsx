import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home_page from '../pages/home_page'
import Auth_Routes from './auth_routes'

const Protected_Routes = () => {

  return (
    <Routes>
        <Route path='/home' element={<Auth_Routes><Home_page/></Auth_Routes>}/>
    </Routes>
  )
}

export default Protected_Routes