import { afterEach, describe, expect, test, vi } from "vitest";
import { define } from "cooky-cutter";
import { AxiosInstance } from "axios";
import { faker } from "@faker-js/faker";
import { RestSingleBookResponse } from "../common/io-schemas";
import { createBookSingleFetcher, CreateBookSingleFetcherDependencies, CreateBookSingleFetcherOptions } from "./index";
import { IBook } from "~/contracts/data";

function createDependencies(httpGet: AxiosInstance["get"]): CreateBookSingleFetcherDependencies {
  return {
    httpClient: {
      get: httpGet
    } as AxiosInstance
  };
}

const optionsFactory = define<CreateBookSingleFetcherOptions>({
  url: faker.internet.url()
});

const restBookSingleResponseFactory = define<RestSingleBookResponse>({
  author: faker.name.fullName(),
  cover: faker.image.imageUrl(),
  rating: faker.random.numeric(3),
  synopsis: faker.lorem.text(),
  slug: faker.lorem.slug(20),
  title: faker.lorem.words(10),
  upvoted: faker.datatype.boolean(),
  upvotes: parseInt(faker.random.numeric(3))
});

describe("get-book-by-slug", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("calls the correct API URL", async () => {
    const httpGet = vi.fn().mockResolvedValue({ data: restBookSingleResponseFactory() });
    const options = optionsFactory();
    const dependencies = createDependencies(httpGet);
    const booksFetcher = createBookSingleFetcher(dependencies, options);
    const booksFetcherParams = { slug: faker.lorem.slug(20) };
    const expectedUrl = options.url.replace("{slug}", booksFetcherParams.slug);

    await booksFetcher(booksFetcherParams);

    expect(httpGet).toHaveBeenCalled();
    expect(httpGet).toHaveBeenCalledWith(expectedUrl);
  });

  test("returns the correct mapped values", async () => {
    const remoteResponse = restBookSingleResponseFactory();
    const httpGet = vi.fn().mockResolvedValue({ data: remoteResponse });
    const options = optionsFactory();
    const dependencies = createDependencies(httpGet);
    const booksFetcher = createBookSingleFetcher(dependencies, options);
    const booksFetcherParams = { slug: faker.lorem.slug(20) };
    const expected: IBook = {
      author: remoteResponse.author,
      cover: remoteResponse.cover,
      rating: remoteResponse.rating,
      synopsis: remoteResponse.synopsis,
      slug: remoteResponse.slug,
      title: remoteResponse.title,
      upVoted: remoteResponse.upvoted,
      upVotes: remoteResponse.upvotes
    };

    const actual = await booksFetcher(booksFetcherParams);

    await expect(actual).toStrictEqual(expected);
  });
});
