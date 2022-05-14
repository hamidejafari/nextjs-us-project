import React from "react";
import { Card, Grid, List, Typography, Button, Hidden } from "@mui/material";

// components
import TopBrands from "./TopBrands";
import CustomersPictures from "./CustomersPictures";
import ProImg from "./ProImg";
import Videos from "./Videos";
import Comparison from "./Comparison";

// styles
import sxStyles from "../../styles/style";
import Link from "next/link";

function Sidebar(props) {
  const category = props.category;
  const pictures = [];
  const comparisons = props?.comparisons;

  return (
    <>
      <Grid container spacing={1} className={"w-100 m-0 d-block-side"}>
        <Hidden mdDown={true}>
          <Grid item xs={12} className={"pb-4"}>
            <ProImg product={props.product} />
          </Grid>
        </Hidden>
        <Grid item xs={12} className={"pb-4"}>
          {category?.products.length > 0 && (
            <>
              <Card
                className={"sidebarBest sideborder"}
                sx={{ display: { md: "block", xs: "none" } }}
              >
                <Grid container spacing={1} className={"w-100 m-0"}>
                  <Grid item xs={12} className={"px-2"}>
                    <Typography
                      variant="h6"
                      component="div"
                      className={"textSecondary fw-bolder"}
                      fontSize={"1rem"}
                    >
                      {category?.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={"p-2"}>
                    <List className={"ul"} sx={sxStyles["ul"]}>
                      {category.products?.map(
                        (product, index) =>
                          product?._id?.title && (
                            <TopBrands
                              key={index}
                              name={product?._id?.title?.replace(
                                "$year$",
                                new Date().getFullYear()
                              )}
                              number={"#" + product?.standing}
                              url={product?._id?.slug}
                            />
                          )
                      )}
                    </List>
                  </Grid>
                </Grid>
              </Card>
            </>
          )}

          {category?.products.length > 0 && (
            <Card
              className={"sidebarBest"}
              sx={{ display: { md: "none", xs: "block" } }}
            >
              <Grid container spacing={1} className={"w-100 m-0"}>
                <Grid item xs={12} className={"px-1"}>
                  <Typography
                    variant="h6"
                    component="div"
                    className={"textSecondary fw-bolder"}
                    fontSize={"1rem"}
                  >
                    {category?.title?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )}{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={"p-1"}>
                  <List className={"ul"}>
                    {category.products?.map((product, index) => (
                      <TopBrands
                        key={index}
                        name={product?._id?.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                        number={"#" + product?.standing}
                        url={product?._id?.slug}
                      />
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} className={"pb-4"}>
          {props.product?.youtubeVideoLink && (
            <>
              <Card
                className={"sidebarBest sideborder"}
                sx={{ display: { md: "block", xs: "none" } }}
              >
                <Grid container spacing={1} className={"w-100 m-0"}>
                  {props.product?.youtubeVideoLink && (
                    <>
                      <Grid item xs={12} className={"p-3"}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={"textSecondary fw-bolder"}
                          fontSize={"1rem"}
                        >
                          VIDEO
                        </Typography>
                      </Grid>
                      <Videos
                        embedId={props.product?.youtubeVideoLink?.split("/")[4]}
                      />
                    </>
                  )}

                  {pictures.length > 0 && (
                    <>
                      <Grid item xs={12} className={"p-3"}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={"textSecondary fw-bolder"}
                          fontSize={"1rem"}
                        >
                          CUSTOMERS PICTURE
                        </Typography>
                      </Grid>
                      <Grid item xs={12} className={"p-2"}>
                        <Grid container spacing={1} className={"w-100 m-0 p-0"}>
                          {pictures?.map((picturescontent, index) => (
                            <CustomersPictures
                              key={index}
                              name={picturescontent.name}
                              image={picturescontent.image}
                              url={picturescontent.url}
                            />
                          ))}
                        </Grid>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Card>
              <Card
                className={"sidebarBest"}
                sx={{ display: { md: "none", xs: "block" } }}
              >
                <Grid container spacing={1} className={"w-100 m-0"}>
                  {props.product?.youtubeVideoLink && (
                    <>
                      <Grid item xs={12} className={"p-3"}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={"textSecondary fw-bolder"}
                          fontSize={"1rem"}
                        >
                          VIDEO
                        </Typography>
                      </Grid>
                      <Videos
                        embedId={props.product?.youtubeVideoLink?.split("/")[4]}
                      />
                    </>
                  )}

                  {pictures.length > 0 && (
                    <>
                      <Grid item xs={12} className={"p-1"}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={"textSecondary fw-bolder"}
                          fontSize={16}
                        >
                          CUSTOMERS PICTURE
                        </Typography>
                      </Grid>
                      <Grid item xs={12} className={"p-0"}>
                        <Grid
                          container
                          spacing={1}
                          className={"w-100 m-0 p-0 rowmob"}
                        >
                          {pictures?.map((picturescontent, index) => (
                            <CustomersPictures
                              key={index}
                              name={picturescontent.name}
                              image={picturescontent.image}
                              url={picturescontent.url}
                            />
                          ))}
                        </Grid>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Card>
            </>
          )}
        </Grid>

        {comparisons.length > 0 && (
          <Grid item xs={12} className={"pb-4"}>
            <Card className={"sidebarBest sideborder"}>
              <Grid container spacing={1} className={"w-100 m-0"}>
                <Grid item xs={12} className={"p-3"}>
                  <Typography
                    variant="h6"
                    component="div"
                    className={"textSecondary fw-bolder"}
                    fontSize={"1rem"}
                  >
                    {props.product.title?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )}{" "}
                    VS:
                  </Typography>
                </Grid>
                {comparisons?.map((vscontent, index) => (
                  <Comparison
                    key={index}
                    title1={vscontent.compare1Id?.title}
                    title2={vscontent.compare2Id?.title}
                    image1={
                      vscontent.compare1Id?.brandId?.image?.fileName
                        ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/medium/" +
                          vscontent.compare1Id?.brandId?.image?.fileName
                        : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/placeholder/brand-logo.webp"
                    }
                    image2={
                      vscontent.compare2Id?.brandId?.image?.fileName
                        ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/medium/" +
                          vscontent.compare2Id?.brandId?.image?.fileName
                        : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/placeholder/brand-logo.webp"
                    }
                    url={vscontent.slug}
                  />
                ))}
              </Grid>
            </Card>
          </Grid>
        )}
        {/* <Grid>
        <Link
          variant="contained"
          size="large"
          disableElevation
          className={"couponsBtn"}
        >
          COUPON CODE
        </Link>
      </Grid> */}
      </Grid>
      <Link href={"/" + category?.slug}>
        <a>
          <Button className={"bestBtn"} sx={sxStyles["bestBtn"]}>
            {category?.products.length +
              " " +
              category?.title?.replace("$year$", new Date().getFullYear())}{" "}
          </Button>
        </a>
      </Link>
    </>
  );
}

export default Sidebar;
