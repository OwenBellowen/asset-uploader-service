import { Download } from "../download/Download";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  discordId: string | null;
  downloads?: Array<Download>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
