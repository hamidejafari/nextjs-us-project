import React from "react";
import { Grid, Typography, Card, Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function Cat(props) {
  const router = useRouter();
  return (
    <Grid xs={12} className={"textCenter p-2"}>
      <Box className={""}>

        <Card className={"imgCard p-1"}>
          <Grid container spacing={1} className={"w-100 m-0"}>
            <Grid xl={3} lg={4} md={5} sm={4} xs={12} className={"p-2"}>
              <Link href={"/" + props.url}>
                <a>
                  <img
                    className="img-fluid d-flex pointer"
                    width="100%"
                    height="auto"
                    src={
                      props.image?.fileName
                        ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/big/" +
                        props.image?.fileName
                        : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/300x300.webp"
                    }
                    alt={props.image?.alt}
                  />
                </a>
              </Link>

            </Grid>
            <Grid xl={9} lg={8} md={7} sm={8} xs={12} className={"p-2"}>
              <Link href={"/" + props.url}>
                <a>
                  <Typography
                    variant="body2"
                    fontWeight={"bolder"}
                    sx={{
                      height: "3rem",
                      fontSize: {
                        md: 24,
                        xs: 22,
                      }
                    }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"left"}
                    textAlign={"left"}
                    className={"pointer"}
                  >
                    {props.title?.replace("$year$", new Date().getFullYear())}
                  </Typography>
                </a>
              </Link>
              <Typography
                variant="body2"
                fontWeight={"light"}
                fontSize={17}
                className={"desCat"}
                color={"#777"}
                textAlign={"left"}
              >
                {props.shortDescription !== null && props.shortDescription !== "<p>null</p>" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.shortDescription,
                    }}
                  ></div>
                ) : (
                  ""
                )}
              </Typography>
              <Link href={"/" + props.url}>
                <a>
                  <Typography
                    className={"seeproCat"}
                    fontSize={"15px !important"}
                    marginTop={5}
                    color={"#000"}
                  >
                    see products
                  </Typography>
                </a>
              </Link>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
}

export default Cat;
