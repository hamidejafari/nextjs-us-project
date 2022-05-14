import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";

// components
import VsComponentDesk from "./VsComponentDesk";
import VsComponentMob from "./VsComponentMob";

// styles
import sxStyles from "../../styles/style";

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
  const { vss } = props;

  return (
    <div className={"vs py-3"}>
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
        <Grid xs={12} className={"titleGrid px-0"}>
          <Typography
            variant="h5"
            gutterBottom
            fontSize={30}
            fontWeight={"bolder"}
            textAlign="center"
          >
            {vss[0]?.category?.title}
          </Typography>
        </Grid>
      </Grid>
      <Box className={"py-2 m-auto w-100"} sx={{ bgcolor: "#fff" }}>
        <Grid
          container
          className={"w-100 m-0 px-2 py-4"}
          sx={sxStyles["vsDesk"]}
        >
          {vss?.map((vsbox, index) => {
            return (
              <VsComponentDesk
                key={index}
                title1={vsbox.compare1Id?.title}
                title2={vsbox.compare2Id?.title}
                image1={
                  vsbox.onModel === "product"
                    ? vsbox.compare1Id?.brandId[0]?.image
                    : vsbox.compare1Id?.image
                }
                image2={
                  vsbox.onModel === "product"
                    ? vsbox.compare2Id?.brandId[0]?.image
                    : vsbox.compare2Id?.image
                }
                url={vsbox.slug}
                onModel={vsbox.onModel}
              />
            );
          })}
        </Grid>
        <Box className={"w-100 m-0 p-2"} sx={sxStyles["vsMob"]}>
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
                title1={vsbox.compare1Id?.title}
                title2={vsbox.compare2Id?.title}
                image1={
                  vsbox.onModel === "product"
                    ? vsbox.compare1Id?.brandId[0]?.image
                    : vsbox.compare1Id?.image
                }
                image2={
                  vsbox.onModel === "product"
                    ? vsbox.compare2Id?.brandId[0]?.image
                    : vsbox.compare2Id?.image
                }
                url={vsbox.slug}
                onModel={vsbox.onModel}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
}

export default Vs;
