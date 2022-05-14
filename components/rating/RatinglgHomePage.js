import React from "react";
import { Grid, Typography, Card, Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function RatinglgHomePage(props) {
  const router = useRouter();
  return (
    <Grid lg={2} md={3} sm={4} xs={6} className={"textCenter px-2 py-4"}>
      <Box className={"pointer"}>
        <Link href={"/" + props.url}>
          <a>
            <Card className={"imgCard p-1"}>
              <img
                loading="lazy"
                src={
                  props.image
                    ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                      "/files/images/medium/" +
                      props.image
                    : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                      "/files/images/placeholder/300x396.webp"
                }
                alt={props.alt}
                width={props?.width ? "50%" : "100%"}
                height={props?.width ? "50%" : "100%"}
              />

              <Typography
                variant="body2"
                gutterBottom
                fontSize={"0.8rem"}
                my={1}
                fontWeight={"lighter"}
                px={1}
                sx={{
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {props.title?.replace("$year$", new Date().getFullYear())}
              </Typography>
            </Card>
          </a>
        </Link>
      </Box>
    </Grid>
  );
}
export default RatinglgHomePage;
