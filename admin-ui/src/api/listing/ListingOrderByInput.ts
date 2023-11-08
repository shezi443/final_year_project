import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  bathroomCount?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  guestCount?: SortOrder;
  id?: SortOrder;
  imageSrc?: SortOrder;
  locationValue?: SortOrder;
  price?: SortOrder;
  roomCount?: SortOrder;
  title?: SortOrder;
  userId?: SortOrder;
};
