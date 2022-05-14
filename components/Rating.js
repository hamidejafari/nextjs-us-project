import React from "react";
import { Grid, Box, Container, Typography, Card } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/router";
import Link from "next/link";
// styles
import sxStyles from "../styles/style";
const responsive = {
  desktop: {
    breakpoint: { min: 1200 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  minidesktop: {
    breakpoint: { max: 1200, min: 768 },
    items: 4.5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 576 },
    items: 2.5,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1.5,
    slidesToSlide: 1, // optional, default to 1.
  },
};

// components
import Ratinglg from "./rating/Ratinglg";
import Ratingxs from "./rating/Ratingxs";

function Rating(props) {
  const router = useRouter();
  const bests = props?.bests;
  return (
    <div className={"productsRating"}>
      <Container maxWidth="xl">
        <Box className={"w-100 m-0"}>
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
            <Grid xs={12} className={"titleGrid textCenter"}>
              <Typography
                variant="h2"
                gutterBottom
                sx={sxStyles["sectionTitle"]}
              >
               Product Ratings

              </Typography>
            </Grid>
            <Grid lg={8} xs={12} className={"shorDesGrid textCenter mx-auto"}>
              <Typography
                variant="body2"
                gutterBottom
                sx={sxStyles["sectionDescription"]}
              >
               A rating, whether given by a critic or a customer, is one of the most significant ways to realize a product’s potential. Here at Brandsreviews, we have also shown the ratings of each and every product, so you could understand the feedback given for a particular product, and gain a more clear understanding of them.
              </Typography>
            </Grid>
          </Grid>
          {/* start desktop */}
          <Grid
            container
            className={"w-100 py-2"}
            sx={{
              display: { lg: "flex", xs: "none" },
            }}
          >
            {bests?.map((item, index) => (
              <Ratinglg
                key={index}
                title={item.title?.replace("$year$", new Date().getFullYear())}
                image={item.icon?.fileName}
                alt={item.icon?.alt}
                url={item.slug}
              />
            ))}
          </Grid>
          {/* end desktop */}

          {/* start tablet $ mobile */}
          <Box sx={{ my: "2rem", display: { lg: "none", xs: "block" } }}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              arrows={true}
              responsive={responsive}
              ssr={false}
              infinite={false}
              autoPlay={true}
              focusOnSelect={false}
              autoPlaySpeed={7500}
              keyBoardControl={false}
              customTransition="all 1s"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {bests?.map((item, index) => (
                <Ratingxs
                  key={index}
                  title={item.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}
                  image={item.icon?.fileName}
                  alt={item.icon?.alt}
                  url={item.slug}
                />
              ))}
            </Carousel>
          </Box>

          {/* end tablet $ mobile */}

          <Grid xs sx={{ m: "auto", textAlign: "center" }}>
            <Typography component="div" display="block" gutterBottom>
              <Link href="/categories">
                <a>
                  <Typography className={"viewAllBtn m-auto pointer"}>
                    View all
                    <ChevronRightIcon />
                  </Typography>
                </a>
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Rating;
