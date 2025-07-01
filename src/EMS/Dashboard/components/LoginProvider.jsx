import React, { useState } from 'react'
import { LoginContext } from './LoginContext';

const LoginProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const login=(userData)=>{
        setUser(userData);
    }
  return (
    <LoginContext.Provider value={{user,login}}>
     {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;