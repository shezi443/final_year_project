import { ReservationUpdateManyWithoutListingsInput } from "./ReservationUpdateManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingUpdateInput = {
  bathroomCount?: number;
  category?: string;
  description?: string;
  guestCount?: number;
  imageSrc?: string;
  locationValue?: string;
  price?: number;
  reservations?: ReservationUpdateManyWithoutListingsInput;
  roomCount?: number;
  title?: string;
  user?: UserWhereUniqueInput;
};
