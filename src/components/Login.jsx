import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

      const navigate =  useNavigate();

    function onSubmit() {
        // code of checking user credentials 
        // if credentails is valid, liogin succes

        navigate('/dashboard')
    }

  return (
    <div>
        <h1>Login Page for Employee</h1>
        <button onClick={onSubmit} >Login</button>
    </div>
  )
}

export default Login