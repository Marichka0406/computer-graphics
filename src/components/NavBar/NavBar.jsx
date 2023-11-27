import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation } from "react-router-dom";
import './NavBar.css';

const drawerWidth = 240;
const navItems = [
  "Home",
  "Fractals",
  "Color models",
  "Moving images",
  "Study materials",
];
const paths = [
  "/",
  "/fractals",
  "/color-models",
  "/moving-images",
  "/study-materials-lessons",
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "#fff",
        backgroundColor: "rgba(40, 42, 69, 1)",
        height: "100%",
      }}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <Link
              to={paths[index]}
              style={{ textDecoration: "none", color: "white", width: "100%" }}
              className={location.pathname === paths[index] ? "active-link" : ""}
            >
              <ListItemButton
                sx={{
                  color: "white",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "rgba(88, 93, 164, 1)",
                  },
                  '&.mui-selected': {
                    backgroundColor: 'rgba(55, 58, 103, 1)',
                  },
                }}
              >
                {item}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", padding: 0}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "rgba(40, 42, 69, 1)" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <List
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              flexGrow: 1,
              flexDirection: "row",
            }}
          >
            {navItems.map((item, index) => (
              <ListItem key={item} disablePadding>
                <Link
                  to={paths[index]}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    width: "100%",               
                  }}
                  className={location.pathname === paths[index] ? "active-link" : ""}
                >
                  <ListItemButton
                    sx={{
                      color: "white",
                      textAlign: "center",
                      "&:hover": {
                        backgroundColor: "rgba(88, 93, 164, 1)",
                      },
                      display: 'flex',
                      justifyContent: 'center', 
                      alignItems: 'center', 
                    }}
                  >
                    {item}
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
