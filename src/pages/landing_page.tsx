import React, { SyntheticEvent, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../assets/landing_custom.css';
const Landing_Page = () => {

  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    setOpacity(1);
  }, []);

  const handleLogin =async (e:SyntheticEvent) => {
    
    e.preventDefault()

    alert('Hello')
  }
  
  return (

    <div className={`landing flex items-center justify-center `} >

  <div className={`transition-opacity duration-1000 opacity-${opacity} w-full max-w-sm`}>
    <div className="bg-white rounded-lg shadow-m  d p-6">
      <h1 className="text-2xl font-bold mb-4">Quiz App</h1>
      <p className="text-gray-700 mb-4">Sign in to access our quizzes and track your progress.</p>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" >Username</label>
          <input required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="username" type="text"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="password" type="password"/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Sign In</button>
          <Link to={"/forget-password"} className="inline-block align-baseline font-medium text-sm text-blue-500 hover:text-blue-800" >Forgot Password?</Link>
        </div>
      </form>
      
    </div>
    <div className="flex items-center justify-center space-x-1">
         <h1>No Account? </h1> 
        <Link to={"/signup"} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Sign Up Here
            </Link>
        </div>
  </div>
</div>
  )
}

export default Landing_Page