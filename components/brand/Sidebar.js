import React from "react";
import { Card, Grid, Hidden, List, Typography } from "@mui/material";
import { useRouter } from "next/router";

// components
import TopBrands from "./TopBrands";
import BrandCategory from "./BrandCategory";
import ProImg from "./ProImg";

// styles
import sxStyles from "../../styles/style";

function Sidebar(props) {
  const router = useRouter();
  return (
    <Grid container spacing={1} className={"w-100 m-0 d-block-side"}>
      <Hidden mdDown={true}>
        <Grid xs={12} className={"pb-4"}>
          <ProImg brand={props?.brand} />
        </Grid>
      </Hidden>

      <Grid xs={12} className={"pb-4"}>
        {props?.brand?.categories.length > 0 &&
          props?.brand?.categories[0]._id && (
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
                      TOP {props?.mainCategory?.title} BRANDS
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={"p-2"}>
                    <List className={"ul"} sx={sxStyles["ul"]}>
                      {props?.mainCategory?.brands?.map(
                        (brandcontent, index) => (
                          <TopBrands
                            key={index}
                            name={brandcontent._id?.title}
                            number={brandcontent.standing}
                            url={brandcontent._id?.slug}
                          />
                        )
                      )}
                    </List>
                  </Grid>
                </Grid>
              </Card>
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
                      TOP {props?.mainCategory?.title} BRANDS
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={"p-1"}>
                    <List className={"ul"}>
                      {props?.mainCategory?.brands?.map(
                        (brandcontent, index) => (
                          <TopBrands
                            key={index}
                            name={brandcontent._id?.title}
                            number={brandcontent.standing}
                            url={brandcontent._id?.slug}
                          />
                        )
                      )}
                    </List>
                  </Grid>
                </Grid>
              </Card>
            </>
          )}
      </Grid>

      {props?.brand?.categories.length > 0 && props?.brand?.categories[0]._id && (
        <Grid xs={12} className={"pb-4"}>
          <Card
            className={"sidebarBest sideborder"}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            <Grid container spacing={1} className={"w-100 m-0"}>
              <Grid item xs={12} className={"p-3"}>
                <Typography
                  variant="h6"
                  component="div"
                  className={"textSecondary fw-bolder"}
                  fontSize={"1rem"}
                >
                  Related Categories
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-2"}>
                <Grid container spacing={1} className={"w-100 m-0 p-0"}>
                  {props?.brand?.categories?.map((picturescontent, index) =>
                    picturescontent?._id &&
                    (picturescontent?._id?.level == 2 ||
                      picturescontent?._id?.level == 3) ? (
                      <BrandCategory
                        key={index}
                        name={picturescontent._id.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                        image={picturescontent._id?.icon}
                        url={picturescontent._id.slug}
                      />
                    ) : (
                      ""
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Card>

          <Card
            className={"sidebarBest"}
            sx={{ display: { md: "none", xs: "block" } }}
          >
            <Grid container spacing={1} className={"w-100 m-0"}>
              <Grid item xs={12} className={"p-1"}>
                <Typography
                  variant="h6"
                  component="div"
                  className={"textSecondary fw-bolder"}
                  fontSize={"1rem"}
                >
                  Related Categories
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-0"}>
                <Grid container spacing={1} className={"w-100 m-0 p-0 rowmob"}>
                  {props?.brand?.categories?.map((picturescontent, index) =>
                    picturescontent?._id &&
                    (picturescontent?._id?.level == 2 ||
                      picturescontent?._id?.level == 3) ? (
                      <BrandCategory
                        key={index}
                        name={picturescontent._id.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                        image={picturescontent._id?.icon}
                        url={picturescontent._id.slug}
                      />
                    ) : (
                      ""
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}

export default Sidebar;
