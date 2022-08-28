import { Axios } from "axios";
import { RestSingleBookResponse, RestSingleBookResponseSchema } from "../common/io-schemas";
import { mapSingleResponse } from "../common/mappers";
import { IBookService } from "~/contracts/services";

type BookSingleFetcher = IBookService["getBook"];

export interface CreateBookSingleFetcherDependencies {
  readonly httpClient: Axios;
}

export interface CreateBookSingleFetcherOptions {
  readonly url: string;
}

type CreateBookSingleFetcher = (
  dependencies: CreateBookSingleFetcherDependencies,
  options: CreateBookSingleFetcherOptions
) => BookSingleFetcher;

export const createBookSingleFetcher: CreateBookSingleFetcher =
  ({ httpClient }, { url }) =>
  async ({ slug }) => {
    try {
      const { data } = await httpClient.get(url.replace("{slug}", slug));
      try {
        const parsedResponse: RestSingleBookResponse = RestSingleBookResponseSchema.parse(data);
        try {
          return mapSingleResponse(parsedResponse);
        } catch (e) {
          console.error("err: get-books: exception while mapping response");
        }
      } catch (e) {
        console.error("err: get-books: parsing exception while verifying list results");
      }
    } catch (e) {
      console.error("err: get-books: network error while fetching book results");
    }
  };
