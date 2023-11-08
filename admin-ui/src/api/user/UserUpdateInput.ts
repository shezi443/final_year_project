import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { ReservationUpdateManyWithoutUsersInput } from "./ReservationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  email?: string | null;
  emailVerified?: Date | null;
  favoriteIds?: string;
  hashedPassword?: string | null;
  image?: string | null;
  listings?: ListingUpdateManyWithoutUsersInput;
  name?: string | null;
  reservations?: ReservationUpdateManyWithoutUsersInput;
};
