import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "title";

export const AssetTitle = (record: TAsset): string => {
  return record.title?.toString() || String(record.id);
};
