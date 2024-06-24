import { InputAdornment, TextField } from "@mui/material";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

import { Controller } from "react-hook-form";

interface FieldProps {
  label: string;
  name: string;
  defaultValue?: string | number;
  type?: "text" | "number" | "email" | "password" | "date";
  endIcon?: ReactElement | null;
}

export const FieldComponent: React.FC<FieldProps> = ({
  label,
  name,
  defaultValue,
  type = "text",
  endIcon = null,
}: FieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          {...field}
          fullWidth
          error={!!error}
          helperText={error ? error.message : null}
          type={type}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">{endIcon}</InputAdornment>
            ),
          }}
        />
      )}
      name={name}
      defaultValue={defaultValue || ""}
    />
  );
};
