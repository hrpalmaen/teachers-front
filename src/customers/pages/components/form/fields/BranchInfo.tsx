import { Grid } from "@mui/material";
import { ColorPickerComponent } from "@components/ColorPickerComponent";
import { UploadFileComponent } from "@components/UploadFileComponent";
import { ICustomer } from "@/customers/interface";

type BranchInfoProps = {
  defaultValues?: ICustomer;
};

export const BranchInfoCustomer = ({ defaultValues }: BranchInfoProps) => {
  return (
    <Grid container spacing={2}>
      {/* logo */}
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <UploadFileComponent
          name="logo"
          // setFile={setFile}
          resetFile={false}
          message="El logo de la institución"
        />
      </Grid>
      {/* color */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <ColorPickerComponent
          label="Color representativo de la institución"
          name="color"
          defaultValue={defaultValues?.color || ""}
        />
      </Grid>
    </Grid>
  );
};
