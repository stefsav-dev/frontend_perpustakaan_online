import { Book, BookFilter, BookResponse } from "../types/books";
import { apiClient } from "./client";


export const booksApi = {
    
    getAll: async (filters?: BookFilter): Promise<BookResponse> => {
        return apiClient.get<BookResponse>('/books', filters);
    },

    getById: async (id: number): Promise<Book> => {
        return apiClient.get<Book>(`/books/${id}`);
    },

    create: async (bookData: Omit<Book, 'id' | 'created_at' | 'updated_at'>): Promise<Book> => {
        return apiClient.post<Book>('/books', bookData);
    },

    update: async (id: number, bookData: Partial<Book>): Promise<Book> => {
        return apiClient.put<Book>(`/books/${id}`, bookData);
    },

    delete: async (id: number): Promise<{ success: boolean; message: string }> => {
        return apiClient.delete(`/books/${id}`);
    },

    updateStatus: async (id: number, status: string): Promise<Book> => {
        return apiClient.put<Book>(`/books/${id}/status`, { status });
    }
}