import { Box, Stack, Switch, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { Controller } from "react-hook-form";

interface SwithProps {
  label: string;
  name: string;
  defaultValue?: string | number;
}

export const SwithComponent: React.FC<SwithProps> = ({
  label,
  name,
  defaultValue = false,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <Stack direction="row" spacing="0.1rem" alignItems="center">
          <Switch
            disabled={typeof defaultValue === "undefined"}
            checked={typeof defaultValue === "undefined" ? true : value}
            onChange={onChange}
          />
          <Typography variant="body2" sx={{ color: "secondary.light" }}>
            {label}
            <Box sx={{ fontWeight: "bold" }}>
              {value ? "Activo" : "Ináctivo"}
            </Box>
          </Typography>
        </Stack>
      )}
      name={name}
      defaultValue={defaultValue}
    />
  );
};
