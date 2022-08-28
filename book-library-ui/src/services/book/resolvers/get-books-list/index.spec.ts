import { afterEach, describe, expect, test, vi } from "vitest";
import { define } from "cooky-cutter";
import { AxiosInstance } from "axios";
import { faker } from "@faker-js/faker";
import { RestArrayBookResponse } from "../common/io-schemas";
import { createBookListFetcher, CreateBookListFetcherDependencies, CreateBookListFetcherOptions } from "./index";
import { IBook } from "~/contracts/data";

function createDependencies(httpGet: AxiosInstance["get"]): CreateBookListFetcherDependencies {
  return {
    httpClient: {
      get: httpGet
    } as AxiosInstance
  };
}

const optionsFactory = define<CreateBookListFetcherOptions>({
  url: faker.internet.url()
});

const restBookArrayResponseFactory = define<RestArrayBookResponse>({
  books: () => [
    {
      author: faker.name.fullName(),
      cover: faker.image.imageUrl(),
      rating: faker.random.numeric(3),
      synopsis: faker.lorem.text(),
      slug: faker.lorem.slug(20),
      title: faker.lorem.words(10),
      upvoted: faker.datatype.boolean(),
      upvotes: parseInt(faker.random.numeric(3))
    }
  ]
});

describe("get-books", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("calls the correct API URL", async () => {
    const httpGet = vi.fn().mockResolvedValue({ data: restBookArrayResponseFactory() });
    const options = optionsFactory();
    const dependencies = createDependencies(httpGet);
    const booksFetcher = createBookListFetcher(dependencies, options);
    const expectedUrl = options.url;

    await booksFetcher();

    expect(httpGet).toHaveBeenCalled();
    expect(httpGet).toHaveBeenCalledWith(expectedUrl);
  });

  test("returns the correct mapped values", async () => {
    const remoteResponse = restBookArrayResponseFactory();
    const httpGet = vi.fn().mockResolvedValue({ data: remoteResponse });
    const options = optionsFactory();
    const dependencies = createDependencies(httpGet);
    const booksFetcher = createBookListFetcher(dependencies, options);
    const expected: IBook[] = [
      {
        author: remoteResponse.books[0].author,
        cover: remoteResponse.books[0].cover,
        rating: remoteResponse.books[0].rating,
        synopsis: remoteResponse.books[0].synopsis,
        slug: remoteResponse.books[0].slug,
        title: remoteResponse.books[0].title,
        upVoted: remoteResponse.books[0].upvoted,
        upVotes: remoteResponse.books[0].upvotes
      }
    ];

    const actual = await booksFetcher();

    await expect(actual).toStrictEqual(expected);
  });
});
