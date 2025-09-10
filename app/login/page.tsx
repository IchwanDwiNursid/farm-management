import LoginForm from '@/components/login/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
        <div className="col-12 col-xl-3 mx-auto border border-2 p-4 border-primary rounded" style={{marginTop: "300px"}}>
            <h1 className='text-center'>Login Page</h1>
            {/* Login Form */}
            <LoginForm/>
        </div>
  )
}

export default LoginPage