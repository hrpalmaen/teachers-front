import React from "react";
import { Box } from "@mui/material";

import { SectionFormComponent } from "@components/Index";

interface IItem {
  id: string;
  name: string;
}

interface ListCardProps {
  selected: React.Dispatch<React.SetStateAction<string>>;
  items: IItem[];
}
export const ListCardComponent = ({ selected, items }: ListCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        cursor: "pointer",
      }}
    >
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: { lg: "25%", xs: "50%", sm: "25%", md: "33%" },
            padding: "0.5rem",
          }}
          onClick={() => {
            selected(item.id);
          }}
        >
          <SectionFormComponent>
            <Box
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "secondary.main",
              }}
            >
              {item.name}
            </Box>
          </SectionFormComponent>
        </Box>
      ))}
    </Box>
  );
};
