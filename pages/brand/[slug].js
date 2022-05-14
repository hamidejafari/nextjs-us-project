import * as React from "react";
import {
  Container,
  Grid,
  Breadcrumbs,
  Typography,
  Card,
  List,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import axios from "axios";
import fetchLayoutData from "../../utiles/fetchLayoutData";

// components
import SiteLayout from "../../layouts/SiteLayout";
import HeaderInn from "../../components/brand/HeaderInn";
import Sidebar from "../../components/brand/Sidebar";
import BrandInfo from "../../components/brand/BrandInfo";
import LinksCards from "../../components/brand/LinksCards";
import { parseCookies } from "../../utiles/cookieHelper";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
import AggregateRating from "../../utiles/RichSnippets/AggregateRating";
import Faq from "../../utiles/RichSnippets/Faq";

// styles
import sxStyles from "../../styles/style";
import Custom404 from "../404";
import reviewsCount from "../../utiles/reviewsCount";
import BannerModal from "../../components/BannerModal";
import Link from "next/link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function monthName() {
  Date.prototype.monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  Date.prototype.getMonthName = function () {
    return this.monthNames[this.getMonth()];
  };
  Date.prototype.getShortMonthName = function () {
    return this.getMonthName().substr(0, 3);
  };
  return new Date().getShortMonthName();
}

function BrandDetails(data) {
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: data?.hostname,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Brands",
      item: data?.hostname + "/brands",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: data?.brand?.title,
    },
  ];

  let titleSeo = data?.brand?.titleSeo?.replace(
    "$year$",
    new Date().getFullYear()
  );

  if (
    !titleSeo ||
    titleSeo == "New" ||
    titleSeo == "Test" ||
    titleSeo == "test"
  ) {
    titleSeo =
      data?.brand?.title +
      " Reviews by Real Customers [Update in " +
      monthName() +
      " " +
      new Date().getFullYear() +
      "]";
    if (titleSeo.length > 65) {
      titleSeo =
        data?.brand?.title +
        " Reviews by Real Customers [" +
        reviewsCount(data?.reviewsCount) +
        " Reviews]";
    }
  }

  if (data?.products?.length === 1) {
    titleSeo = data?.brand?.title + " Customer Service Reviews";
  }

  let image;

  if (data?.brand?.imageProduct?.fileName) {
    image =
      process.env.NEXT_PUBLIC_IMAGE_SERVER +
      "/files/images/medium/" +
      data?.brand?.imageProduct?.fileName;
  } else {
    image =
      process.env.NEXT_PUBLIC_IMAGE_SERVER +
      "/files/images/placeholder/brand-logo.webp";
  }

  let descriptionSeo = data?.brand?.descriptionSeo?.replace(
    "$year$",
    new Date().getFullYear()
  );
  if (!descriptionSeo) {
    descriptionSeo =
      data?.brand?.title +
      " offers high-quality yet affordable products that are developed to be cleaner and safer without undermining their spectacular effects.";
  }

  let banner;
  if (data?.mainCategory?.bannerId) {
    if (
      (!data?.mainCategory?.bannerId.startDate ||
        new Date(data?.mainCategory?.bannerId.startDate) < new Date()) &&
      (!data?.mainCategory?.bannerId.expireDate ||
        new Date(data?.mainCategory?.bannerId.expireDate) > new Date())
    ) {
      if (
        Array.isArray(data?.mainCategory?.bannerId?.brandExceptions) &&
        !data?.mainCategory?.bannerId?.selected &&
        data?.mainCategory?.bannerId?.brandExceptions.length > 0
      ) {
        if (
          !data?.mainCategory?.bannerId?.brandExceptions.includes(
            data.brand?._id
          )
        ) {
          banner = <BannerModal banner={data?.mainCategory?.bannerId} />;
        }
      } else {
        banner = <BannerModal banner={data?.mainCategory?.bannerId} />;
      }
    }
  }

  return (
    <>
      {data?.notFound !== true ? (
        <SiteLayout
          descriptionSeo={descriptionSeo}
          noIndex={data?.brand?.noIndex}
          titleSeo={titleSeo}
          menuCategories={data.menuCategories}
          setting={data.setting}
          image={image}
        >
          <div className={"w-100 pro pb-5"}>
            <Breadcrumb
              items={breadcrumbItems}
              datePublished={data?.brand?.publishDate}
              dateModified={data?.brand?.publishDate}
            />

            <Faq items={data?.brand?.faq} />

            <AggregateRating
              title={data?.brand?.title}
              url={data?.hostname + "/" + data?.brand?.slug}
              star={data?.brand?.star}
              reviewsCount={data?.reviewsCount}
            />
            <HeaderInn
              image={
                data?.brand?.headerImage?.fileName
                  ? data?.brand?.headerImage
                  : data?.mainCategory?.headerImage
              }
              h1Content={
                data?.products?.length === 1
                  ? data?.brand?.title?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )
                  : data?.brand?.h1
                  ? data?.brand?.h1?.replace("$year$", new Date().getFullYear())
                  : data?.brand?.title?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )
              }
            />
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
                <Grid xs={12} className={"px-2 pb-3"}>
                  <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link
                        fontSize={15}
                        underline="hover"
                        color="inherit"
                        href="/"
                        display={"flex"}
                        alignItems={"center"}
                      >
                        <a>
                          <HomeOutlinedIcon
                            className={"me-2 mb-1"}
                            fontSize="small"
                          />
                          Home
                        </a>
                      </Link>
                      <Link
                        fontSize={15}
                        underline="hover"
                        color="inherit"
                        href="/brand"
                      >
                        <a>Brands</a>
                      </Link>
                      <Typography color="text.primary" fontSize={15}>
                        {data?.brand?.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                      </Typography>
                    </Breadcrumbs>
                  </div>
                </Grid>
                {Array.isArray(data?.brand?.description) &&
                  data?.brand?.description.length > 0 && (
                    <Grid xs={12} className={"px-2 pb-3"}>
                      <Card className={"p-2 rounded-0 shadow-none linksCard"}>
                        <List className={"py-0 px-1 scrolllink"}>
                          {data?.brand?.description?.map(
                            (item, index) =>
                              item.headerType === "h2" && (
                                <LinksCards
                                  key={index}
                                  title={item.header?.replace(
                                    "$year$",
                                    new Date().getFullYear()
                                  )}
                                  url={"#" + item.header + index}
                                />
                              )
                          )}
                        </List>
                      </Card>
                    </Grid>
                  )}
                <Grid
                  md={3}
                  xs={12}
                  className={"p-2"}
                  sx={sxStyles["sideDesk"]}
                >
                  <Sidebar
                    mainCategory={data?.mainCategory}
                    brand={data?.brand}
                  />
                </Grid>
                <Grid md={9} xs={12} className={"p-0"}>
                  <BrandInfo
                    brand={data?.brand}
                    products={data?.products}
                    reviews={data?.reviews}
                    reviewsCount={data?.reviewsCount}
                    hasReview={data?.hasReview}
                  />
                </Grid>
                <Grid xs={12} className={"p-2 m-auto"} sx={sxStyles["sideMob"]}>
                  <Sidebar
                    mainCategory={data?.mainCategory}
                    brand={data?.brand}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
          {banner}
        </SiteLayout>
      ) : (
        <Custom404 />
      )}
    </>
  );
}

export async function getServerSideProps({ req, res, query }) {
  const data = parseCookies(req);

  const email = data?.user ? JSON.parse(data?.user)?.email : null;
  const token = data?.user ? JSON.parse(data?.user)?.token : null;

  let brand = [];
  let products = [];
  let reviews = [];
  let reviewsCount = 0;
  let mainCategory = {};
  let notFound = false;
  let hasReview = false;

  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  const response = await axios.get(
    process.env.BACKEND_SERVER_URL +
      "/api/site/brand/" +
      encodeURIComponent(query.slug),
    { headers: { Authorization: "Bearer " + token } }
  );

  if (
    (!response.data?.brand && response.data.redirect == null) ||
    (response.data?.brand?.published == false && email !== "fat@gmail.com")
  ) {
    notFound = true;
    res.statusCode = 404;

    return {
      props: {
        query,
        notFound,
      },
    };
  }

  if (response.data.redirect) {
    return {
      redirect: {
        permanent: false,
        destination: "/" + response.data.redirect.newAddress,
      },
      props: {},
    };
  } else {
    brand = response.data?.brand;
    mainCategory = response.data?.mainCategory;
    products = response.data?.products;
    reviews = response.data?.reviews;
    reviewsCount = response.data?.reviewsCount;
    if (response.data?.hasReview) {
      hasReview = true;
    }
  }

  if(query?.page){
    return {
      redirect: {
        permanent: false,
        destination: "/brand/"+query.slug,
      },
      props: {},
    };
  }


  return {
    props: {
      query,
      brand,
      products,
      reviews,
      reviewsCount,
      notFound,
      menuCategories,
      setting,
      hasReview,
      mainCategory,
      hostname: "https://www." + req?.headers?.host,
    },
  };
}

export default BrandDetails;
