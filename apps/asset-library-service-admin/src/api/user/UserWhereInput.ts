import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DownloadListRelationFilter } from "../download/DownloadListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  discordId?: StringNullableFilter;
  downloads?: DownloadListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
