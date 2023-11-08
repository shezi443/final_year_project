import { Reservation } from "../reservation/Reservation";
import { User } from "../user/User";

export type Listing = {
  bathroomCount: number;
  category: string;
  createdAt: Date;
  description: string;
  guestCount: number;
  id: string;
  imageSrc: string;
  locationValue: string;
  price: number;
  reservations?: Array<Reservation>;
  roomCount: number;
  title: string;
  user?: User;
};
