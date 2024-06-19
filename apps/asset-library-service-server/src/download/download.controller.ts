import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DownloadService } from "./download.service";
import { DownloadControllerBase } from "./base/download.controller.base";

@swagger.ApiTags("downloads")
@common.Controller("downloads")
export class DownloadController extends DownloadControllerBase {
  constructor(
    protected readonly service: DownloadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
