import { useLocation } from "react-router-dom"
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";
import { useQuery } from "react-query";

export const useBooks = () => {
    const location = useLocation();
    
    const params = new URLSearchParams(location.search);

    // 첫번째 인자: key -> 키의 변화가 있을때 리패치함
    // 키가 동적으로 생성됨
    const { data: booksData, isLoading: isBooksLoading } = useQuery(['books', location.search],
        () => 
            fetchBooks({
                category_id: params.get(QUERYSTRING.CATEGORY_ID) 
                ? Number(params.get(QUERYSTRING.CATEGORY_ID))
                : undefined ,
                news: params.get(QUERYSTRING.NEWS) ? true : undefined,
                currentPage: params.get(QUERYSTRING.PAGE) 
                ? Number(params.get(QUERYSTRING.PAGE))
                : 1,
                limit: LIMIT,
            })
    );

    return { 
        books: booksData?.books,
        pagination: booksData?.pagination,
        isEmpty: booksData?.books.length === 0,
        isBooksLoading
     };
};