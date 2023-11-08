import { Account } from "../account/Account";
import { Listing } from "../listing/Listing";
import { Reservation } from "../reservation/Reservation";

export type User = {
  accounts?: Array<Account>;
  createdAt: Date;
  email: string | null;
  emailVerified: Date | null;
  favoriteIds: string;
  hashedPassword: string | null;
  id: string;
  image: string | null;
  listings?: Array<Listing>;
  name: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
