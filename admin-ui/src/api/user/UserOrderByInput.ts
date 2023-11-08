import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  emailVerified?: SortOrder;
  favoriteIds?: SortOrder;
  hashedPassword?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
