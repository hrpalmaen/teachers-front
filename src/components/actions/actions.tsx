import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface ActionProps {
  label: string;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Actions: React.FC<ActionProps> = ({
  label,
  size = "medium",
  loading = false,
  disabled = false,
}) => {
  const {
    formState: { isValid },
  } = useFormContext();
  return (
    <Button
      type="submit"
      disabled={!isValid || loading || disabled}
      variant="contained"
      size={size}
      sx={{
        width: "100%",
        fontWeight: "bold",
        height: "3rem",
      }}
    >
      {loading ? <MoreHorizIcon /> : label}
    </Button>
  );
};
