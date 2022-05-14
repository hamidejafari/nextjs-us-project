import React from "react";
import { Card, Grid, List, Typography } from "@mui/material";

// components
import TopBrands from "./TopBrands";

// styles
import sxStyles from "../../../styles/style";

function Sidebar(props) {
  const brands = [
    {
      name: "purekana",
      number: "#1",
      url: "best",
    },
    {
      name: "clarins",
      number: "#2",
      url: "best",
    },
    {
      name: "tatcha",
      number: "#3",
      url: "best",
    },
    {
      name: "shiseido",
      number: "#4",
      url: "best",
    },
    {
      name: "dermaset",
      number: "#5",
      url: "best",
    },
  ];

  return (
    <>
      {props.category?.brands.length > 0 && (
        <Grid container spacing={1} className={"w-100 m-0 d-block-side"}>
          <Grid xs={12} className={"p-0"}>
            <Card
              className={"sidebarBest sideborder"}
              sx={{
                display: { md: "block", xs: "none" },
                border: "0px !important",
              }}
            >
              <Grid container spacing={1} className={"w-100 m-0"}>
                <Grid item xs={12} className={"px-3"}>
                  <Typography
                    variant="h6"
                    component="div"
                    className={"textSecondary fw-bolder"}
                    fontSize={"1rem"}
                  >
                    Top{" "}
                    {props.category?.title?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )}{" "}
                    brands
                  </Typography>
                </Grid>
                <Grid item xs={12} className={"p-3"}>
                  <List className={"ul"} sx={sxStyles["ul"]}>
                    {props.category?.brands?.map((brandcontent, index) => (
                      <TopBrands
                        key={index}
                        name={brandcontent?._id.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                        number={"#" + brandcontent.standing}
                        url={brandcontent?._id.slug}
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
                    className={"textSecondary fw-bolder"}
                    fontSize={"1rem"}
                  >
                    Top{" "}
                    {props.category?.title?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )}{" "}
                    brands
                  </Typography>
                </Grid>
                <Grid item xs={12} className={"p-1"}>
                  <List className={"ul"}>
                    {props.category?.brands?.map((brandcontent, index) => (
                      <TopBrands
                        key={index}
                        name={brandcontent?._id.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                        number={"#" + brandcontent.standing}
                        url={brandcontent?._id.slug}
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
