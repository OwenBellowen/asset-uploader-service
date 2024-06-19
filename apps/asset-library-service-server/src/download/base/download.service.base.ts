/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Download as PrismaDownload,
  Asset as PrismaAsset,
  User as PrismaUser,
} from "@prisma/client";

export class DownloadServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DownloadCountArgs, "select">): Promise<number> {
    return this.prisma.download.count(args);
  }

  async downloads(
    args: Prisma.DownloadFindManyArgs
  ): Promise<PrismaDownload[]> {
    return this.prisma.download.findMany(args);
  }
  async download(
    args: Prisma.DownloadFindUniqueArgs
  ): Promise<PrismaDownload | null> {
    return this.prisma.download.findUnique(args);
  }
  async createDownload(
    args: Prisma.DownloadCreateArgs
  ): Promise<PrismaDownload> {
    return this.prisma.download.create(args);
  }
  async updateDownload(
    args: Prisma.DownloadUpdateArgs
  ): Promise<PrismaDownload> {
    return this.prisma.download.update(args);
  }
  async deleteDownload(
    args: Prisma.DownloadDeleteArgs
  ): Promise<PrismaDownload> {
    return this.prisma.download.delete(args);
  }

  async getAsset(parentId: string): Promise<PrismaAsset | null> {
    return this.prisma.download
      .findUnique({
        where: { id: parentId },
      })
      .asset();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.download
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
