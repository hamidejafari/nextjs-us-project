import React from "react";
import {
  Container,
  Grid,
  Card,
  Fab,
  Typography,
  Chip,
  Avatar,
  Stack,
  Rating,
  Link,
  Box,
} from "@mui/material";
import NextLink from "next/link";

function VsHeader(props) {
  const { comparison } = props;
  return (
    <Container>
      <Grid xs={12} className={"px-2 pb-3 pt-4 vs-header"}>
        <Card className={"p-0 shadow-none rounded-0 card-header"}>
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
            <Grid sm={5} xs={6} className={"p-1"}>
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
                <Grid
                  xl={5}
                  lg={5}
                  md={4}
                  sm={5}
                  xs={7}
                  className={"d-flex p-1"}
                  alignSelf={"center"}
                >
                  <NextLink
                    href={
                      comparison?.onModel === "product"
                        ? "/" + comparison?.compare1Id?.slug
                        : comparison?.onModel === "brand"
                        ? "/brand/" + comparison?.compare1Id?.slug
                        : null
                    }
                  >
                    <img
                      src={
                        comparison?.onModel === "product"
                          ? comparison?.compare1Id?.image?.fileName
                            ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                              "/files/images/main/" +
                              comparison?.compare1Id?.image?.fileName
                            : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                              "/files/images/placeholder/product-sample.webp"
                          : comparison?.onModel === "brand"
                          ? comparison?.compare1Id?.image?.fileName
                            ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                              "/files/images/main/" +
                              comparison?.compare1Id?.image?.fileName
                            : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                              "/files/images/placeholder/brand-logo.webp"
                          : null
                      }
                      alt={comparison?.compare1Id?.image?.alt}
                      className={"pointer"}
                      width="100%"
                      height="auto"
                    />
                  </NextLink>
                </Grid>
                <Grid
                  xl={7}
                  lg={7}
                  xs={12}
                  alignSelf={"center"}
                  className={"p-1"}
                >
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
                    <Grid xs={12} className={"p-1"}>
                      {comparison?.compare1Id?.brandId?.flag?.code && (
                        <Chip
                          avatar={
                            <Avatar
                              alt={
                                comparison?.onModel === "product"
                                  ? comparison?.compare1Id?.brandId?.flag?.name
                                  : comparison?.compare1Id?.flag?.name
                              }
                              src={
                                comparison?.onModel === "product"
                                  ? "/flags/" +
                                    comparison?.compare1Id?.brandId?.flag?.code.toLowerCase() +
                                    ".svg"
                                  : "/flags/" +
                                    comparison?.compare1Id?.flag?.code.toLowerCase() +
                                    ".svg"
                              }
                              sx={{ width: 35, height: 20 }}
                            />
                          }
                          label={comparison?.compare1Id?.brandId?.flag?.code}
                          variant="outlined"
                          className={"chip"}
                        />
                      )}
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
                      <Typography
                        sx={{
                          fontSize: {
                            md: 20,
                            sm: 17,
                            xs: 14,
                          },
                        }}
                        fontWeight={"bolder"}
                        height={"3.5rem"}
                        display={"flex"}
                        alignItems={"flex-start"}
                      >
                        {comparison?.compare1Id?.title}
                      </Typography>
                    </Grid>
                    <Grid xs={12} className={"px-1 pb-1"}>
                      <Stack>
                        <Rating
                          className={"me-auto"}
                          name="half-rating-read"
                          defaultValue={comparison?.compare1Id?.star}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
                      <Typography fontWeight={"bolder"}>
                        <Link
                          target="_blank"
                          rel="nofollow"
                          href={comparison?.compare1Id?.siteUrl}
                          className={"btnVisit py-1 px-3 d-flex max-content"}
                        >
                          visit website
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
                      <Typography fontWeight={"bolder"}>
                        <NextLink
                          href={
                            comparison?.onModel === "product"
                              ? "/" + comparison?.compare1Id?.slug
                              : comparison?.onModel === "brand"
                              ? "/brand/" + comparison?.compare1Id?.slug
                              : null
                          }
                        >
                          <a
                            className={
                              "btnReview py-1 px-3 d-flex max-content pointer"
                            }
                          >
                            {comparison?.onModel === "brand"
                              ? comparison?.compare1Id?.title
                              : comparison?.compare1Id?.brandId
                                  ?.productCount === 1
                              ? comparison?.compare1Id?.brandId?.title
                              : "see"}{" "}
                            reviews
                          </a>
                        </NextLink>
                      </Typography>
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
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
                        <Grid xl={6} lg={12} sm={6} xs={12} className={"p-1"}>
                          <Typography
                            sx={{
                              fontSize: {
                                sm: 15,
                                xs: 12.5,
                              },
                            }}
                          >
                            <span className={"fw-bolder"}>
                              {comparison?.compare1Id?.reviewsCount}
                            </span>{" "}
                            reviews
                          </Typography>
                        </Grid>
                        <Grid xl={6} lg={12} sm={6} xs={12} className={"p-1"}>
                          <Typography
                            sx={{
                              fontSize: {
                                sm: 15,
                                xs: 12.5,
                              },
                            }}
                          >
                            overall rating :{" "}
                            <span className={"fw-bolder"}>
                              {comparison?.compare1Id?.star * 2}
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm={2}
              textAlign={"center"}
              className={"p-1"}
              sx={{ display: { sm: "block", xs: "none" } }}
            >
              <Fab color="secondary" aria-label="add" size="larg">
                <Typography fontSize={30} fontWeight={"bolder"}>
                  VS
                </Typography>
              </Fab>
            </Grid>
            <Grid sm={5} xs={6} className={"p-1"}>
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
                <Grid
                  xl={5}
                  lg={5}
                  md={4}
                  sm={5}
                  xs={7}
                  className={"p-1"}
                  alignSelf={"center"}
                  ml={"auto"}
                  sx={{ display: { lg: "none", xs: "flex" } }}
                >
                  <NextLink
                    href={
                      comparison?.onModel === "product"
                        ? "/" + comparison?.compare2Id?.slug
                        : comparison?.onModel === "brand"
                        ? "/brand/" + comparison?.compare2Id?.slug
                        : null
                    }
                  >
                    <a>
                      <img
                        src={
                          comparison?.onModel === "product"
                            ? comparison?.compare2Id?.image?.fileName
                              ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/main/" +
                                comparison?.compare2Id?.image?.fileName
                              : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/placeholder/product-sample.webp"
                            : comparison?.onModel === "brand"
                            ? comparison?.compare2Id?.image?.fileName
                              ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/main/" +
                                comparison?.compare2Id?.image?.fileName
                              : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/placeholder/brand-logo.webp"
                            : null
                        }
                        alt={comparison?.compare2Id?.image?.alt}
                        className={"pointer"}
                        width="100%"
                        height="auto"
                      />
                    </a>
                  </NextLink>
                </Grid>
                <Grid
                  xl={7}
                  lg={7}
                  xs={12}
                  alignSelf={"center"}
                  className={"p-1"}
                  textAlign={"right"}
                >
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
                    <Grid xs={12} className={"p-1"}>
                      {comparison?.compare2Id?.brandId?.flag?.code && (
                        <Chip
                          avatar={
                            <Avatar
                              alt={
                                comparison?.onModel === "product"
                                  ? comparison?.compare2Id?.brandId?.flag?.name
                                  : comparison?.compare2Id?.flag?.name
                              }
                              src={
                                comparison?.onModel === "product"
                                  ? "/flags/" +
                                    comparison?.compare2Id?.brandId?.flag?.code.toLowerCase() +
                                    ".svg"
                                  : "/flags/" +
                                    comparison?.compare2Id?.flag?.code.toLowerCase() +
                                    ".svg"
                              }
                              sx={{ width: 35, height: 20 }}
                            />
                          }
                          label={comparison?.compare2Id?.brandId?.flag?.code}
                          variant="outlined"
                          className={"chip"}
                          sx={{ direction: "rtl" }}
                        />
                      )}
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
                      <Typography
                        sx={{
                          fontSize: {
                            md: 20,
                            sm: 17,
                            xs: 14,
                          },
                        }}
                        fontWeight={"bolder"}
                        height={"3.5rem"}
                        display={"flex"}
                        justifyContent={"flex-end"}
                        alignItems={"flex-start"}
                      >
                        {comparison?.compare2Id?.title}
                      </Typography>
                    </Grid>
                    <Grid xs={12} className={"px-1 pb-1"}>
                      <Stack>
                        <Rating
                          className={"ms-auto"}
                          name="half-rating-read"
                          defaultValue={comparison?.compare2Id?.star}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
                      <Typography fontWeight={"bolder"}>
                        <Link
                          target="_blank"
                          rel="nofollow"
                          href={comparison?.compare2Id?.siteUrl}
                          className={
                            "btnVisit py-1 ms-auto px-3 d-flex max-content pointer"
                          }
                        >
                          visit website
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
                      <Typography fontWeight={"bolder"}>
                        <NextLink
                          href={
                            comparison?.onModel === "product"
                              ? "/" + comparison?.compare2Id?.slug
                              : comparison?.onModel === "brand"
                              ? "/brand/" + comparison?.compare2Id?.slug
                              : null
                          }
                        >
                          <a
                            className={
                              "btnReview py-1 px-3 ms-auto d-flex max-content pointer"
                            }
                          >
                            {comparison?.onModel === "brand"
                              ? comparison?.compare2Id?.title
                              : comparison?.compare2Id?.brandId
                                  ?.productCount === 1
                              ? comparison?.compare2Id?.brandId?.title
                              : "see"}{" "}
                            reviews
                          </a>
                        </NextLink>
                      </Typography>
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
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
                        <Grid xl={6} lg={12} sm={6} xs={12} className={"p-1"}>
                          <Typography
                            sx={{
                              fontSize: {
                                sm: 15,
                                xs: 12.5,
                              },
                            }}
                          >
                            <span className={"fw-bolder"}>
                              {comparison?.compare2Id?.reviewsCount}
                            </span>{" "}
                            reviews
                          </Typography>
                        </Grid>
                        <Grid xl={6} lg={12} sm={6} xs={12} className={"p-1"}>
                          <Typography
                            sx={{
                              fontSize: {
                                sm: 15,
                                xs: 12.5,
                              },
                            }}
                          >
                            overall rating :{" "}
                            <span className={"fw-bolder"}>
                              {comparison?.compare2Id?.star * 2}
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  xl={5}
                  lg={5}
                  md={4}
                  sm={5}
                  xs={7}
                  className={"p-1"}
                  alignSelf={"center"}
                  ml={"auto"}
                  sx={{ display: { lg: "flex", xs: "none" } }}
                >
                  <NextLink
                    href={
                      comparison?.onModel === "product"
                        ? "/" + comparison?.compare2Id?.slug
                        : comparison?.onModel === "brand"
                        ? "/brand/" + comparison?.compare2Id?.slug
                        : null
                    }
                  >
                    <a>
                      <img
                        src={
                          comparison?.onModel === "product"
                            ? comparison?.compare2Id?.image?.fileName
                              ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/main/" +
                                comparison?.compare2Id?.image?.fileName
                              : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/placeholder/product-sample.webp"
                            : comparison?.onModel === "brand"
                            ? comparison?.compare2Id?.image?.fileName
                              ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/main/" +
                                comparison?.compare2Id?.image?.fileName
                              : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/placeholder/brand-logo.webp"
                            : null
                        }
                        alt={comparison?.compare2Id?.image?.alt}
                        className={"pointer"}
                        width="100%"
                        height="auto"
                      />
                    </a>
                  </NextLink>
                </Grid>
              </Grid>
            </Grid>
            <Fab
              color="secondary"
              aria-label="add"
              size="larg"
              sx={{ display: { sm: "none", xs: "block" } }}
            >
              <Typography fontSize={30} fontWeight={"bolder"}>
                VS
              </Typography>
            </Fab>
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
}

export default VsHeader;
