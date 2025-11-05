'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '@/lib/api/auth';
import { LoginRequest, RegisterRequest, User } from '@/lib/types/auth';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => authApi.login(credentials),
    onSuccess: (data) => {
      // Set user data in query cache
      queryClient.setQueryData(['user'], data.data.user);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (userData: RegisterRequest) => authApi.register(userData),
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => authApi.getProfile().then(res => res.data),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: Partial<RegisterRequest>) => authApi.updateProfile(userData),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return () => {
    authApi.logout();
    queryClient.removeQueries({ queryKey: ['user'] });
    queryClient.clear();
  };
};

// Auth status hook
export const useAuth = () => {
  const { data: user, isLoading, error } = useProfile();
  
  return {
    user: user || null,
    isLoading,
    isAuthenticated: !!user && !error,
    error,
  };
};