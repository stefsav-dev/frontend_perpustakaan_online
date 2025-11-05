"use client";

import { booksApi } from "@/lib/api/books";
import { BookFilter } from "@/lib/types/books";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBooks = (filters?: BookFilter) => {
    return useQuery({
        queryKey: ['books', filters],
        queryFn: () => booksApi.getAll(filters).then(res => res.data),
        staleTime: 5 * 60 * 1000,
    });
};

export const useBook = (id: number) => {
    return useQuery({
        queryKey: ['book', id],
        queryFn: () => booksApi.getById(id),
        enabled: !!id,
    })
}

export const useCreateBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: booksApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] });
        },
    });
};

export const useUpdateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Book> }) => 
      booksApi.update(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      queryClient.invalidateQueries({ queryKey: ['book', variables.id] });
    },
  });
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: booksApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};