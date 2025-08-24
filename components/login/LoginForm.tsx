"use client"
import { login } from '@/service/action';
import { LoginSchema, LoginType } from '@/types/input'
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from 'react';
import {useForm } from "react-hook-form";

const LoginForm = () => {
    const [error,setError] = useState<string| null>(null);
    const {
        handleSubmit,
        formState:{ errors},
        register,
        control
    } = useForm<LoginType>({
        mode: "all",
        resolver: zodResolver(LoginSchema)
    })

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError("");
            }, 3000); // 5000 ms = 5 detik
            return () => clearTimeout(timer); // bersihkan timer kalau error berubah
        }
    }, [error]);

    const onSubmit = async (data: LoginType) => {
            const result = await login(data.username,data.password)
            if (result.error){
                setError(result.error);
            }
        }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <div role="alert">
                    <h6 className='text-danger text-center'>{error}</h6>
                </div>
            )}
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
            <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
    </form>
  )
}

export default LoginForm