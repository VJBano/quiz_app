import { url } from 'inspector';
import React, { SyntheticEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import  "../assets/custom_css/landing_custom.css"
import { UserList } from '../models/users_types/users_types';
import { ID_Generator } from '../services/id_generator';
import { CreateUser } from '../firebase/user_repo';

const Landing_Page = () => {
    const navigate = useNavigate();

    const handleLogin = (e:SyntheticEvent) => {
        e.preventDefault();

        

        const data:UserList = {
            id:ID_Generator(),
            username:"vanz",
            email:"vanz@gmail.com",
            password:"123",
            recoveryKey:"bodong"
        }

        CreateUser(data).then((res) => {

            alert(res)
            
        })
        // navigate('/home');
    }
  return (
    <div className="landing_img_bg relative flex flex-col justify-center min-h-screen overflow-hidden" >
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Quiz App
                </h1>
                <form className="mt-6" onSubmit={handleLogin}>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 border-gray-400 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 border-gray-400 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
  )
}

export default Landing_Page