import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DownloadModuleBase } from "./base/download.module.base";
import { DownloadService } from "./download.service";
import { DownloadController } from "./download.controller";
import { DownloadResolver } from "./download.resolver";

@Module({
  imports: [DownloadModuleBase, forwardRef(() => AuthModule)],
  controllers: [DownloadController],
  providers: [DownloadService, DownloadResolver],
  exports: [DownloadService],
})
export class DownloadModule {}
