import axios from "axios";
import { IBookService } from "~/contracts/services";
import config from "~/services/book/config";
import { createBookListFetcher, CreateBookListFetcherDependencies } from "~/services/book/resolvers/get-books-list";
import {
  createBookSingleFetcher,
  CreateBookSingleFetcherDependencies
} from "~/services/book/resolvers/get-book-by-slug";
import createRemoteApiMocks from "~/services/book/mocker";

const NAME = "BOOK_REST_SERVICE";

type BookRestService = IBookService;

type CreateBookRestServiceDependencies = CreateBookListFetcherDependencies & CreateBookSingleFetcherDependencies;

interface CreateBookRestServiceOptions {
  readonly baseUrl: string;
}

type CreateBookRestService = (
  dependencies: CreateBookRestServiceDependencies,
  options: CreateBookRestServiceOptions
) => BookRestService;

export const createBookRestService: CreateBookRestService = ({ httpClient }, { baseUrl }) => {
  return {
    getBooks: createBookListFetcher({ httpClient }, { url: `${baseUrl}${config.BOOK.ENDPOINTS.ALL}` }),
    getBook: createBookSingleFetcher({ httpClient }, { url: `${baseUrl}${config.BOOK.ENDPOINTS.GET_BY_SLUG}` })
  };
};

const axiosClient = axios.create();

if (!import.meta.env.PROD) {
  if (import.meta.env.ENABLE_MOCK) {
    console.log(`dev: mocking httpClient for ${NAME}`);
    createRemoteApiMocks(axiosClient);
  }
}

const restBookService: IBookService = createBookRestService(
  { httpClient: axiosClient },
  { baseUrl: config.BASE_API_URL }
);

export default restBookService;
