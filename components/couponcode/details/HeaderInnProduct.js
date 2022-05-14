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
  Button,
} from "@mui/material";

// styles
import sxStyles from "../../../styles/style";

function copyText(entryText) {
  navigator.clipboard.writeText(entryText);
}

function HeaderInnProduct(props) {
  const { product } = props;

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
                  lg={9}
                  md={8}
                  sm={12}
                  xs={12}
                  alignSelf={"center"}
                  className={"p-0"}
                >
                  <Grid container spacing={1} className={"w-100 m-0"}>
                    <Grid md={12} className={"p-0"}>
                      <Grid container spacing={1} className={"w-100 m-0"}>
                        <Grid lg={9} md={8} className={"p-1"}>
                          <Grid container spacing={1} className={"w-100 m-0"}>
                            <Grid md={12} xs={12} className={"p-1"}>
                              <Typography
                                variant="h6"
                                component="div"
                                fontSize={20}
                                className={"textSecondary"}
                              >
                                {product.occasion}
                              </Typography>
                            </Grid>
                            <Grid md={12} xs={12} className={"p-1"}>
                              <Typography
                                variant="h4"
                                component="h2"
                                fontWeight={"bolder"}
                              >
                                {product.title}
                              </Typography>
                            </Grid>
                            <Grid
                              sm={4}
                              xs={6}
                              className={"p-1"}
                              sx={sxStyles["noneDesktop"]}
                              alignSelf={"center"}
                            >
                              <img
                                alt={product.image?.alt}
                                src={
                                  product.image?.fileName
                                    ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                      "/files/images/main/" +
                                      product.image?.fileName
                                    : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                      "/files/images/placeholder/brand-logo.webp"
                                }
                                className={"w-100"}
                              />
                            </Grid>
                            <Grid
                              md={12}
                              sm={8}
                              xs={12}
                              className={"p-1"}
                              alignSelf={"center"}
                            >
                              <Grid
                                container
                                spacing={1}
                                className={"w-100 m-0"}
                              >
                                <Grid
                                  lg
                                  md={12}
                                  sm={12}
                                  xs={12}
                                  className={"px-1"}
                                  alignSelf={"center"}
                                >
                                  <Stack spacing={1}>
                                    <Rating
                                      name="half-rating-read"
                                      size="large"
                                      defaultValue={product.star}
                                      precision={0.5}
                                      readOnly
                                    />
                                  </Stack>
                                </Grid>
                                <Grid
                                  lg
                                  md={12}
                                  sm={12}
                                  xs={12}
                                  className={"p-1"}
                                  alignSelf={"center"}
                                >
                                  <Typography variant="h6" component="div">
                                    Expiration date :{" "}
                                    {new Date(
                                      product.maxExpirationDate
                                    ).toLocaleString("en-GB", {
                                      year: "numeric",
                                      month: "2-digit",
                                      day: "numeric",
                                    })}
                                  </Typography>
                                </Grid>
                                <Grid
                                  lg
                                  md={12}
                                  sm={12}
                                  xs={12}
                                  className={"p-1"}
                                  alignSelf={"center"}
                                  sx={sxStyles["noneDesktop"]}
                                >
                                  <Typography
                                    variant="h2"
                                    component="div"
                                    fontWeight={"bolder"}
                                    className={"textSecondary"}
                                  >
                                    {product.maxDiscount}%{" "}
                                    <span className={"off"}>off</span>
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          lg={3}
                          md={4}
                          className={"p-2"}
                          alignSelf={"end"}
                          textAlign={"end"}
                          sx={sxStyles["noneMobile"]}
                        >
                          <Typography
                            variant="h2"
                            component="div"
                            fontWeight={"bolder"}
                            className={"textSecondary"}
                          >
                            {product.maxDiscount}%{" "}
                            <span className={"off"}>off</span>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider />
                    </Grid>
                    <Grid md={12} className={"p-2"}>
                      <Typography
                        variant="body1"
                        component="div"
                        textAlign={"justify"}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.descriptionShort,
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid md={12} className={"p-2"}></Grid>
                  </Grid>
                </Grid>
                <Grid
                  lg={3}
                  md={4}
                  sm={12}
                  xs={12}
                  alignSelf={"center"}
                  className={"p-2"}
                  sx={sxStyles["noneMobile"]}
                >
                  <img
                    alt={product.image?.alt}
                    src={
                      product.image?.fileName
                        ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/main/" +
                          product.image?.fileName
                        : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/placeholder/brand-logo.webp"
                    }
                    className={"w-100"}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderInnProduct;
