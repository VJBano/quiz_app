import React from 'react'
import {Link} from 'react-router-dom'
const Signup_Page = () => {
  return (
    <div className="bg-gray-200 h-screen font-sans">
    <div className="container mx-auto h-full flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              User Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" >
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********"/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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
  )
}

export default Signup_Page