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
        })
    
        return response.data;
    } catch (error) {
        return {
            books: [],
            pagination: {
                totalCount: 0,
                currentPage: 0
            }
        }
    }
}