"use client";

import { useAuth, useLogout } from "@/hooks/useAuth";
import { User } from "@/lib/types/auth";
import { createContext, useContext } from "react";

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children} : {children: React.ReactNode}) => {
    const { user, isLoading, isAuthenticated } = useAuth();
    const logout = useLogout();

    const value = {
        user,
        isLoading,
        isAuthenticated,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}