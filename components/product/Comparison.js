import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function Comparison(props) {
  return (
    <Grid item xs={12} className={"p-2 vs"}>
      <Link href={"/"+props.url}>
        <a>
          <Card className={"vsCard"}>
            <div className={"vsCardInn"}>
              <Grid container>
                <Grid xs={4} alignSelf={"center"}>
                  <Card className={"imgCard"}>
                    <img
                      src={props.image1}
                      alt={props.title2?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                    />
                  </Card>
                </Grid>
                <Grid xs={4} alignSelf={"center"}>
                  <Typography
                    variant="body1"
                    textAlign={"center"}
                    fontSize={15}
                  >
                    Vs
                  </Typography>
                </Grid>
                <Grid xs={4} alignSelf={"center"}>
                  <Card className={"imgCard"}>
                    <img
                      src={props.image2}
                      alt={props.title2?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                    />
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Card>
        </a>
      </Link>
    </Grid>
  );
}

export default Comparison;
