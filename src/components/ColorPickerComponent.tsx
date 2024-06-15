import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

interface ColorPickerProps {
  label: string;
  name: string;
  defaultValue?: string | number;
}

export const ColorPickerComponent: React.FC<ColorPickerProps> = ({
  label,
  name,
  defaultValue,
}: ColorPickerProps) => {
  const [state, setState] = useState<string>("#fff");
  const { control } = useFormContext();

  const handleChangeComplete = (color: { hex: string }) => {
    setState(color.hex);
  };

  return (
    <>
      <Controller
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label={label}
            {...field}
            fullWidth
            variant="outlined"
            error={!!error}
            helperText={error ? error.message : null}
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        )}
        name={name}
        defaultValue={defaultValue || ""}
      />
      <SketchPicker color={state} onChangeComplete={handleChangeComplete} />
    </>
  );
};
