import React from 'react'

const Forget_Pass_Page = () => {
  return (
    <div className="bg-gray-200 h-screen font-sans">
    <div className="container mx-auto h-full flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
            <label className="block text-gray-700 font-bold mb-2">
              New Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pass" type="password" placeholder="New Password"/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
        
  )
}

export default Forget_Pass_Page