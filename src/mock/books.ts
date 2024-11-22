import { Book, BookReviewItem } from "@/models/book.model";
import { http, HttpResponse } from "msw";
import { fakerKO as faker } from "@faker-js/faker";

const books = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  title: faker.lorem.sentence(),
  img: faker.number.int({ min: 100, max: 200 }), // 수정
  category_id: faker.number.int({ min: 0, max: 2 }), // 수정
  form: "종이책",
  isbn: faker.string.alphanumeric(13), // faker.commerce.isbn() 대신 사용
  summary: faker.lorem.paragraph(),
  detail: faker.lorem.paragraph(),
  author: faker.person.firstName(),
  pages: faker.number.int({ min: 100, max: 500 }), // 수정
  contents: faker.lorem.paragraph(),
  price: faker.number.int({ min: 10000, max: 50000 }), // 수정
  likes: faker.number.int({ min: 0, max: 100 }), // 수정
  pubDate: faker.date.past().toISOString(),
}));

export const bestBooks = http.get("http://localhost:1126/books/best", () => {
  return HttpResponse.json(books, {
    status: 200,
  });
});
