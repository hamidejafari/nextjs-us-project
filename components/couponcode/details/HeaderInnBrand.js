import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Rating,
  Stack,
  Divider,
} from "@mui/material";

// styles
import sxStyles from "../../../styles/style";

function HeaderInnBrand(props) {
  const { content } = props;

  return (
    <Box className={"headerCoupon"}>
      <Container>
        <Grid container spacing={1} className={"w-100 m-0"}>
          <Grid
            xl={8}
            lg={9}
            md={10}
            sm={11}
            xs={12}
            mx={"auto"}
            textAlign={"center"}
            className={"px-2"}
          >
            <Typography
              variant="h3"
              component="h3"
              className={"fw-bolder my-2"}
            >
              COUPON CODE
            </Typography>
          </Grid>
          <Grid xs={12} mx={"auto"} className={"px-2 pt-3"}>
            <Card className={"coupon-card"}>
              <Grid container spacing={1} className={"w-100 m-0"}>
                <Grid
                  lg={2}
                  md={3}
                  sm={4}
                  className={"p-2"}
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  <a href="">
                    <img
                      alt=""
                      width="100%"
                      height="auto"
                      src={
                        content?.image?.fileName
                          ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/main/" +
                            content?.image?.fileName
                          : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/placeholder/300x300.webp"
                      }
                    />
                  </a>
                </Grid>
                <Grid lg={10} md={9} sm={8} xs={12} className={"p-0"}>
                  <Grid container spacing={1} className={"w-100 m-0"}>
                    <Grid item xs={12} className={"p-0"}>
                      <Grid container spacing={1} className={"w-100 m-0"}>
                        <Grid item xs={12} lg={9} md={8} className={"p-1"}>
                          <Grid container spacing={1} className={"w-100 m-0"}>
                            <Grid
                              item
                              sm={4}
                              xs={12}
                              sx={{ display: { xs: "flex", sm: "none" } }}
                              className={"p-1"}
                            >
                              <img
                                alt=""
                                width="100%"
                                height="auto"
                                src={
                                  content?.image?.fileName
                                    ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                      "/files/images/main/" +
                                      content?.image?.fileName
                                    : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                      "/files/images/placeholder/300x300.webp"
                                }
                              />
                            </Grid>
                            <Grid item md={12} sm={8} xs={12} className={"p-1"}>
                              <Typography
                                variant="h4"
                                component="h1"
                                fontWeight={"bolder"}
                                sx={{ marginTop: { xs: "0.5rem", sm: 0 } }}
                              >
                                {content?.title}
                              </Typography>
                              <Rating
                                name="half-rating-read"
                                size="large"
                                defaultValue={content?.star}
                                precision={0.5}
                                readOnly
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={12} className={"p-2"}>
                      <Typography
                        variant="body1"
                        component="div"
                        textAlign={"justify"}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: content?.descriptionShort,
                          }}
                        />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderInnBrand;
