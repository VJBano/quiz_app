import React, { Children, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

interface AuthRoutesProps {
    children :ReactNode;
}

const Auth_Routes = ({children}: AuthRoutesProps) => { 
    
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if(user) {
        setLoading(false)
    } else {
        console.log("not Logged!, unAuthorized")
        navigate('/login')
    }
  });

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  if (loading) {
    return (<p>Loading...</p>)
  }
  return <div>{children}</div>;
};

export default Auth_Routes;
