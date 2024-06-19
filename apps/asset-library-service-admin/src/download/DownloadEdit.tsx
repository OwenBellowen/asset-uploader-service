import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { AssetTitle } from "../asset/AssetTitle";
import { UserTitle } from "../user/UserTitle";

export const DownloadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <DateTimeInput label="downloadedAt" source="downloadedAt" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
