import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";

// styles
import sxStyles from "../styles/style";

// component
import CouponsBox from "./coupon/CouponsBox";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 576 },
    items: 1.2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1.2,
    slidesToSlide: 1,
  },
};

const dateFormat = (date, format) => {
  // Calculate date parts and replace instances in format string accordingly
  format = format.replace(
    "DD",
    (date.getDate() < 10 ? "0" : "") + date.getDate()
  ); // Pad with '0' if needed
  format = format.replace(
    "MM",
    (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1)
  ); // Months are zero-based
  format = format.replace("YYYY", date.getFullYear());
  return format;
};

function Coupons(props) {
  const router = useRouter();

  const coupons = props?.coupons;

  return (
    <div className={"coupons"}>
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
            <Grid xs={12} className={"titleGrid textCenter"}>
              <Typography
                variant="body2"
                gutterBottom
                sx={sxStyles["sectionTitle"]}
              >
                Coupon Codes
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
                Do you want to enjoy the discounts for each product? Well,
                you’re in luck! Here at Brandsreviews, you can have access to
                coupon codes of every product. We have eliminated the hassle for
                looking up discount codes here and there, and have provided
                these discount coupons for you to easily access them and save
                your money.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            className={"w-100 m-0 py-4"}
            rowSpacing={1}
            columnSpacing={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
          >
            {coupons?.map((couponcontent, index) => (
              <CouponsBox
                key={index}
                occasion="occasion"
                name={
                  couponcontent.modelId?.title &&
                  couponcontent.modelId?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )
                }
                date={dateFormat(
                  new Date(couponcontent.expireDate),
                  "YYYY/MM/DD"
                )}
                percentage={"%" + couponcontent.amount}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum Lorem ipsum"
                image={
                  process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/" +
                  couponcontent.modelId?.images[0]?.file +
                  "/small.webp"
                }
                url={couponcontent.modelId?.slug}
              />
            ))}
          </Grid>
          <Grid xs sx={{ m: "auto", textAlign: "center" }}>
            <Typography component="div" display="block" gutterBottom>
              <Link href={"/"}>
                <a className={"viewAllBtn pointer"}>
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

export default Coupons;
