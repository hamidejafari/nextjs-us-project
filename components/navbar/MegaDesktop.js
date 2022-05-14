import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import SimpleBar from "simplebar-react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function MegaDesktop(props) {
  const [value, setValue] = useState(0);
  const [showItem, setShowItem] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
      <Grid
        container
        rowSpacing={1}
        className={"w-100 m-0"}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
      >
        <Grid item xl={2} md={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
            className={"h-100"}
          >
            {props.categories?.map((item, index) => (
              <Tab
                key="item._id"
                onClick={() => {
                  setShowItem(index);
                }}
                label={item.title?.replace("$year$", new Date().getFullYear())}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xl={10} md={9}>
          {props.categories?.map((item, index) => (
            <div
              key={index}
              style={
                showItem === index ? { display: "block" } : { display: "none" }
              }
              className="p-3"
              value={value}
              index={index}
            >
              <Typography
                className={"d-flex align-items-center textSecondary"}
                variant="h5"
                noWrap
                component="div"
                fontWeight={"bolder"}
                mb={1}
              >
                {/* <GridViewOutlinedIcon className={"mb-1 me-1"} /> */}
                <div className={"catMegaImgBox"}>
                  <img
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER +
                      "/files/images/main/" +
                      item.icon?.fileName
                    }
                    width="20"
                    height="20"
                    alt={item.icon?.alt}
                    className={"catImgMega"}
                  />
                </div>
                <Link href={"/" + item.slug}>
                  <a>
                    <Typography
                      noWrap
                      component="div"
                      className={"textSecondary"}
                      fontWeight={"bolder"}
                      fontSize={20}
                      mt={1}
                    >
                      {item.title?.replace("$year$", new Date().getFullYear())}
                    </Typography>
                  </a>
                </Link>
              </Typography>
              <Divider />
              <SimpleBar style={{ maxHeight: "20rem" }}>
                <Grid
                  container
                  rowSpacing={1}
                  className={"w-100 mx-0 mt-2 boxmega"}
                  columnSpacing={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                  }}
                >
                  {item.childs?.map((sub, indexSub) => (
                    <Grid item key={indexSub} xl={3} md={4}>
                      <List key={indexSub} className={"p-0 m-0"}>
                        <ListItem className={"px-0 py-1"}>
                          <ListItemText className={"p-0 m-0"}>
                            <Link
                              href={"/" + sub.slug}
                              className={"p-0 m-0 d-flex align-items-center"}
                              color={"#000"}
                              fontWeight={"bolder"}
                              fontSize={15}
                            >
                              <a className={"px-0"}>
                                <Typography
                                  noWrap
                                  component="div"
                                  color={"#000"}
                                  fontWeight={"bolder"}
                                  fontSize={17}
                                >
                                  {sub.title?.replace(
                                    "$year$",
                                    new Date().getFullYear()
                                  )}
                                </Typography>
                              </a>
                            </Link>
                          </ListItemText>
                        </ListItem>
                        {sub.childs?.map((subChild, indexSubChild) => (
                          <ListItem key={indexSubChild} className={"px-0 py-1"}>
                            <ListItemText className={"p-0 m-0"}>
                              <Link
                                href={"/" + subChild.slug}
                                className={"p-0 m-0"}
                              >
                                <a className={"p-0 d-flex"}>
                                  <Typography
                                    noWrap
                                    component="div"
                                    fontSize={15}
                                    color={"#555"}
                                    fontWeight={"light"}
                                  >
                                    {subChild.title?.replace(
                                      "$year$",
                                      new Date().getFullYear()
                                    )}
                                  </Typography>
                                </a>
                              </Link>
                            </ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  ))}
                </Grid>
              </SimpleBar>
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default MegaDesktop;
