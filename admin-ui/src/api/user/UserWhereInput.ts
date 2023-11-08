import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  createdAt?: DateTimeFilter;
  email?: StringNullableFilter;
  emailVerified?: DateTimeNullableFilter;
  favoriteIds?: StringFilter;
  hashedPassword?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  name?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
  updatedAt?: DateTimeFilter;
};
