import LoginForm from '@/components/login/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
      <div className="row vh-100 p-4 d-flex justify-content-center align-items-center bg-danger vw-100" style={{ 
        background: "linear-gradient(135deg, #2196f3, #ffffff)" 
      }}>
          <div className="col-12 col-xl-3 mx-auto border border-2 p-4 border-primary rounded">
              <h1 className='text-center'>Login Page</h1>
              {/* Login Form */}
              <LoginForm/>
          </div>
      </div>
  )
}

export default LoginPage