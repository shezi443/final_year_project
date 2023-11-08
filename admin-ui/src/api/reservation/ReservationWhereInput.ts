import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationWhereInput = {
  createdAt?: DateTimeFilter;
  endDate?: DateTimeFilter;
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  startDate?: DateTimeFilter;
  totalPrice?: IntFilter;
  user?: UserWhereUniqueInput;
};
