import RegisterForm from '@/components/admin/Register'
import React from 'react'

function AdminRegisterPage() {
  return (
    <div className="row mx-2" style={{ marginTop: 50 }}>
        <div className="col-12 col-xl-3 mx-auto border border-2 p-4 border-primary rounded">
            <h1>Register Page</h1>
            <RegisterForm/>
        </div>
    </div>
  )
}

export default AdminRegisterPage