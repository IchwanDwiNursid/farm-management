"use client";

import { createContext, useContext, useEffect, useState } from "react";

type UserType = {
    username: string,
    role: string
} | null

type UserContextType = {
    userData: UserType | null,
    loading: boolean,
    refetchUser: () => Promise<void>
}

const UserContext = createContext<UserContextType| undefined>(undefined);
export const UserProvider = ({ children}: { children: React.ReactNode}) => {
    const [userData, setUserData] = useState<UserType| null>(null);
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const response = await fetch('/api/me',{
            method: "GET",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const data = await response.json() as UserType;
        setUserData({username: data?.username ?? '', role: data?.role ?? ''});
        setLoading(false);
        return data;
    }

    const refetchUser = async () => {
        setLoading(true);
        const data = await fetchData();
        setUserData({username: data?.username ?? '', role: data?.role ?? ''});
    }

    useEffect(() => {
        const hasToken = document.cookie.includes('token');
        console.log("Has token:", hasToken);
        if(hasToken){
            refetchUser()
        }else {
            setUserData(null)
            setLoading(false)
        }
    },[])

    return (
        <UserContext.Provider value={{userData, loading, refetchUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}