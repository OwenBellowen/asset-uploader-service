/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DownloadWhereInput } from "./DownloadWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DownloadListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DownloadWhereInput,
  })
  @ValidateNested()
  @Type(() => DownloadWhereInput)
  @IsOptional()
  @Field(() => DownloadWhereInput, {
    nullable: true,
  })
  every?: DownloadWhereInput;

  @ApiProperty({
    required: false,
    type: () => DownloadWhereInput,
  })
  @ValidateNested()
  @Type(() => DownloadWhereInput)
  @IsOptional()
  @Field(() => DownloadWhereInput, {
    nullable: true,
  })
  some?: DownloadWhereInput;

  @ApiProperty({
    required: false,
    type: () => DownloadWhereInput,
  })
  @ValidateNested()
  @Type(() => DownloadWhereInput)
  @IsOptional()
  @Field(() => DownloadWhereInput, {
    nullable: true,
  })
  none?: DownloadWhereInput;
}
export { DownloadListRelationFilter as DownloadListRelationFilter };
