import React from "react";
import { Grid, Typography, Card } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useRouter } from "next/router";
import Link from "next/link";

function CouponsBox(props) {
  const router = useRouter();
  return (
    <Grid md={12} sm={12} xs={12} className={"p-2 align-self-center"}>
      <Link href={"/" + props.url}>
        <a>
          <Card className={"blog-card"}>
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
                xl={3}
                lg={3}
                md={4}
                sm={3}
                xs={12}
                className={"p-2"}
                alignSelf="center"
              >
                <img
                  component="img"
                  alt={props.alt}
                  width="100%"
                  height="auto"
                  src={
                    props.image
                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/big/" +
                        props.image
                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/300x300.webp"
                  }
                />
              </Grid>
              <Grid
                xl={9}
                lg={9}
                md={8}
                sm={9}
                xs={12}
                className={"p-3"}
                alignSelf="center"
              >
                <Typography variant="body1" fontSize={22} fontWeight="bolder">
                  {props.title?.replace("$year$", new Date().getFullYear())}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={15}
                  textAlign="justify"
                  className={"ds"}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: props.shortDescription }}
                    className="text-justify"
                  ></div>
                </Typography>
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
                  <Grid lg={9} sm={8} xs={6} alignSelf="center">
                    <div>
                      <Typography
                        variant="body1"
                        component="div"
                        fontWeight={"bolder"}
                        display="flex"
                        alignItems="center"
                        justifyContent="end"
                        color={"#999"}
                      >
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ mr: "2px" }}
                        />
                        {props.date}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    lg={3}
                    sm={4}
                    xs={6}
                    alignSelf="center"
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <Link href={"/" + props.url}>
                      <a>
                        <Typography className={"btnReview"}>
                          See more
                        </Typography>
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </a>
      </Link>
    </Grid>
  );
}

export default CouponsBox;
