import React from "react";
import { Card, Grid, List, Typography } from "@mui/material";

// components
import TopBrands from "./TopBrands";

// styles
import sxStyles from "../../styles/style";

function Sidebar(props) {
  return (
    <>
      {props.category?.brands.length > 0 && (
        <Grid container spacing={1} className={"w-100 m-0 d-block-side"}>
          <Grid item xs={12} className={"pb-4"}>
            <Card
              className={"sidebarBest sideborder"}
              sx={{ display: { md: "block", xs: "none" } }}
            >
              <Grid container spacing={1} className={"w-100 m-0"}>
                <Grid item xs={12} className={"px-3"}>
                  <Typography
                    variant="h6"
                    component="div"
                    fontSize={"1rem"}
                    className={"textSecondary fw-bolder"}
                  >
                    Top {props.category.title} brands
                  </Typography>
                </Grid>
                <Grid item xs={12} className={"p-3"}>
                  <List className={"ul"} sx={sxStyles["ul"]}>
                    {props.category?.brands?.map((brandcontent, index) => (
                      <TopBrands
                        key={index}
                        name={brandcontent?._id?.title}
                        number={"#" + brandcontent?.standing}
                        url={brandcontent?._id?.slug}
                        image={brandcontent?._id?.image}
                      />
                    ))}
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
                    fontSize={"1rem"}
                    className={"textSecondary fw-bolder"}
                  >
                    Top {props.category.title} brands
                  </Typography>
                </Grid>
                <Grid item xs={12} className={"p-1"}>
                  <List className={"ul"}>
                    {props.category?.brands?.map((brandcontent, index) => (
                      <TopBrands
                        key={index}
                        name={brandcontent?._id?.title}
                        number={"#" + brandcontent?.standing}
                        url={brandcontent?._id?.slug}
                      />
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Sidebar;
