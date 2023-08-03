import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { useMemberStore } from "../../stores";
import { useCookies } from "react-cookie";

function MenuIcon() {
  return null;
}

const Navigation = () => {
  const [cookies, setCookies] = useCookies();
  const { member, removeMember } = useMemberStore();

  const logOutHandler = () => {
    setCookies("accessToken", "", { expires: new Date() });
    removeMember();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {member ? (
            <IconButton color="inherit" onClick={() => logOutHandler()}>
              <Person />
            </IconButton>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
