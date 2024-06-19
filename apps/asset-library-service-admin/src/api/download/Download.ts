import { Asset } from "../asset/Asset";
import { User } from "../user/User";

export type Download = {
  asset?: Asset | null;
  createdAt: Date;
  downloadedAt: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
