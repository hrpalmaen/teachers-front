import { User } from "@interfaces/User";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

type Page = {
  name: string;
  route: string;
  rols?: string[];
};

type HeaderMenuProps = {
  pages: Page[];
  selectedIndex: string;
  user: User | null;
  handleSelectOption: (index: string) => void;
};

const HeaderMenu = ({
  pages,
  user,
  selectedIndex,
  handleSelectOption,
}: HeaderMenuProps) => {
  const currentRol = user?.rol?.name;

  return pages.map(({ name, route, rols }) => (
    <Link key={name} to={`${"/" + route}`} style={{ textDecoration: "none" }}>
      <MenuItem
        key={name}
        onClick={() => handleSelectOption(route)}
        selected={route === selectedIndex}
        sx={route === selectedIndex ? styles.ItemSelected : styles.optionNavBar}
      >
        {name}
      </MenuItem>
    </Link>
  ));
};

const styles = {
  ItemSelected: {
    height: "36px",
    borderRadius: "10px",
    border: "1px solid #F44336",
    backgroundColor: "white",
    background: "#e5ebf1",
    color: "#F44336",
    fontWeight: "bold",
  },
  optionNavBar: {
    color: "secondary.main",
    textTransform: "capitalize",
  },
};

export { HeaderMenu };
export type { Page };
