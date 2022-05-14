import * as React from "react";
import { Container, Grid, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

// components
import SiteLayout from "../layouts/SiteLayout";
import HeaderInn from "../components/couponcode/HeaderInn";
import Coupons from "../components/couponcode/Coupons";
import fetchLayoutData from "../utiles/fetchLayoutData";
import Breadcrumb from "../utiles/RichSnippets/Breadcrumb";

function AllCoupon(props) {
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
      name: "coupons",
    },
  ];

  return (
    <SiteLayout menuCategories={menuCategories} setting={setting}>
      <div className={"w-100 coupons py-0 "}>
        <Breadcrumb items={breadcrumbItems} />
        <HeaderInn />
        <div className="allVs pb-5">
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
                  <Typography color="text.primary" fontSize={15}>
                    All Coupons
                  </Typography>
                </Breadcrumbs>
              </Grid>
              <Grid xs={12} className={"p-0"}>
                <Coupons />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps() {
  const layoutData = await fetchLayoutData();

  const menuCategories = layoutData?.categories;
  const setting = layoutData?.setting;

  return {
    props: {
      menuCategories,
      setting,
    },
  };
}

export default AllCoupon;
