import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";

// components
import Categories from "./header/Categories";
import CategoriesDesk from "./header/CategoriesDesk";
import Search from "./header/Search";

// sx styles
import sxStyles from "../styles/style";

export default function Header(props) {
  const categories = props?.categories;
  const setting = props?.setting;

  return (
    <Box className={"header"}>
      <Container maxWidth="xl" sx={sxStyles["headerContainer"]}>
        <Box className={"w-100 m-auto"} sx={sxStyles["headerBox"]}>
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
            <Grid
              xl={6}
              md={7}
              sm={12}
              xs={12}
              className={"textLeft"}
              sx={sxStyles["alignSelfCenter"]}
            >
              <Typography
                variant="h1"
                gutterBottom
                className={"textSecondary"}
                sx={sxStyles["titleOne"]}
                lineHeight={2}
              >
                {setting?.firstPageHeaderBold}
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                sx={sxStyles["titleTwo"]}
                lineHeight={1.25}
              >
                {setting?.firstPageHeader}
              </Typography>
              <Search />
              <Box className={"catHome mt-3"} sx={sxStyles["catHome"]}>
                <Grid container spacing={1} className={"w-100 m-0"}>
                  {categories?.map((category, index) => (
                    <Categories
                      key={index}
                      title={category.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      alt={category.icon?.alt}
                      image={
                        process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/main/" +
                        category.icon?.fileName + "?"
                      }
                      url={category.slug}
                    />
                  ))}
                </Grid>
              </Box>
              <Box
                className={"catHomeMobile mt-1"}
                sx={sxStyles["catHomeMobile"]}
              >
                {categories?.map((category, index) => (
                  <CategoriesDesk
                    key={index}
                    title={category.title?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )}
                    alt={category.icon?.alt}
                    image={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER +
                      "/files/images/main/" +
                      category.icon?.fileName
                    }
                    url={category.slug}
                  />
                ))}
              </Box>
            </Grid>
            {setting?.firstPageBanner && (
              <Grid
                xl={6}
                md={5}
                sm={12}
                xs={12}
                className={"headerImg"}
                sx={sxStyles["headerImg"]}
              >
                <Box
                  sx={{
                    display: {
                      xl: 'block',
                      xs: 'none',
                    }
                  }}
                >
                  <img
                    width="475"
                    height="675"
                    alt="first page banner"
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER + "/" +
                      setting?.firstPageBanner
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: {
                      xl: 'none',
                      lg: 'block',
                      xs: 'none',
                    }
                  }}
                >
                  <img
                    width="400"
                    height="600"
                    alt="first page banner"
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER + "/" +
                      setting?.firstPageBanner
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: {
                      lg: 'none',
                      md:'block',
                      xs: 'none',
                    }
                  }}
                >
                  <img
                    width="300"
                    height="450"
                    alt="first page banner"
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER + "/" +
                      setting?.firstPageBanner
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: {
                      md:'none',
                      sm:'block',
                      xs: 'none',
                    }
                  }}
                >
                  <img
                    width="300"
                    height="450"
                    alt="first page banner"
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER + "/" +
                      setting?.firstPageBanner
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: {
                      sm: 'none',
                      xs: 'block',
                    }
                  }}
                >
                  <img
                    width="300"
                    height="450"
                    alt="first page banner"
                    src={
                      process.env.NEXT_PUBLIC_IMAGE_SERVER + "/" +
                      setting?.firstPageBanner
                    }
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
