import React from "react";
import { Grid, Typography, Card, Stack, Rating } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

// styles
import sxStyles from "../../../styles/style";

function CouponsBox(props) {
  const router = useRouter();
  return (
    <Grid
      lg={6}
      md={12}
      sm={6}
      xs={12}
      className={"px-2 py-3 align-self-center"}
    >
      <Card className={"couponCard"}>
        <Grid
          container
          className={"w-100 m-0"}
          rowSpacing={1}
          columnSpacing={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
        >
          <Grid xs={2} className={"p-3 bgSecondary occasion"}>
            <Typography
              variant="body2"
              gutterBottom
              sx={sxStyles["couponOccasion"]}
            >
              {props.occasion}
            </Typography>
          </Grid>
          <Grid xs={7} className={"py-2 px-4 bgGray content"}>
            <Grid
              container
              className={"w-100 m-0"}
              rowSpacing={1}
              columnSpacing={{
                xs: 1,
                sm: 2,
                md: 3,
              }}
            >
              <Grid xs={12} className={"px-0 py-0"}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={sxStyles["couponName"]}
                >
                  {props.name}
                </Typography>
              </Grid>
              <Grid xs={9} className={"px-0 py-0"}>
                <Stack spacing={0}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.15}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </Stack>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={sxStyles["couponDate"]}
                >
                  Expiration date: {props.date}
                </Typography>
              </Grid>
              <Grid xs={3} className={"px-0 py-1 off"}>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={"textSecondary"}
                  sx={sxStyles["couponPercentage"]}
                >
                  {props.percentage}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={sxStyles["couponOff"]}
                >
                  off
                </Typography>
              </Grid>
              <Grid xs={12} className={"px-0 py-0"}>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={"desc"}
                  sx={sxStyles["couponDes"]}
                >
                  {props.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={3} className={"py-1 ps-4 pe-2 bgGray img"}>
            <div className={"imgInn"}>
              <Grid xs={12} className={"py-1 px-2 d-flex"}>
                <img alt={props?.alt} src={props.image} className={"w-100"} />
              </Grid>
              <Grid xs={12} className={"py-1 px-2"}>
                <Link href={"/" + props.url} class={"w-100 d-flex pointer"}>
                  <a>See all</a>
                </Link>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default CouponsBox;
