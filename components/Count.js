import React from "react";
import { Grid, Box, Container, Typography, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";

// styles
import sxStyles from "../styles/style";

// component
import Number from "./count/Number";
import Icon from "./count/Icon";
import Name from "./count/Name";
import MobileCount from "./count/MobileCount";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 576 },
    items: 2.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1.75,
    slidesToSlide: 1,
  },
};

function Count(props) {
  const setting = props?.setting;

  const numbers = [
    {
      number: setting?.brandCount + "k",
      name: "Brands",
      icon: "./images/ic/ic-9.webp",
    },
    {
      number: setting?.bestRatingCount + "k",
      name: "Best Ratings",
      icon: "./images/ic/ic-7.webp",
    },
    {
      number: setting?.comparisonCount + "k",
      name: "Comparisons",
      icon: "./images/ic/ic-10.webp",
    },
    {
      number: setting?.couponCount + "k",
      name: "Coupons",
      icon: "./images/ic/ic-3.webp",
    },
    {
      number: setting?.productCount + "k",
      name: "Products",
      icon: "./images/ic/ic-6.webp",
    },
    {
      number: setting?.reviewCount + "k",
      name: "Reviews",
      icon: "./images/ic/ic-11.webp",
    },
  ];
  return (
    <div className={"count"}>
      <Box className={"top"}>
        <Container maxWidth="xl" className={"container"}>
          <Box className={"w-100 m-0 box"}>
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
              <Grid xs={12} className={"titleGrid textCenter"}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={sxStyles["sectionTitle"]}
                >
                  Count
                </Typography>
              </Grid>
              <Grid
                lg={8}
                xs={12}
                sx={{ mx: "auto" }}
                className={"shorDesGrid textCenter"}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={sxStyles["sectionDescription"]}
                >
                  From the number of brands to the number of best rated products, we at Brandsreviews have also shown the amount of items in each category. This will offer a great insight for you to know how many items we have reviewed and provided on our website.
                </Typography>
              </Grid>
            </Grid>
            <Divider className={"divider"} sx={sxStyles["countDesktop"]} />
            <Box sx={sxStyles["countDesktop"]}>
              <div className={"countNumber"}>
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
                  {numbers?.map((numberscontent, index) => (
                    <Number key={index} number={numberscontent.number} />
                  ))}
                </Grid>
              </div>
              <div className={"countIcon"}>
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
                  {numbers?.map((numberscontent, index) => (
                    <Icon key={index} icon={numberscontent.icon} />
                  ))}
                </Grid>
              </div>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={sxStyles["countMobile"]} className={"top"}>
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
          itemClass="carousel-item-padding-40-px carousel-item-count"
        >
          {numbers?.map((numberscontent, index) => (
            <MobileCount
              key={index}
              number={numberscontent.number}
              name={numberscontent.name}
              icon={numberscontent.icon}
            />
          ))}
        </Carousel>
      </Box>
      <Box className={"bottom"} sx={sxStyles["countDesktop"]}>
        <Container maxWidth="xl">
          <Box className={"w-100 m-0"}>
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
              {numbers?.map((numberscontent, index) => (
                <Name key={index} name={numberscontent.name} />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Count;
