import { describe, expect, test } from "vitest";
import { array } from "cooky-cutter";
import { IBook } from "~/contracts/data";
import usePagination from "~/composables/usePagination";
import BookFactory from "~setup/testing/factories/book";

describe("Use Pagination", () => {
  test("should give current page number", () => {
    const books = $ref(array(BookFactory, 20)() as IBook[]);
    const perPage = $ref(2);
    const expectedPageNumber = 1;

    const { getCurrentPage } = usePagination($$(books), $$(perPage));

    expect(getCurrentPage()).toEqual(expectedPageNumber);
  });

  test("should give correct number of subset items", () => {
    const books = $ref(array(BookFactory, 20)() as IBook[]);
    const perPage = $ref(2);

    const { paginatedData } = usePagination($$(books), $$(perPage));

    expect(paginatedData.value.length).toEqual(perPage);
  });

  test("should give next page data", () => {
    const books = $ref(array(BookFactory, 20)() as IBook[]);
    const perPage = $ref(2);

    const { paginatedData, goToNextPage } = usePagination($$(books), $$(perPage));
    goToNextPage();

    expect(paginatedData.value).toStrictEqual(books.slice(perPage, perPage + perPage));
  });

  test("should not do anything when there is no next page", () => {
    const books = $ref(array(BookFactory, 4)() as IBook[]);
    const perPage = $ref(2);

    const { paginatedData, goToNextPage } = usePagination($$(books), $$(perPage));
    goToNextPage();
    const previousDataState = paginatedData.value;
    goToNextPage();

    expect(paginatedData.value).toStrictEqual(previousDataState);
  });

  test("should give previous page data", () => {
    const books = $ref(array(BookFactory, 20)() as IBook[]);
    const perPage = $ref(2);

    const { paginatedData, goToNextPage, goToBackPage } = usePagination($$(books), $$(perPage));
    goToNextPage();
    goToNextPage();
    goToNextPage();
    goToBackPage();

    expect(paginatedData.value).toStrictEqual(books.slice(perPage + perPage, perPage + perPage + perPage));
  });

  test("should not do anything when there is no previous page", () => {
    const books = $ref(array(BookFactory, 10)() as IBook[]);
    const perPage = $ref(2);

    const { paginatedData, goToBackPage } = usePagination($$(books), $$(perPage));
    const previousDataState = paginatedData.value;
    goToBackPage();

    expect(paginatedData.value).toStrictEqual(previousDataState);
  });

  test("should give page data for any in-range supplied page number", () => {
    const books = $ref(array(BookFactory, 20)() as IBook[]);
    const perPage = $ref(2);
    const toGoPage = 5;

    const { paginatedData, goToPage } = usePagination($$(books), $$(perPage));
    goToPage(5);

    expect(paginatedData.value).toStrictEqual(books.slice((toGoPage - 1) * perPage, toGoPage * perPage));
  });

  test("should not do anything when supplied page number is not in range", () => {
    const books = $ref(array(BookFactory, 10)() as IBook[]);
    const perPage = $ref(2);

    const { paginatedData, goToPage } = usePagination($$(books), $$(perPage));
    const previousDataState = paginatedData.value;
    goToPage(0);
    goToPage(21);

    expect(paginatedData.value).toStrictEqual(previousDataState);
  });
});
