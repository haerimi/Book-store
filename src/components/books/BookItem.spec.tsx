import { render } from '@testing-library/react'
import React from 'react'
import BooksItem from './BooksItem'
import { BookStoreThemeProvider } from '../../context/themeContext'
import { Book } from '../../models/book.model';

const dummyBook: Book = {
    id: 1,
    title: 'Dummy Book',
    img: 5,
    category_id: 1,
    summary: "Dummy Summery",
    author: "Dummy Author",
    pages: 1000,
    price: 10000,
    likes: 1,
    contents: "Dummy Contents",
    form: "paperback",
    isbn: 'Dummy ISBN',
    detail: "Dummy Detail",
    pubDate: '2021-01-01',
};
 
describe("BookItem", () => {
    it("렌더 여부", () => {
        const { getByText } = render(
            <BookStoreThemeProvider>
                <BooksItem book={dummyBook} />
            </BookStoreThemeProvider>
        )

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText(dummyBook.price)).toBeInTheDocument();
    })
})