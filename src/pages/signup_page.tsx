import React, { SyntheticEvent, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Add_User } from '../firebase/add_user'
import { UserList } from '../models/users_types/users_types'
import { ID_Generator } from '../services/id_generator'
import { Key_Generator } from '../services/key_generator'
import { hashPassword } from '../services/password_hash'

const Signup_Page = () => {

  console.log("key:", Key_Generator(10))
  console.log("id:", ID_Generator())

  const nav = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hashPasswords, setHashPasswords] = useState('')
  const [result, setResult] = useState('')
 const [isClicked, setIsClicked] = useState(false)
  console.log("key:", username)
  let msg

  const handleSignUP = (e:SyntheticEvent) => {

    e.preventDefault()

    hashPassword(password).then(res =>{ 
      setHashPasswords(res)
    })

  const data:UserList = {
    id:ID_Generator(),
    username:username,
    email:email,
    password:hashPasswords,
    recoveryKey:Key_Generator(10)
  }

  Add_User(data).then(res => {
    setResult(res)
    setIsClicked(true)
  })

  

  }

  if(isClicked){

    if(result.includes("Successfully")){
      msg = <h1 className='text-green-500'>"Account Successfully Created"</h1>
      setTimeout(() => {
        nav(-1)

      }, 1000);
    } else {
      msg = <h1 className='text-red-500'>"Account Unsuccessfully Created"</h1>

    }

  } else {
    msg = ""
  }
 
  


  return (


    <div className={`landing flex items-center justify-center `} >

    <div className={`transition-opacity duration-1000 opacity-1 w-full max-w-sm`}>
      <div className="bg-white rounded-lg shadow-m  d p-6">
        
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignUP}>
        {msg}
           <div className="mb-4">
             <label className="block text-gray-700 font-bold mb-2" >
               User Name
             </label>
             <input required value={username} onChange={e => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
           </div>
           <div className="mb-4">
             <label className="block text-gray-700 font-bold mb-2" >
               Email
             </label>
             <input required value={email} onChange={e => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
           </div>
           <div className="mb-6">
             <label className="block text-gray-700 font-bold mb-2" >
               Password
             </label>
             <input required value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********"/>
           </div>
           <div className="flex items-center justify-between">
             <button className="flex w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="submit">
               Sign Up
             </button>
             <Link to={"/"} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
               Already have an account? Sign In
             </Link>
           </div>
         </form>
      </div>
      
    </div>
  </div>

  //   <div className="bg-gray-200 h-screen font-sans">
  //   <div className="container mx-auto h-full flex items-center justify-center">
  //     <div className="w-full max-w-xs">
  //       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  //         <div className="mb-4">
  //           <label className="block text-gray-700 font-bold mb-2" >
  //             User Name
  //           </label>
  //           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
  //         </div>
  //         <div className="mb-4">
  //           <label className="block text-gray-700 font-bold mb-2" >
  //             Email
  //           </label>
  //           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
  //         </div>
  //         <div className="mb-6">
  //           <label className="block text-gray-700 font-bold mb-2" >
  //             Password
  //           </label>
  //           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********"/>
  //         </div>
  //         <div className="flex items-center justify-between">
  //           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
  //             Sign Up
  //           </button>
  //           <Link to={"/"} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
  //             Already have an account? Sign In
  //           </Link>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // </div>
  )
}

export default Signup_Page