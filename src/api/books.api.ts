import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FectchBooksParams {
    category_id?: number;
    news?: boolean;
    currentPage?: number;
    limit: number;
}

interface FectchBooksResponse {
    books: Book[];
    pagination: Pagination;
}

export const fetchBooks = async (params: FectchBooksParams) => {
    try  {
        const response = await httpClient.get<FectchBooksResponse>("/books", {
            params: params,
        });
    
        return response.data;
    } catch (error) {
        return {
            books: [],
            pagination: {
                totalCount: 0,
                currentPage: 1
            }
        }
    }
}

export const fetchBook = async (bookId: string) => {
    const response = await httpClient.get(`/books/${bookId}`);
    return response.data;
}

export const likeBook = async (bookId: number) => {
    const response = await httpClient.post(`/likes/${bookId}`)
    return response.data;
}

export const unlikeBook = async (bookId: number) => {
    const response = await httpClient.delete(`/likes/${bookId}`)
    return response.data;
}

export const fetchBestBooks = async () => {
  const response = await httpClient.get<Book[]>(`/books/best`);
  return response.data;
};
