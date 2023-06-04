import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'

type User  = {
  email:string;
  password:string;
}

interface UserContextInterface {
  user:User;
  setUser:React.Dispatch<React.SetStateAction<User>>;
   
}

const defaultState = {
  user: {
    email:"",
  password: "",
  },
  
  setUser: (user:User) =>{}
} as UserContextInterface


const AuthContext = createContext(defaultState)

type ContextProps = {
  children:ReactNode;
}
export const Auth_Prodiver = ({children}:ContextProps) => {

  const [user, setUser] = useState<User>({
    email: "",
    password: ""
  })

  return (
    <AuthContext.Provider value={{user, setUser}} >
      {children}
    </AuthContext.Provider>
  )
}  

export default Auth_Prodiver
