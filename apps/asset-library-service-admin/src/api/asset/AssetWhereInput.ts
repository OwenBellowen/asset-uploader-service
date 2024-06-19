import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DownloadListRelationFilter } from "../download/DownloadListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetWhereInput = {
  description?: StringNullableFilter;
  downloads?: DownloadListRelationFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  uploadedBy?: StringNullableFilter;
  url?: StringNullableFilter;
};
