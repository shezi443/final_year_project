import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { ReservationCreateNestedManyWithoutUsersInput } from "./ReservationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  email?: string | null;
  emailVerified?: Date | null;
  favoriteIds: string;
  hashedPassword?: string | null;
  image?: string | null;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  name?: string | null;
  reservations?: ReservationCreateNestedManyWithoutUsersInput;
};
