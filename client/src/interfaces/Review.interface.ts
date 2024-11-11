import { IUser } from "./User.interface";

export interface IReview {
  _id: string;
  rating: number;
  review: string;
  user: IUser;
  movie: string;
  createdAt: string;
}
