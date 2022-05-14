import React from "react";
import { Grid, Typography, Card } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// styles
import sxStyles from "../../styles/style";

function VsComponentDesk(props) {
  const router = useRouter();
  return (
    <Grid
      lg={4}
      md={4}
      sm={4}
      xs={12}
      sx={{ p: "20px" }}
      className={"textCenter"}
    >
      <Link href={"/" + props.url}>
        <a>
          <Card className={"vsCard"}>
            <div className={"vsCardInn"}>
              <Grid container>
                <Grid xs={4} sx={{ alignSelf: "center" }}>
                  <Card className={"imgCard"}>
                    <img
                      loading="lazy"
                      alt="first page banner"
                      src={
                        props.image1?.fileName
                          ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/main/" +
                            props.image1?.fileName
                          : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/placeholder/brand-logo.webp"
                      }
                    />
                  </Card>
                </Grid>
                <Grid xs={4} sx={{ alignSelf: "center" }}>
                  <Typography
                    variant="body1"
                    fontSize={17.5}
                    mt={"3px"}
                    fontWeight="bolder"
                  >
                    Vs
                  </Typography>
                </Grid>
                <Grid xs={4} sx={{ alignSelf: "center" }}>
                  <Card className={"imgCard"}>
                    <img
                      alt="first page banner"
                      src={
                        props.image2?.fileName
                          ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/main/" +
                            props.image2?.fileName
                          : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/placeholder/brand-logo.webp"
                      }
                    />
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Card>
          <Grid container>
            <Grid xs={4} sx={{ alignSelf: "center", mr: "auto" }}>
              <Typography
                variant="body1"
                className={"brName"}
                fontWeight={"bolder"}
                fontSize={10}
              >
                {props.title1?.replace("$year$", new Date().getFullYear())}
              </Typography>
            </Grid>
            <Grid xs={4} sx={{ alignSelf: "center", ml: "auto" }}>
              <Typography
                variant="body1"
                className={"brName"}
                fontWeight={"bolder"}
                fontSize={10}
              >
                {props.title2?.replace("$year$", new Date().getFullYear())}
              </Typography>
            </Grid>
          </Grid>
        </a>
      </Link>
    </Grid>
  );
}

export default VsComponentDesk;
