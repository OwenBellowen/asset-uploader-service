import { SortOrder } from "../../util/SortOrder";

export type DownloadOrderByInput = {
  assetId?: SortOrder;
  createdAt?: SortOrder;
  downloadedAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
