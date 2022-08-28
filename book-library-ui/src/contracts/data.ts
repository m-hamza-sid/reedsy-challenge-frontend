import { Dayjs } from "dayjs";

export interface IBook {
  author: string;
  cover: string;
  rating: string;
  slug: string;
  synopsis: string;
  title: string;
  upVoted: boolean;
  upVotes: number;
}

interface ICommentor {
  name: string;
}

export interface IComment {
  user: ICommentor;
  content: string;
  dateTime: Dayjs;
}
