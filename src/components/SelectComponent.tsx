import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

import { Controller } from "react-hook-form";

interface SelectProps {
  label: string;
  name: string;
  defaultValue?: string | number;
  data: Array<any>;
  fieldKey: string;
  fieldValue: string;
  multiple?: boolean;
}

export const SelectComponent: React.FC<SelectProps> = ({
  label,
  name,
  defaultValue = "",
  data,
  fieldKey,
  fieldValue,
  multiple = false,
}) => {
  const { control } = useFormContext();
  const defaultField = multiple ? [] : "";
  return (
    <FormControl fullWidth>
      <InputLabel id="input-label">{label}</InputLabel>
      <Controller
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Select
            label={label}
            labelId="documentType-label"
            value={field.value || defaultField}
            onChange={(e) => field.onChange(e.target.value)}
            error={!!error}
            multiple={multiple}
            renderValue={(selected) =>
              multiple ? (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              ) : (
                <Box>
                  {data.map((item) =>
                    item[fieldKey] === selected ? item[fieldValue] : null
                  )}
                </Box>
              )
            }
          >
            {data.map((item) => (
              <MenuItem key={item[fieldKey]} value={item[fieldKey]}>
                {multiple ? (
                  <Checkbox
                    checked={field.value.indexOf(item[fieldKey]) > -1}
                  />
                ) : null}
                <ListItemText primary={item[fieldValue]} />
              </MenuItem>
            ))}
          </Select>
        )}
        name={name}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
