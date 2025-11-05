export type UserRole = 'admin' | 'user';

export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    is_active: boolean;
    last_login?: string;
    created_at: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    data : {
        user: UserRole;
        token: string;
    };
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    role?: UserRole;
}

export interface RegisterResponse {
    success: boolean;
    message: string;
    data : User;
}

export interface ProfileResponse {
    success: boolean;
    data: User;
}

export interface ApiError {
    success: false;
    errror: string;
}