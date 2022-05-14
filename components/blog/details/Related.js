import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function Related(props) {
  const router = useRouter();
  return (
    <div className={"p-2 blogs"}>
      <Link href={"/" + props.url}>
        <a>
          <Card className={"blog-card shadow-none"}>
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
              <Grid xl={12} lg={12} md={12} sm={126} xs={12}>
                <img
                  src={
                    props.image?.fileName
                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/big/" +
                        props.image?.fileName
                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/300x300.webp"
                  }
                  alt={props.image?.alt}
                  className={"w-100"}
                />
              </Grid>
              <Grid xl={12} lg={12} md={12} sm={126} xs={12}>
                <CardContent className={"px-0 CardContent"}>
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
                      xl={2}
                      lg={3}
                      md={3}
                      sm={2}
                      xs={3}
                      className={"date"}
                      textAlign={"center"}
                    >
                      <div>
                        <Typography
                          variant="body1"
                          component="div"
                          fontWeight={"bolder"}
                        >
                          {props.day}
                        </Typography>
                        <Typography variant="body1" component="div">
                          {props.month}
                        </Typography>
                        <Typography variant="body1" component="div">
                          {props.year}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      xl={10}
                      lg={9}
                      md={9}
                      sm={10}
                      xs={9}
                      className={"p-2"}
                      alignSelf={"center"}
                    >
                      <Typography variant="body1">
                        {props.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </a>
      </Link>
    </div>
  );
}

export default Related;
