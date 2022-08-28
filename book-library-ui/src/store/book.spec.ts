import { setActivePinia, createPinia } from "pinia";
import { describe, expect, test, beforeEach } from "vitest";
import { array } from "cooky-cutter";
import { useBookStore } from "./book";
import BookFactory from "~setup/testing/factories/book";

describe("Book Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("should be empty at start", () => {
    const bookstore = useBookStore();
    expect(bookstore.books).toStrictEqual([]);
  });

  test("should have books once books are set", () => {
    const bookstore = useBookStore();
    const books = [BookFactory(), BookFactory(), BookFactory()];

    bookstore.setBooks(books);

    expect(bookstore.books).toStrictEqual(books);
  });

  test("should give searched books when asked", () => {
    const bookstore = useBookStore();
    const books = array(BookFactory, 5)();

    bookstore.setBooks(books);
    bookstore.search(books[0].title);

    expect(bookstore.books).toContain(books[0]);
  });

  test("should reset store to initial state when asked", () => {
    const bookstore = useBookStore();
    const books = [BookFactory(), BookFactory(), BookFactory()];

    bookstore.setBooks(books);
    bookstore.search(books[0].title);
    bookstore.reset();

    expect(bookstore.books).toStrictEqual(books);
  });
});
