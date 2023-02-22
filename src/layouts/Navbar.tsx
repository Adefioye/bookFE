import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

interface ElevationProps {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationProps) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  console.log(`matchesMD: ${matchesMD}`);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const navItems = ["Home", "Search Books"];

  const drawer = (
    <>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        sx={{
          "& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#0e76a8",
            width: "100%",
          },
        }}
      >
        {/* <Box sx={(theme) => theme.mixins.toolbar} /> */}
        <Box sx={(theme) => theme.mixins.toolbar} />
        <List>
          <ListItem
            sx={{
              color: "#fff",
            }}
            component={Link}
            to={"/"}
          >
            <ListItemText sx={{ textAlign: "center" }}>Home</ListItemText>
          </ListItem>
          <ListItem
            sx={{
              color: "#fff",
            }}
            component={Link}
            to={"/"}
          >
            <ListItemText sx={{ textAlign: "center" }}>
              Search Books
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid #fff",
                  "&:hover": {
                    border: "1px solid #fff",
                    fontWeight: 500,
                  },
                }}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                  }}
                >
                  Sign In
                </Typography>
              </Button>
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar sx={{ zIndex: theme.zIndex.modal + 1 }}>
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Left side of navbar */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: 700 }}
                  >
                    KOKOLIB
                  </Typography>
                </IconButton>

                {/* To display Home and Search books in large screen */}
                {!matchesMD &&
                  navItems.map((navItem) => (
                    <Typography
                      key={navItem}
                      sx={{
                        ml: "2em",
                        "&:hover": {
                          fontWeight: 500,
                        },
                        textDecoration: "none",
                        color: "#fff",
                      }}
                      component={Link}
                      to={"/"}
                    >
                      {navItem}
                    </Typography>
                  ))}
              </Box>
              {/* Right side of navbar */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* To display in large screen */}
                {!matchesMD && (
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #fff",
                      "&:hover": {
                        border: "1px solid #fff",
                        fontWeight: 500,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                      }}
                    >
                      Sign In
                    </Typography>
                  </Button>
                )}

                {/* To inject menu icon */}
                {matchesMD && (
                  <Box>
                    <IconButton
                      sx={{
                        ml: "2em",
                        color: "#fff",
                      }}
                      onClick={() => setOpenDrawer(!openDrawer)}
                    >
                      <MenuIcon fontSize="large" />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>

            {/* To inject drawer */}
            {matchesMD && drawer}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box sx={(theme) => theme.mixins.toolbar} />
    </>
  );
};

export default Navbar;
