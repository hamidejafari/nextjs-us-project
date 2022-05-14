import React from "react";
import { Container, Grid, Card, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useRouter } from "next/router";
import Link from "next/link";

function SearchResult(props) {
  const { categories, query } = props;
  const router = useRouter();
  return (
    <>
      <Container>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
          className={"w-100 m-0 p-0"}
        >
          <Grid xs={12} className={"p-2"}>
            <Typography
              variant="body2"
              gutterBottom
              fontSize={25}
              fontWeight={"bolder"}
              my={"5px"}
              className={"textSecondary"}
              display={"flex"}
              alignItems={"center"}
            >
              <DoubleArrowIcon className={"me-2"} fontSize="large" />
              Search Results for &quot;{query?.search}&quot;
            </Typography>
          </Grid>
          {categories?.map((c2) => (
            <Grid
              key={c2._id}
              lg={2}
              md={3}
              sm={4}
              xs={6}
              className={"textCenter p-2"}
            >
              <Link href={"/" + c2.slug}>
                <a className={"pointer"}>
                  <Card className={"imgCard p-1"}>
                    <img
                      src={
                        c2?.icon?.fileName
                          ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/big/" +
                            c2.icon.fileName
                          : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/placeholder/300x300.webp"
                      }
                      alt={c2.icon?.alt}
                    />
                    <Typography
                      variant="body2"
                      gutterBottom
                      fontSize={15}
                      my={"5px"}
                    >
                      {c2.title?.replace("$year$", new Date().getFullYear())}
                    </Typography>
                  </Card>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default SearchResult;
