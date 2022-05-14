import React from "react";
import {
  Grid,
  Typography,
  Card,
  Stack,
  Rating,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

// styles
import sxStyles from "../../../styles/style";

function CouponsBox(props) {
  const router = useRouter();
  return (
    <Grid lg={3} md={6} sm={6} xs={12} className={"p-2 align-self-center"}>
      <Link href={"/" + props.url}>
        <a>
          <Card className={"blog-card-cat shadow-none"}>
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
                <CardMedia
                  component="img"
                  alt={props?.alt}
                  height="200"
                  image={props.image}
                />
              </Grid>
              <Grid xl={12} lg={12} md={12} sm={126} xs={12}>
                <CardContent className={"p-3"}>
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
                    <Grid xs={12} className={"p-2"} alignSelf={"center"}>
                      <Typography
                        variant="body1"
                        height={"1.75rem"}
                        textAlign={"center"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        {props.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </a>
      </Link>
    </Grid>
  );
}

export default CouponsBox;
