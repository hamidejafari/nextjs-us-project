import React, { useState } from "react";
import {
  Grid,
  Typography,
  Rating,
  Card,
  Divider,
  Box,
  Hidden,
} from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
// styles
import sxStyles from "../../styles/style";

// components
import ProsCons from "./ProsCons";

function TopBrands(props) {
  const router = useRouter();
  const reviewCount = props.reviewsNumber;
  return (
    <Grid xs={12} className={"p-2"}>
      <Card className={"p-2 shadow-none rounded-0"}>
        <Grid container spacing={1} className={"w-100 m-0"}>
          {/* mobile name product */}
          <Hidden mdUp={true}>
            <Grid item xs={12} sx={sxStyles["sideMob"]}>
              <Grid container spacing={1} className={"w-100 mx-0 my-1"}>
                {props.number && (
                  <Grid
                    item
                    xl={2}
                    md={3}
                    sm={2}
                    xs={2}
                    className={"p-1 align-self-center textCenter"}
                  >
                    <Box className={"textCenter bgSecondary numberbox"}>
                      <Typography
                        variant="h5"
                        component="div"
                        color={"white"}
                        className={"fw-bolder"}
                      >
                        {props.number}
                      </Typography>
                    </Box>
                  </Grid>
                )}
                <Grid
                  item
                  xl={10}
                  md={9}
                  sm={10}
                  xs={10}
                  className={"p-1 align-self-center textLeft"}
                >
                  <Typography
                    fontSize={15}
                    component="h4"
                    className={"fw-bolder"}
                  >
                    {props.productName}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* mobile name product */}
          </Hidden>
          <Grid item xl={3} lg={4} md={5} sm={6} xs={12} className={"p-1"}>
            <Link
              href={"/" + props.reviewsUrl}
              size="medium"
              variant="contained"
            >
              <a>
                <div className={"figure pointer"}>
                  <div className={"figure-inn"}>
                    <img
                      className="img-fluid"
                      width="100%"
                      height="auto"
                      src={
                        props.image
                          ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/medium/" +
                            props.image
                          : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/placeholder/product-sample.webp"
                      }
                      alt={props.alt}
                    />
                  </div>
                </div>
              </a>
            </Link>
          </Grid>
          <Grid
            item
            md={12}
            xs={12}
            sm={6}
            className={"p-2"}
            sx={{
              display: { md: "none", sm: "block", xs: "none" },
            }}
          >
            <Typography
              variant="body1"
              component="body1"
              className={"descriptionBest"}
              fontSize={"0.9rem"}
            >
              <div
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></div>
            </Typography>
          </Grid>
          <Grid item xl={9} lg={8} md={7} sm={12} className={"p-1"}>
            <Grid container spacing={1} className={"w-100 m-0"}>
              <Grid xl={9} lg={8} md={12} sm={12} xs={12} className={"p-1"}>
                {/* desktop name product */}
                <Grid
                  container
                  spacing={1}
                  className={"w-100 mx-0 my-1"}
                  sx={sxStyles["sideDesk"]}
                >
                  {props.number && (
                    <Grid
                      item
                      xl={2}
                      md={3}
                      sm={2}
                      xs={3}
                      className={"p-1 align-self-center textCenter"}
                    >
                      <Box className={"textCenter bgSecondary numberbox"}>
                        <Typography
                          variant="h4"
                          component="div"
                          color={"white"}
                          className={"fw-bolder"}
                        >
                          {props.number}
                        </Typography>
                      </Box>
                    </Grid>
                  )}
                  <Grid
                    item
                    xl={10}
                    md={9}
                    sm={10}
                    xs={12}
                    className={"p-1 align-self-center textLeft"}
                  >
                    <Typography
                      fontSize={22}
                      component="h4"
                      className={"fw-bolder"}
                    >
                      {props.productName}
                    </Typography>
                  </Grid>
                </Grid>
                {/* desktop name product */}
                <Grid container spacing={1} className={"w-100 mx-0 my-1"}>
                  <Grid
                    item
                    xl={4}
                    md={12}
                    sm={4}
                    xs={12}
                    className={"p-1 align-self-center"}
                  >
                    <Rating
                      name="half-rating-read"
                      defaultValue={props.star}
                      precision={0.5}
                      readOnly
                      size="large"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={3}
                    md={6}
                    sm={4}
                    xs
                    className={"p-1 align-self-center textLeft"}
                  >
                    <Typography variant="body1" component="div" fontSize={13}>
                      <span className={"fw-bolder me-1"}>{reviewCount}</span>
                      reviews
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xl={5}
                    md={6}
                    sm={4}
                    xs
                    className={"p-1 align-self-center textLeft"}
                  >
                    <Typography variant="body1" component="div" fontSize={13}>
                      overall rating :
                      <span className={"fw-bolder ms-1"}>{props.star * 2}</span>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xl={3}
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className={"p-1"}
              >
                <Grid container spacing={1} className={"w-100 h-100 m-0"}>
                  <Grid
                    item
                    lg={12}
                    md={6}
                    sm={6}
                    xs={6}
                    className={"p-1 align-self-center"}
                  >
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a
                      target="_blank"
                      rel="nofollow"
                      href={props.websiteUrl}
                      size="medium"
                      variant="contained"
                      className={
                        "w-100 btnVisit d-flex align-items-center justify-content-center p-1"
                      }
                    >
                      <Typography
                        sx={{ fontSize: { md: "1rem", xs: "0.8rem" } }}
                        textAlign={"center"}
                      >
                        visit website
                      </Typography>
                    </a>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={6}
                    sm={6}
                    xs={6}
                    className={"p-1 align-self-center"}
                  >
                    <Link
                      href={"/" + props.reviewsUrl}
                      size="medium"
                      variant="contained"
                    >
                      <a
                        className={
                          "w-100 btnReview d-flex align-items-center justify-content-center p-1"
                        }
                      >
                        <Typography
                          sx={{ fontSize: { md: "1rem", xs: "0.8rem" } }}
                          textAlign={"center"}
                        >
                          see reviews
                        </Typography>
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid
              item
              md={12}
              xs={12}
              sm={6}
              className={"p-2"}
              sx={{ display: { md: "block", sm: "none", xs: "block" } }}
            >
              <Typography
                variant="body1"
                component="body1"
                className={"descriptionBest"}
                fontSize={"0.9rem"}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: props.description }}
                ></div>
              </Typography>
            </Grid>
          </Grid>

          {(props?.pros.length > 0 || props?.cons.length > 0) && (
            <Grid item xs={12} className={"p-1"}>
              <ProsCons pros={props?.pros} cons={props?.cons} />
            </Grid>
          )}
        </Grid>
      </Card>
    </Grid>
  );
}

export default TopBrands;
