import { Axios } from "axios";
import { RestArrayBookResponse, RestArrayBookResponseSchema } from "../common/io-schemas";
import { mapArrayResponse } from "../common/mappers";
import { IBookService } from "~/contracts/services";

type BookListFetcher = IBookService["getBooks"];

export interface CreateBookListFetcherDependencies {
  readonly httpClient: Axios;
}

export interface CreateBookListFetcherOptions {
  readonly url: string;
}

type CreateBookListFetcher = (
  dependencies: CreateBookListFetcherDependencies,
  options: CreateBookListFetcherOptions
) => BookListFetcher;

export const createBookListFetcher: CreateBookListFetcher =
  ({ httpClient }, { url }) =>
  async () => {
    try {
      const { data } = await httpClient.get(url);
      try {
        const parsedResponse: RestArrayBookResponse = RestArrayBookResponseSchema.parse(data);
        try {
          return mapArrayResponse(parsedResponse);
        } catch (e) {
          console.error("err: get-books: exception while mapping response");
        }
      } catch (e) {
        console.error("err: get-books: parsing exception while verifying list results");
      }
    } catch (e) {
      console.error("err: get-books: network error while fetching book results");
    }
    return [];
  };
