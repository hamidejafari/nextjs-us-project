import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-multi-carousel";

// components
import VsComponentDesk from "./vs/VsComponentDesk";
import VsComponentMob from "./vs/VsComponentMob";

// styles
import sxStyles from "../styles/style";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 576 },
    items: 2.2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1.2,
    slidesToSlide: 1,
  },
};

function Vs(props) {
  const vss = props?.comparisons;
  return (
    <div className={"vs"}>
      <Container maxWidth="xl">
        <Box sx={{ width: "100%", m: "auto", py: "3rem" }}>
          <Grid
            container
            rowSpacing={1}
            className={"w-100 m-0"}
            columnSpacing={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
          >
            <Grid xs={12} className={"titleGrid textCenter"}>
              <Typography
                variant="body2"
                gutterBottom
                sx={sxStyles["sectionTitle"]}
              >
                Product Comparisons
              </Typography>
            </Grid>
            <Grid
              lg={8}
              md={10}
              xs={12}
              sx={{ mx: "auto" }}
              className={"shorDesGrid textCenter"}
            >
              <Typography
                variant="body2"
                gutterBottom
                sx={sxStyles["sectionDescription"]}
              >
                We have compared different products from each famous brand with
                each other so you could see detailed information of the products
                you are willing to choose and see which one suits the best with
                your expectations.
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={"w-100 m-0 py-4"} sx={sxStyles["vsDesk"]}>
            {vss?.map((vsbox, index) => (
              <VsComponentDesk
                key={index}
                title1={vsbox.compare1Id?.title?.replace(
                  "$year$",
                  new Date().getFullYear()
                )}
                title2={vsbox.compare2Id?.title?.replace(
                  "$year$",
                  new Date().getFullYear()
                )}
                image1={vsbox.compare1Id?.brandId?.image}
                image2={vsbox.compare2Id?.brandId?.image}
                url={vsbox.slug}
              />
            ))}
          </Grid>
          <Box className={"w-100 m-0 py-4"} sx={sxStyles["vsMob"]}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              arrows={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={false}
              autoPlay={true}
              focusOnSelect={false}
              autoPlaySpeed={7500}
              keyBoardControl={false}
              customTransition="all 1s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {vss?.map((vsbox, index) => (
                <VsComponentMob
                  key={index}
                  title1={vsbox.compare1Id?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}
                  title2={vsbox.compare2Id?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}
                  image1={vsbox.compare1Id?.brandId?.image}
                  image2={vsbox.compare2Id?.brandId?.image}
                  url={vsbox.slug}
                />
              ))}
            </Carousel>
          </Box>
          <Grid xs sx={{ m: "auto", textAlign: "center" }}>
            <Typography component="div" display="block" gutterBottom>
              <Link href="/comparison/list">
                <a className={"viewAllBtn"} style={{margin: "0 auto"}}>
                  View all
                  <ChevronRightIcon />
                </a>
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Vs;
