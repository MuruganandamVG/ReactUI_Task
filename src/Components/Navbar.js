import React, { useState } from "react";
import Display from "./Display";
import { Tabs, Tab } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  HomeOutlined,
  SettingsAccessibilityOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const drawerWidth = 240;

const Icons = [
  <HomeOutlined />,
  <MailOutlinedIcon />,
  <FeedbackOutlinedIcon />,
  <NotificationsActiveOutlinedIcon />,
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const typostyle = {
    marginRight: 9,
    color: "inherit",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={typostyle} variant="body2">
            Dashboard
          </Typography>
          <Typography sx={typostyle} variant="body2">
            Salesforce
          </Typography>
          <Typography sx={typostyle} variant="body2">
            Engineer Report
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            borderRight: 0,
          },
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <MenuIcon style={{ color: "#636262" }} />
            <Typography sx={{ marginLeft: "15px" }}>Dashboard</Typography>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Home", "Mails", "Feedback", "Notifications"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleDrawerClose}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    fontSize: "medium",
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <IconButton onClick={handleDrawerClose}>
                    {" "}
                    {Icons[index]}
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, margin: "0px" }}>
        <DrawerHeader />
        <Toolbar sx={{ justifyContent: "space-between", padding: "0px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <EngineeringIcon />
            </IconButton>
            <Typography sx={{ color: "darkblue", fontWeight: "500" }}>
              Engineer Report
            </Typography>
          </div>
          <div>
            <IconButton sx={{ marginRight: 1 }}>
              <HelpCenterOutlinedIcon />
            </IconButton>
            <IconButton sx={{ marginRight: 1 }}>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton sx={{ marginRight: 1 }}>
              <CreateOutlinedIcon />
            </IconButton>
          </div>
        </Toolbar>
        <Display />
      </Box>
    </Box>
  );
}
