import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  startDate?: SortOrder;
  totalPrice?: SortOrder;
  userId?: SortOrder;
};
