import { DownloadUpdateManyWithoutAssetsInput } from "./DownloadUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  description?: string | null;
  downloads?: DownloadUpdateManyWithoutAssetsInput;
  title?: string | null;
  uploadedBy?: string | null;
  url?: string | null;
};
