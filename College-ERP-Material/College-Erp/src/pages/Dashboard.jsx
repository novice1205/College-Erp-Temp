import * as React from "react";
import "../../src/index.css";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import BasicDateCalendar from "../components/Calendar";
import ButtonSizes from "../components/Button";
import Snackbar from "@mui/material/Snackbar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ImageAvatars from "../components/Avatar";
import { mainListItems, secondaryListItems } from "../components/listItems";
import { Link } from "react-router-dom";
import BasicCard from "../components/Card";
import CardContent from "@mui/material/CardContent";

import Card from "@mui/material/Card";
import Theme from "../styles/customTheme";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

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
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex", background: "white" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "#0869D9", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, fontFamily: "Poppins" }}
            >
              College ERP
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#0869D9",
                  color: "whitesmoke",
                  padding: "2px 25px 2px 25px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ marginRight: "10px", fontFamily: "Poppins" }}>
                  Raghav Sethi
                </Typography>
                <ImageAvatars />
              </Box>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            display: "flex",
            marginY: "1vw",
            marginX: "5vw",
            flexGrow: 1.5,
            height: "100vh",
            alignItems: "center",
          }}
        >
          {/* Overview Card */}
          <Card id="card" sx={{ 
            width: "35em", 
            height: "10em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}>

            <CardContent sx={{width: "100%"}}>
              <div
                id="CardParent"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",

                }}
              >
                <div
                  className="info"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <div id="totalColleges" style={{
                    display: "flex",
                    flexDirection: "column",
                    }}>
                    <Typography variant="h4">Total Colleges</Typography>
                    <Typography variant="body1" sx={{
                      color: (theme) => theme.palette.black[50],
                      fontSize: "22px"
                      }}>43</Typography>
                  </div>
                  <div id="totalUsers" style={{
                    display: "flex",
                    flexDirection: "column",
                    }}>
                    <Typography variant="h4">Total Users</Typography>
                    <Typography variant="body1" sx={{
                      color: (theme) => theme.palette.black[50],
                      fontSize: "22px"
                      }}>112</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* <ButtonSizes
            sx={{
              width: "500px",
            }}
          ></ButtonSizes> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
