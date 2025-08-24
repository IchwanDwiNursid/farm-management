"use client"
import { registerUser } from '@/service/action';
import {RegisterSchema, RegisterType } from '@/types/input'
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm } from "react-hook-form";

const RegisterForm = () => {
    const {
        handleSubmit,
        formState:{ errors},
        register,
        control
    } = useForm<RegisterType>({
        mode: "all",
        resolver: zodResolver(RegisterSchema)
    })

    const onSubmit = async (data: RegisterType) => {
        await registerUser(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" {...register('username')} className="form-control bg-transparent" id="username" />
                <div aria-live="polite" aria-atomic={true}>
                    <span className="text-danger mt-2">{errors.username?.message}</span>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" {...register("password")} className="form-control bg-transparent" id="password" />
                <div aria-live="polite" aria-atomic={true}>
                    <span className="text-danger mt-2">{errors.password?.message}</span>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">Jenis</label>
                <select {...register("role")} className="form-select bg-transparent" id="role">
                    <option defaultValue="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <div aria-live="polite" aria-atomic={true}>
                    <span className="text-danger mt-2">{errors.role?.message}</span>
                </div>
            </div>
            <div className='text-end'>
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
    </form>
  )
}

export default RegisterForm