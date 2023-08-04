import React from "react";
import {
  alpha,
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase, Link,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useMemberStore } from "../../stores";
import { useCookies } from "react-cookie";

function MenuIcon() {
  return null;
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

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
            쇼핑몰
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {member ? (
            <IconButton color="inherit" onClick={() => logOutHandler()}>
              <Person />
            </IconButton>
          ) : (
            <Button
                color="inherit"
            >Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
