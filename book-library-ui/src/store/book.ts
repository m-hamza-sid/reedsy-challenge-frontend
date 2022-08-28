import { acceptHMRUpdate, defineStore } from "pinia";
import Fuse from "fuse.js";
import { IBook } from "~/contracts/data";

export const useBookStore = defineStore("book", () => {
  const _searchObject = new Fuse([], {
    isCaseSensitive: true,
    keys: ["title", "synopsis"]
  });
  let allBooks: IBook[] = [];
  const searchedBooks = ref<IBook[]>([]);

  /**
   * Stores the books for inter-component usage.
   *
   * @param remoteBooks
   */
  function setBooks(remoteBooks: IBook[]) {
    allBooks = remoteBooks;
    searchedBooks.value = remoteBooks;
    _searchObject.setCollection(remoteBooks as any);
  }

  /**
   * Searches the books for inter-component usage.
   *
   * @param keyword
   */
  function search(keyword: string) {
    if (!keyword) searchedBooks.value = allBooks;
    searchedBooks.value = _searchObject.search(keyword).map((result) => result.item);
  }

  /**
   * Reset Search Cache the books for inter-component usage.
   */
  function reset() {
    searchedBooks.value = allBooks;
  }

  return {
    books: searchedBooks,
    reset,
    search,
    setBooks
  };
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useBookStore, import.meta.hot));
