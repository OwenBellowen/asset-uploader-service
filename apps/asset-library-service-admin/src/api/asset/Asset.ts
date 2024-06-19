import { Download } from "../download/Download";

export type Asset = {
  createdAt: Date;
  description: string | null;
  downloads?: Array<Download>;
  id: string;
  title: string | null;
  updatedAt: Date;
  uploadedBy: string | null;
  url: string | null;
};
