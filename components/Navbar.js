import React from "react";
import {
  Box,
  Grid,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Paper,
  Button,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
} from "@mui/material";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import SearchInnerPage from "./navbar/SearchInnerPage";
import { USER_DETAILS_RESET } from "../redux/constants/userConstant";
import sxStyles from "../styles/style";
import Navitem from "./navbar/Navitem";
import NavbarMobile from "./navbar/NavbarMobile";
import MegaDesktop from "./navbar/MegaDesktop";
import MegaMobile from "./navbar/MegaMobile";

function Navbar(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = props;
  const items = [
    {
      icon: "/images/ic/ic-9.webp",
      title: "Brands",
      url: "brand",
    },
    {
      icon: "/images/ic/ic-10.webp",
      title: "Comparison",
      url: "comparison/list",
    },
    {
      icon: "/images/ic/ic-2.webp",
      title: "Blog",
      url: "blog",
    },
    {
      icon: "/images/ic/ic-4.webp",
      title: "Contact",
      url: "contact-us",
    },
    // {
    //   icon: "/images/ic/ic-3.webp",
    //   title: "Coupon",
    //   url: "coupons",
    // },
  ];

  // mobile nav
  const [state, setState] = React.useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleLogout = () => {
    removeCookie("user", {
      path: "/",
      sameSite: true,
    });
    dispatch({
      type: USER_DETAILS_RESET,
    });

    router.push("/");
  };

  return (
    <AppBar className={"navbar"} sx={sxStyles["navbar"]}>
      <Container
        maxWidth="xl"
        className={"px-2 py-0"}
        sx={sxStyles["navContainer"]}
      >
        <Toolbar className={"px-4 ToolbarNav"} sx={sxStyles["navDesk"]}>
          <ul className={"endUl"}>
            <li className={"navItem"}>
              <Typography
                className={"textSecondary"}
                variant="h6"
                noWrap
                component="div"
              >
                <Link href="/">
                  <a className={"pointer px-0"}>
                    <Paper
                      style={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }}
                      sx={{ display: "flex" }}
                    >
                      <img
                        src={
                          process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/images/brandslogo.webp"
                        }
                        alt="brandslogo"
                        className={"logo"}
                      />
                    </Paper>
                  </a>
                </Link>
              </Typography>
            </li>
            {/* <li className={"navItem"}>
              <Typography
                className={"textSecondary ms-4"}
                variant="h6"
                noWrap
                component="div"
                mt={"1.25px"}
              >
                <Link href="/">
                  <a>
                    <Button
                      className={
                        "pointer textSecondary fw-bolder btnBusinesses"
                      }
                    >
                      For businesses
                    </Button>
                  </a>
                </Link>
              </Typography>
            </li> */}
          </ul>
          <ul className={"startUl"}>
            <li className={"navItem megaItem"}>
              <Typography
                className={"textSecondary pointer"}
                variant="h6"
                noWrap
                component="div"
                sx={{ ml: "auto" }}
              >
                <Link href={"/categories"}>
                  <a>
                    <Typography
                      fontSize={17.5}
                      className={"navLink d-flex align-items-center"}
                    >
                      Categories
                      <KeyboardArrowDownIcon className={"ms-1"} />
                    </Typography>
                  </a>
                </Link>
              </Typography>
              <Box className={"megaBox"}>
                <MegaDesktop categories={props?.categories} />
              </Box>
            </li>
            {items?.map((navitems, index) => (
              <Navitem
                key={index}
                title={navitems.title?.replace(
                  "$year$",
                  new Date().getFullYear()
                )}
                url={navitems.url}
              />
            ))}
            <li className={"navItem loginbt"}>
              <Typography
                className={"textSecondary ms-auto"}
                noWrap
                fontSize={15}
                component="div"
                display={"flex"}
              >
                {router.pathname !== "/" && <SearchInnerPage />}
                {user?._id ? (
                  <>
                    <a
                      onClick={handleLogout}
                      className={
                        "btnLogin d-flex align-items-center ms-2 py-1 px-2"
                      }
                    >
                      Logout
                    </a>
                    <Link href={"/panel/dashboard"}>
                      <a
                        className={
                          "btnLogin d-flex align-items-center ms-2 py-1 px-2"
                        }
                      >
                        <PersonOutlineOutlinedIcon sx={{ mr: "5px" }} />
                        {user?.name
                          ? user?.name +
                            " " +
                            (user?.family ? user?.family : "")
                          : user?.email}
                      </a>
                    </Link>
                  </>
                ) : (
                  <Link href={"/auth/signin"}>
                    <a
                      className={
                        "btnLogin d-flex align-items-center ms-2 py-1 px-2"
                      }
                    >
                      Login
                    </a>
                  </Link>
                )}
                {/* <Link href={"/business"}>
                  <a
                    className={
                      "btnLogin d-flex align-items-center ms-2 py-1 px-2"
                    }
                  >
                    For businesses
                  </a>
                </Link> */}
              </Typography>
            </li>
          </ul>
        </Toolbar>
        <Box sx={sxStyles["navMobile"]}>
          <Grid
            container
            rowSpacing={1}
            className={"w-100 m-0 py-1 pe-2"}
            columnSpacing={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
          >
            <Grid item sm={1} xs={2} className={"p-2 align-self-center"}>
              <Button
                size="small"
                className={"btnSide"}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={sxStyles["menuIcon"]} />
              </Button>
            </Grid>
            <Grid
              item
              sm={9}
              xs={7}
              className={"align-self-center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {user?.name ? (
                <>
                  <a
                    onClick={handleLogout}
                    className={
                      "btnLogin d-flex align-items-center ms-2 py-1 px-2"
                    }
                  >
                    Logout
                  </a>
                  <Link href={"/panel/dashboard"}>
                    <a
                      className={
                        "btnLogin d-flex align-items-center ms-2 py-1 px-2"
                      }
                    >
                      <PersonOutlineOutlinedIcon sx={{ mr: "5px" }} />
                      {user?.name + " " + (user?.family ? user?.family : "")}
                    </a>
                  </Link>
                </>
              ) : (
                <Link href={"/auth/signin"}>
                  <a
                    className={
                      "btnLogin d-flex align-items-center ms-2 py-1 px-2"
                    }
                  >
                    Login
                  </a>
                </Link>
              )}
              {/* <Link href={"/business"}>
                <a
                  className={
                    "btnLogin d-flex align-items-center ms-2 py-1 px-2"
                  }
                >
                  For businesses
                </a>
              </Link> */}
              {router.pathname !== "/" && <SearchInnerPage />}
            </Grid>
            <Grid
              item
              sm={2}
              xs={3}
              className={"textRight p-2 align-self-center ms-auto"}
            >
              <Box>
                <Link href="/">
                  <a>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/images/brandslogo.webp"
                      }
                      alt="brandslogo"
                      className={"pointer"}
                      width="100%"
                      height="100%"
                    />
                  </a>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <SwipeableDrawer
            anchor={"left"}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            className={"w-75 mobilenav"}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                position: "relative",
                zIndex: "2",
              }}
            >
              {user?._id && (
                <List className={"py-0"}>
                  <ListItem
                    className={"px-4 py-3 loginmobileBtn"}
                    button
                    onClick={() => router.push("")}
                  >
                    <img
                      src={
                        process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/images/user.webp"
                      }
                      alt="user"
                      className={"iconNav"}
                    />
                    <Typography className={"ms-2"} color={"white"}>
                      {user.name}
                    </Typography>
                  </ListItem>
                </List>
              )}
              <List className={"py-0"}>
                <ListItem
                  className={"px-4 py-5 logomobsidbox"}
                  button
                  onClick={() => router.push("")}
                >
                  <img
                    alt=""
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER +
                      "/images/brandslogo.webp"
                    }
                    className={"logosidebar"}
                  />
                </ListItem>
              </List>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className={"px-0"}
                >
                  <img
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER +
                      "/images/ic/ic-5.webp"
                    }
                    alt=""
                    className={"iconNav me-2"}
                  />
                  <Typography>Categories</Typography>
                </AccordionSummary>
                <AccordionDetails className={"p-2"}>
                  <Typography>
                    <MegaMobile categories={props?.categories} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <List className={"py-0"}>
                {items?.map((navitems, index) => (
                  <NavbarMobile
                    key={index}
                    icon={navitems.icon}
                    title={navitems.title?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )}
                    url={navitems.url}
                  />
                ))}
              </List>
            </Box>
            <Typography
              textAlign={"center"}
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "0px",
                right: "0px",
                opacity: "0.3",
                zIndex: "1",
              }}
            >
              brandsreviews.com
            </Typography>
          </SwipeableDrawer>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
