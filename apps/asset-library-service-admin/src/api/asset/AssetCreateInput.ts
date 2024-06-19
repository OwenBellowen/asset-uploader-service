import { DownloadCreateNestedManyWithoutAssetsInput } from "./DownloadCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  description?: string | null;
  downloads?: DownloadCreateNestedManyWithoutAssetsInput;
  title?: string | null;
  uploadedBy?: string | null;
  url?: string | null;
};
