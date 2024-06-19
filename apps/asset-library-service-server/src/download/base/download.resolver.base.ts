/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Download } from "./Download";
import { DownloadCountArgs } from "./DownloadCountArgs";
import { DownloadFindManyArgs } from "./DownloadFindManyArgs";
import { DownloadFindUniqueArgs } from "./DownloadFindUniqueArgs";
import { CreateDownloadArgs } from "./CreateDownloadArgs";
import { UpdateDownloadArgs } from "./UpdateDownloadArgs";
import { DeleteDownloadArgs } from "./DeleteDownloadArgs";
import { Asset } from "../../asset/base/Asset";
import { User } from "../../user/base/User";
import { DownloadService } from "../download.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Download)
export class DownloadResolverBase {
  constructor(
    protected readonly service: DownloadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Download",
    action: "read",
    possession: "any",
  })
  async _downloadsMeta(
    @graphql.Args() args: DownloadCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Download])
  @nestAccessControl.UseRoles({
    resource: "Download",
    action: "read",
    possession: "any",
  })
  async downloads(
    @graphql.Args() args: DownloadFindManyArgs
  ): Promise<Download[]> {
    return this.service.downloads(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Download, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Download",
    action: "read",
    possession: "own",
  })
  async download(
    @graphql.Args() args: DownloadFindUniqueArgs
  ): Promise<Download | null> {
    const result = await this.service.download(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Download)
  @nestAccessControl.UseRoles({
    resource: "Download",
    action: "create",
    possession: "any",
  })
  async createDownload(
    @graphql.Args() args: CreateDownloadArgs
  ): Promise<Download> {
    return await this.service.createDownload({
      ...args,
      data: {
        ...args.data,

        asset: args.data.asset
          ? {
              connect: args.data.asset,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Download)
  @nestAccessControl.UseRoles({
    resource: "Download",
    action: "update",
    possession: "any",
  })
  async updateDownload(
    @graphql.Args() args: UpdateDownloadArgs
  ): Promise<Download | null> {
    try {
      return await this.service.updateDownload({
        ...args,
        data: {
          ...args.data,

          asset: args.data.asset
            ? {
                connect: args.data.asset,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Download)
  @nestAccessControl.UseRoles({
    resource: "Download",
    action: "delete",
    possession: "any",
  })
  async deleteDownload(
    @graphql.Args() args: DeleteDownloadArgs
  ): Promise<Download | null> {
    try {
      return await this.service.deleteDownload(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Asset, {
    nullable: true,
    name: "asset",
  })
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "read",
    possession: "any",
  })
  async getAsset(@graphql.Parent() parent: Download): Promise<Asset | null> {
    const result = await this.service.getAsset(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Download): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
