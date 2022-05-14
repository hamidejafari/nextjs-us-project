import React from "react";
import { Grid, Typography, Card } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

// styles
import sxStyles from "../../styles/style";
import Image from "next/image";

function VsComponentMob(props) {
  const router = useRouter();
  return (
    <div>
      <Grid xs={12} className={"textCenter p-1"}>
        <Link href={"/" + props.url} classes={"w-100 m-0 d-flex"}>
          <a>
            <Card className={"vsCard"}>
              <div className={"vsCardInn"}>
                <Grid container>
                  <Grid xs={4} sx={{ alignSelf: "center" }}>
                    <Card className={"imgCard"}>
                      <img
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
    </div>
  );
}

export default VsComponentMob;
