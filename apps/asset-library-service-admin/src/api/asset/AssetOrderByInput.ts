import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  uploadedBy?: SortOrder;
  url?: SortOrder;
};
