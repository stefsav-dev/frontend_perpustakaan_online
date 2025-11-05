export interface Book {
    id: number;
    title: string;
    author: string;
    isbn : string;
    description: string;
    category: string;
    total_pages: number;
    publisher: string;
    published_at: string;
    quantity: number;
    available: number;
    status: 'available' | 'borrowed' | 'maintenance';
    created_at: string;
    updated_at: string;
}

export interface BookResponse {
    success: boolean;
    data: Book[];
    meta: {
        total: number;
        page: number;
        limit: number;
        total_pages: number;
    };
}

export interface BookFilter {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    category?: string;
}