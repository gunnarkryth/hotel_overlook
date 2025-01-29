import { NavLink } from "react-router-dom";
import { NavLinks } from "../utils/NavLinks";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";

export const Nav = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Hotel Overlook</Typography>
        <Box>
          <List sx={{ display: "flex" }}>
            {NavLinks.map((link, index) => (
              <ListItem key={index}>
                <ListItemButton
                  component={NavLink}
                  to={link.path ? link.path : "/" + link.name}
                >
                  {link.name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
