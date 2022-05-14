import React from "react";
import { styled } from "@mui/material/styles";
import { Drawer, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import Menu from "./Menu";
import SideList from "./SideList";
import SidebarMobile from "./SidebarMobile";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function HeaderInn({ business }) {
  return (
    <div className={"bgSecondary"}>
      <Menu />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: {
            xl: "block",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
        PaperProps={{ sx: { zIndex: 600 } }}
        variant="persistent"
        anchor="left"
        open
        className={"sidebusiness-panel"}
      >
        <DrawerHeader
          className={"bgSecondary p-0"}
          sx={{
            width: drawerWidth,
          }}
        >
          <Box
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height={"100%"}
            className={"drawerheader"}
          >
            <img
              src={
                business?.brand?.image
                  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/medium/" +
                    business.brand.image
                  : "https://www.brandsreviews.com/files/images/placeholder/brand-logo.webp"
              }
              width="40"
              className="me-2"
              alt="brand-logo"
            />
            <Typography color={"#fff"} textAlign={"center"}>
              {business?.user?.website}
            </Typography>
          </Box>
        </DrawerHeader>
        <Divider />
        <SideList />
      </Drawer>
      <Box
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "block",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <SidebarMobile />
      </Box>
    </div>
  );
}

export default HeaderInn;
