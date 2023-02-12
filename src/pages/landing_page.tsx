import React from 'react'

const Landing_Page = () => {
  return (

    <div className="bg-gray-100 h-screen flex items-center justify-center">
  <div className="w-full max-w-sm">
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">Quiz App</h1>
      <p className="text-gray-700 mb-4">Sign in to access our quizzes and track your progress.</p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" >Username</label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="username" type="text"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="password" type="password"/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Sign In</button>
          <a className="inline-block align-baseline font-medium text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Landing_Page