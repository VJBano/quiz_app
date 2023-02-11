import React, { SyntheticEvent } from 'react'
import { Add_Sample, } from '../firebase/add_sample'
import { UserList } from '../models/users_types/users_types'

const Login_Page = () => {

  const sample:UserList = ({
    id : 2468,
    username: "yow",
    email: "vanz@gmail.com",
    password:"vince",
    recoveryKey:"art"
  })


  const add = async (e:SyntheticEvent) =>{
    e.preventDefault()
   Add_Sample(sample).then(res => {
    console.log("Hello: ",res)
   }).catch(err => {
    console.log("err: ",err)
   })
    // 
  }
  return (
    <button onClick={add}>Login_Page</button>
  )
}

export default Login_Page