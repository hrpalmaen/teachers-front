import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { useAuth } from "@/contexts";
import { HeaderMenu } from "./Menu";

const pages = [
  {
    name: "Home",
    route: "",
    rols: ["superAdmin", "admin", "user"],
  },

  {
    name: "Instituciones Educativas",
    route: "escuelas",
    rols: ["superAdmin"],
  },
  {
    name: "Usuarios",
    route: "usuarios",
    rols: ["superAdmin", "admin"],
  },
  {
    name: "Plan de estudios",
    route: "notas",
    rols: ["superAdmin", "admin", "user"],
  },
  {
    name: "test",
    route: "analiticas",
    rols: ["superAdmin", "admin", "user"],
  },
];

const settings = ["Cerrar sesión"];

export function Header() {
  const { user, logout } = useAuth();

  const [anchorElNav, setAnchorElNav] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElUser, setAnchorElUser] = useState<HTMLAnchorElement | null>(
    null
  );
  const [selectedIndex, setSelectedIndex] = useState<string>("");
  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname) {
      const route = pathname.split("/")[1];
      setSelectedIndex(route);
    }
  }, [pathname]);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleSelectOption = (index: string) => {
    handleCloseNavMenu();
    setSelectedIndex(index);
  };

  const onLogout = () => {
    logout();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // if (!user) return <div></div>;

  return (
    <AppBar position="static" id="header">
      <Toolbar
        disableGutters
        sx={{
          marginInlineEnd: "1rem",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* navbar inline */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
            },
            alignItems: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <HeaderMenu
              pages={pages}
              selectedIndex={selectedIndex}
              handleSelectOption={handleSelectOption}
              user={user}
            />
          </Box>
        </Box>
        {/* responsive */}
        <Box
          sx={{
            marginInlineEnd: "1rem",
            display: {
              xs: "flex",
              md: "flex",
              lg: "flex",
              sm: "flex",
            },
            position: "relative",
          }}
        >
          <Box sx={styles.btnNameUser}>
            <Typography
              variant="body1"
              sx={{
                paddingInline: "0.5rem",
                fontSize: "12px",
              }}
            >
              {user?.firstName || "pepito"} {user?.lastName || "perez"}
            </Typography>
          </Box>
          <Box sx={styles.btnProfile} onClick={handleOpenUserMenu}>
            <Tooltip title="opciones">
              <IconButton
                onClick={(e) => handleOpenNavMenu(e)}
                sx={{ padding: "0", color: "#F44336" }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        {/* menu logout */}
        <Menu
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" },
            mt: "4rem",
            position: "absolute",
          }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem
              sx={{
                textDecoration: "none",
                color: "#6C757D",
                textTransform: "capitalize",
                fontWeight: 400,
                lineHeight: "18.75px",
              }}
              key={setting}
              onClick={setting === "Cerrar sesión" ? onLogout : null}
            >
              <Typography>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { md: "block", lg: "none" },
          }}
        >
          <MenuItem
            sx={{
              textDecoration: "none",
              color: "#6C757D",
              textTransform: "capitalize",
              fontWeight: 400,
              lineHeight: "18.75px",
            }}
          >
            <Typography>
              {user?.firstName} {user?.lastName}
            </Typography>
          </MenuItem>
          {pages.map((setting) => (
            <Link
              key={setting.name}
              to={`${"/" + setting.route}`}
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                sx={{
                  textDecoration: "none",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  lineHeight: "18.75px",
                  ...(setting.route === selectedIndex
                    ? styles.btnSelected
                    : styles.optionNavBar),
                }}
                selected={setting.route === selectedIndex}
                onClick={() => handleCloseNavMenu()}
              >
                <Typography>{setting?.name}</Typography>
              </MenuItem>
            </Link>
          ))}
          {settings.map((setting) => (
            <MenuItem
              sx={{
                textDecoration: "none",
                color: "#6C757D",
                textTransform: "capitalize",
                fontWeight: 400,
                lineHeight: "18.75px",
              }}
              key={setting}
              onClick={setting === "Cerrar sesión" ? onLogout : null}
            >
              <Typography>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  btnProfile: {
    height: "3rem",
    borderRadius: "4px",
    border: "1px solid #F44336",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    marginLeft: "0.6rem",
    cursor: "pointer",
  },
  btnNameUser: {
    height: "2rem",
    borderRadius: "2rem",
    backgroundColor: "#F44336",
    border: "1px solid #F44336",
    display: "grid",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "auto",
    margin: "auto",
    cursor: "pointer",
    color: "#FFFFFF",
  },
  btnSelected: {
    height: "36px",
    borderRadius: "10px",
    border: "1px solid #F44336",
    backgroundColor: "white",
    background: "#e5ebf1",
    color: "#F44336",
  },
  optionNavBar: {
    textDecoration: "none",
    color: "#6C757D",
    textTransform: "capitalize",
    fontWeight: 400,
    lineHeight: "18.75px",
  },
};
