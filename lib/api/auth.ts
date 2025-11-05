import { LoginRequest, LoginResponse, ProfileResponse, RegisterRequest, RegisterResponse } from "../types/auth";
import { apiClient } from "./client";


export const authApi = {
    
    login: async (credentials: LoginRequest): Promise<LoginResponse> => {
        const response = await apiClient.post<LoginResponse>('/auth/login', credentials);

        if (response.success && response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response;
    },

    register: async (userData: RegisterRequest): Promise<RegisterResponse> => {
        return apiClient.post<RegisterResponse>('/auth/register', userData);
    },

    getProfile: async (): Promise<ProfileResponse> => {
        return apiClient.get<ProfileResponse>('auth/profile');
    },

    updateProfile: async (userData: Partial<RegisterRequest>): Promise<ProfileResponse> => {
        return apiClient.put<ProfileResponse>('auth/profile', userData);
    },

    logout: (): void => {
        localStorage.removeItem('token');
    },
}