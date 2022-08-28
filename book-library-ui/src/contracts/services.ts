import { IBook } from "~/contracts/data";
import { InjectionKey } from "vue";

export interface IBookService {
  getBooks: () => Promise<IBook[]>;
  getBook: (fetcherOptions: Pick<IBook, "slug">) => Promise<IBook | undefined>;
}
export const BOOK_SERVICE = Symbol("IBookService") as InjectionKey<IBookService>;
