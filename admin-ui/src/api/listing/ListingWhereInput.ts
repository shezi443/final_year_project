import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingWhereInput = {
  bathroomCount?: IntFilter;
  category?: StringFilter;
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  guestCount?: IntFilter;
  id?: StringFilter;
  imageSrc?: StringFilter;
  locationValue?: StringFilter;
  price?: IntFilter;
  reservations?: ReservationListRelationFilter;
  roomCount?: IntFilter;
  title?: StringFilter;
  user?: UserWhereUniqueInput;
};
