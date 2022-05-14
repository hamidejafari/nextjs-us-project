import React from "react";
import { Grid, Typography, Card, Chip, Avatar } from "@mui/material";
import Link from "next/link";
import { textAlign } from "@mui/system";

function RelatedVs(props) {
  return (
    <Grid xs={12} className={"p-2"}>
      <Card className={"cardRelatedVs vs shadow-none p-2 rounded-0"}>
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
            sm={4}
            xs={12}
            alignSelf={"center"}
            sx={{
              pl: {
                lg: "3rem",
                xs: "0",
              },
              textAlign: {
                lg: "start",
                xs: "center",
              },
            }}
            className={"py-2"}
          >
            <Chip
              className={"chipName m-0"}
              avatar={<Avatar>#1</Avatar>}
              label={props.title1}
              variant="outlined"
            />
          </Grid>
          <Grid sm={4} xs={12} alignSelf={"center"} className={"py-2 px-4"}>
            <Grid xs={12} className={"textCenter"}>
              <Link href={"/" + props.url}>
                <a>
                  <Card className={"vsCard"}>
                    <div className={"vsCardInn"}>
                      <Grid container>
                        <Grid xs={4} sx={{ alignSelf: "center" }}>
                          <Card className={"imgCard"}>
                            <img
                              src={
                                props.image1
                                  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                    "/files/images/medium/" +
                                    props.image1
                                  : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                    "/files/images/placeholder/product-sample.webp"
                              }
                              alt={props.alt1}
                            />
                          </Card>
                        </Grid>
                        <Grid xs={4} sx={{ alignSelf: "center" }}>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "20px",
                            }}
                          >
                            Vs
                          </Typography>
                        </Grid>
                        <Grid xs={4} sx={{ alignSelf: "center" }}>
                          <Card className={"imgCard"}>
                            <img
                              src={
                                props.image2
                                  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                    "/files/images/medium/" +
                                    props.image2
                                  : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                    "/files/images/placeholder/product-sample.webp"
                              }
                              alt={props.alt2}
                            />
                          </Card>
                        </Grid>
                      </Grid>
                    </div>
                  </Card>
                </a>
              </Link>
            </Grid>
          </Grid>
          <Grid
            sm={4}
            xs={12}
            alignSelf={"center"}
            sx={{
              pl: {
                lg: "3rem",
                xs: "0",
              },
              textAlign: {
                lg: "start",
                xs: "center",
              },
            }}
            className={"py-2"}
          >
            <Chip
              className={"chipName m-0"}
              avatar={<Avatar>#2</Avatar>}
              label={props.title2}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default RelatedVs;
