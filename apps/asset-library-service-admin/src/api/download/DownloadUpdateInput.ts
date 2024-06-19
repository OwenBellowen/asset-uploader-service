import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DownloadUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  downloadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
