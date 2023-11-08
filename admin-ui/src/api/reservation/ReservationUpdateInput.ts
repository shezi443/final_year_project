import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationUpdateInput = {
  endDate?: Date;
  listing?: ListingWhereUniqueInput;
  startDate?: Date;
  totalPrice?: number;
  user?: UserWhereUniqueInput;
};
