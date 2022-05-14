import React from "react";
import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import MuiAppBar from "@mui/material/AppBar";
import Link from "next/link";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function HeaderInn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  
  return (
    <AppBar
      className={"bgPrimery"}
      sx={{ boxShadow: "none", zIndex: 600 }}
      position="fixed"
      open={open}
    >
      <Toolbar>
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography className={"me-3"}>
              <Link href="/">Home</Link>
            </Typography>
            <Typography className={"me-3"}>
              <Link href="/contact-us">Contact</Link>
            </Typography>
            <Tooltip title="Profile">
              <IconButton size="small" aria-haspopup="true">
                <Avatar
                  src="/images/user.webp"
                  sx={{
                    width: 30,
                    height: 30,
                    fontSize: 13,
                    border: "1px solid #999",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </React.Fragment>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderInn;
