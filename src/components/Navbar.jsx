import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Button,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Link,
  
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
const pages = [
  {title:"home",url:''},
  {title: "about us",url:'https://getpeppermint.co/about-us/'},
  {title:"solutions",url:'https://getpeppermint.co/solutions/'},
  {title:"products",url:'https://getpeppermint.co/products/'},
  {title:"resources",url:'#'},
  {title:"contact us",url:'https://getpeppermint.co/contacts/'},
];

// search input styled component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
  return (
    <Box>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{flexDirection:'row',justifyContent:'space-between'}}>
            {/* logo web view */}
            <Box
              component="img"
              sx={{ height: 50, width: 150, mr: {md:0,lg:10},display:{xs:'none',md:"flex"} }}
              src={Logo}
              alt="logo"
            />
            {/* pages mobile view */}
            <Box sx={{  display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" textTransform='capitalize'>
                        <Link href={page.url} color='inherit'>
                        {page.title}
                        </Link>
                        </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* logo mobile view */}
            <Box
              component="img"
              sx={{ height: 50, width: 150,display:{xs:'none',sm:'flex',md:"none"} }}
              src={Logo}
              alt="logo"
            />
            {/* pages web view */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link underline="hover" href={page.url}color='inherit' >{page.title}</Link>
                </Button>
              ))}
            </Box>

            {/* search input */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
