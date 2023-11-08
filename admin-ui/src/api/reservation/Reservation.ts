import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Reservation = {
  createdAt: Date;
  endDate: Date;
  id: string;
  listing?: Listing;
  startDate: Date;
  totalPrice: number;
  user?: User;
};
