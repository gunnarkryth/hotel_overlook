import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLinks } from "../utils/NavLinks";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#000000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          src="/logo.png"
          alt="Hotel Overlook"
          style={{ height: "50px", marginRight: "2rem" }}
        />

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {NavLinks.map((link) => (
            <Button
              key={link.path}
              component={NavLink}
              to={link.path}
              sx={{
                color: "white",
                textTransform: "uppercase",
                fontWeight: "bold",
                "&.active": { borderBottom: "3px solid #ff4081" },
              }}
            >
              {link.name}
            </Button>
          ))}
        </Box>

        {/* Mobile Navigation */}
        <IconButton
          sx={{ display: { md: "none" }, color: "white" }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {NavLinks.map((link) => (
            <MenuItem
              key={link.path}
              component={NavLink}
              to={link.path}
              onClick={handleMenuClose}
            >
              {link.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
