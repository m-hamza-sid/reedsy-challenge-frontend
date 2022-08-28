import { define } from "cooky-cutter";
import { IBook } from "~/contracts/data";
import { faker } from "@faker-js/faker";

const BookFactory = define<IBook>({
  author: () => faker.name.fullName(),
  cover: () => faker.image.imageUrl(),
  rating: () => faker.random.numeric(3),
  synopsis: () => faker.lorem.text(),
  slug: () => faker.lorem.slug(20),
  title: () => faker.lorem.words(10),
  upVoted: () => faker.datatype.boolean(),
  upVotes: () => parseInt(faker.random.numeric(3))
});

export default BookFactory;
