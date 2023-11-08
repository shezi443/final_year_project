import { ReservationCreateNestedManyWithoutListingsInput } from "./ReservationCreateNestedManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingCreateInput = {
  bathroomCount: number;
  category: string;
  description: string;
  guestCount: number;
  imageSrc: string;
  locationValue: string;
  price: number;
  reservations?: ReservationCreateNestedManyWithoutListingsInput;
  roomCount: number;
  title: string;
  user: UserWhereUniqueInput;
};
