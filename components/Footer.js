import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
} from "@mui/material";

// components
import Links from "./footer/Links";
import Social from "./footer/Social";

// sx styles
import sxStyles from "../styles/style";

function Footer(props) {
  const setting = props?.setting;
  const link = [
    {
      title: "Blog",
      url: "blog",
    },
    {
      title: "Categories",
      url: "categories",
    },
    {
      title: "Brands",
      url: "brand",
    },
    {
      title: "Contact",
      url: "contact-us",
    },
    {
      title: "Sign in",
      url: "auth/signin",
    },
    {
      title: "Comparison",
      url: "comparison/list",
    },
    {
      title: "Review policy",
      url: "review-policy",
    },
  ];

  const buttons = [
    {
      icon: "/images/social/facebook.webp",
      url: setting?.facebook,
    },
    {
      icon: "/images/social/insta.webp",
      url: setting?.instagram,
    },
    {
      icon: "/images/social/twitter.webp",
      url: setting?.twitter,
    },
    {
      icon: "/images/social/4.webp",
      url: setting?.pinterest,
    },
    {
      icon: "/images/social/tiktok.webp",
      url: setting?.tiktok,
    },
  ];

  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <Box className={"footer"}>
      <div className={"footer-inn"}>
        <Container maxWidth="xl">
          <Box className={"w-100 m-0"}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{
                xs: 1,
                sm: 2,
                md: 3,
              }}
              className={"w-100 m-0"}
            >
              <Grid item md={5} sm={6} xs={12} className={"py-2"}>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={"textSecondary"}
                  sx={sxStyles["footerTitles"]}
                  fontSize={15}
                >
                  About Us
                </Typography>
                <List>
                  <ListItem>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={sxStyles["footerDes"]}
                      className={"w-100 footerDes"}
                    >
                      {setting?.footerInfo}
                      {/* <ShowMoreText
                        lines={4}
                        more={"Show More"}
                        less={"Show Less"}
                        onClick={onClick}
                        expanded={expand}
                        height={300}
                      ></ShowMoreText> */}
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={3} sm={6} xs={12} className={"py-2"}>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={"textSecondary mb-2"}
                  sx={sxStyles["footerTitles"]}
                >
                  Quick Access
                </Typography>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                  }}
                  className={"w-100 m-0"}
                >
                  {link?.map((linkItem, index) => (
                    <Links
                      key={index}
                      title={linkItem.title}
                      url={linkItem.url}
                    />
                  ))}
                </Grid>
              </Grid>
              <Grid item md={4} sm={12} xs={12} className={"py-2"}>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={"textSecondary"}
                  sx={sxStyles["footerTitles"]}
                >
                  Contact
                </Typography>
                <List>
                  <ListItem>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={sxStyles["footerDes"]}
                      className={"w-100 footerDes"}
                    >
                      {setting?.footerContact}
                      {/* <ShowMoreText
                        lines={4}
                        more={"Show More"}
                        less={"Show Less"}
                        onClick={onClick}
                        expanded={expand}
                        height={300}
                        className={"showmore"}
                      ></ShowMoreText> */}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    {buttons?.map((socialbtn, index) => (
                      <Social
                        key={index}
                        icon={socialbtn.icon}
                        url={socialbtn.url}
                      />
                    ))}
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <Box className={"bottom"}>
        <Grid item xs={12} className={"textCenter"}>
          <Typography variant="body2">
            Copyright © 2022, All Rights Reserved.
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
