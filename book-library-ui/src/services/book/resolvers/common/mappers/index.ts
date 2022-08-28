import { RestArrayBookResponse, RestSingleBookResponse } from "../io-schemas";
import { IBook } from "~/contracts/data";

export function mapSingleResponse(input: RestSingleBookResponse): IBook {
  const { upvoted, upvotes, ...unMapped } = input;
  return {
    upVoted: upvoted,
    upVotes: upvotes,
    ...unMapped
  };
}

export function mapArrayResponse(input: RestArrayBookResponse): Array<IBook> {
  return input.books.map(mapSingleResponse);
}
