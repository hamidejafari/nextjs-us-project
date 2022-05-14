import React from "react";
import {
  Container,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  Box,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import axios from "axios";
import sxStyles from "../../styles/style";
import Search from "../../components/comparison/Search";

// components
import SiteLayout from "../../layouts/SiteLayout";
import HeaderInn from "../../components/comparison/HeaderInn";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
import VsComponentDesk from "../../components/comparison/VsComponentDesk";

function AllVs(props) {
  const { comparisons,brand } = props;


  const { menuCategories, setting } = props;

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: props?.hostname,
    },
    {
      "@type": "ListItem",
      position: 2,
      item: props?.hostname + "/comparison/list",
      name: "Comparisons",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: `What's Better Than ${brand?.title} ?`,
    },
  ];

  return (
    <SiteLayout
      menuCategories={menuCategories}
      setting={setting}
      titleSeo={`What's Better Than ${brand.title}? [PROS/CONS]`}
    >
      <div className={"w-100 coupons allVs pt-0 pb-5"} sx={{ bgcolor: "#999" }}>
        <Breadcrumb items={breadcrumbItems} />

        <Box className={"headerCoupon"}>
          <Container>
            <Grid container spacing={1} className={"w-100 m-0"}>
              <Grid
                xl={8}
                lg={9}
                md={10}
                sm={11}
                xs={12}
                mx={"auto"}
                textAlign={"center"}
                className={"px-2"}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  className={"fw-bolder my-2"}
                >
                  What&apos;s Better Than {brand.title} ?
                </Typography>
              </Grid>
              <Grid
                xl={6}
                lg={8}
                md={10}
                sm={12}
                xs={12}
                mx={"auto"}
                className={"px-2"}
              >
                <Search />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container>
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
            <Grid xs={12} className={"px-2 pb-3 pt-4"}>
              <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    fontSize={15}
                    underline="hover"
                    color="inherit"
                    href="/"
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <HomeOutlinedIcon
                      className={"me-2 mb-1"}
                      fontSize="small"
                    />
                    Home
                  </Link>
                  <Link
                    fontSize={15}
                    underline="hover"
                    color="inherit"
                    href="/comparison/list"
                    display={"flex"}
                    alignItems={"center"}
                  >
                    Comparisons
                  </Link>



          
                  <Typography color="text.primary" fontSize={15}>
                  What&apos;s Better Than {brand.title} ?
                  </Typography>
                </Breadcrumbs>
              </div>
            </Grid>
            <div className={"vs py-3"}>
              <Box className={"py-2 m-auto w-100"} sx={{ bgcolor: "#fff" }}>
                <Grid container className={"w-100 m-0 px-2 py-4"}>
                  {comparisons?.map((vsbox, index) => (
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
                  ))}
                </Grid>
              </Box>
            </div>
          </Grid>
        </Container>
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps({ req, query }) {
  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;


  const comparisons = await axios.get(
    process.env.BACKEND_SERVER_URL +
      "/api/site/comparisons/related/" +
      encodeURIComponent(query.brand)
  );

  return {
    props: {
      menuCategories,
      setting,
      comparisons: comparisons.data.comparisons,
      brand: comparisons.data.brand,
      hostname: "https://www." + req?.headers?.host,
    },
  };
}

export default AllVs;
