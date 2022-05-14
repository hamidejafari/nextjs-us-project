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
import Link from "next/link";

// components
import SiteLayout from "../../layouts/SiteLayout";
import HeaderInn from "../../components/product/HeaderInn";
import Sidebar from "../../components/product/Sidebar";
import ProductInfo from "../../components/product/ProductInfo";
import LinksCards from "../../components/product/LinksCards";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import { parseCookies } from "../../utiles/cookieHelper";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
import AggregateRating from "../../utiles/RichSnippets/AggregateRating";
import Faq from "../../utiles/RichSnippets/Faq";
import reviewsCount from "../../utiles/reviewsCount";

// styles
import sxStyles from "../../styles/style";
import Custom404 from "../404";
import BannerModal from "../../components/BannerModal";

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

function ProductDetails(props) {
  const {
    product,
    levelTwoCategory,
    levelThreeCategory,
    comparisons,
    reviews,
    menuCategories,
    setting,
    notFound,
    hostname,
    hasReview,
  } = props;

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: hostname,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: levelTwoCategory?.parentId?.title?.replace(
        "$year$",
        new Date().getFullYear()
      ),
      item: hostname + "/" + levelTwoCategory?.parentId?.slug,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: levelTwoCategory?.title?.replace(
        "$year$",
        new Date().getFullYear()
      ),
      item: hostname + "/" + levelTwoCategory?.slug,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: product?.categoryId?.title?.replace(
        "$year$",
        new Date().getFullYear()
      ),
      item: hostname + "/" + product?.categoryId?.slug,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: product?.title?.replace("$year$", new Date().getFullYear()),
    },
  ];

  let titleSeo = product?.titleSeo?.replace("$year$", new Date().getFullYear());

  if (
    !titleSeo ||
    titleSeo == "New" ||
    titleSeo == "Test" ||
    titleSeo == "test"
  ) {
    titleSeo =
      product?.title +
      " Reviews by Real Customers [Update in " +
      monthName() +
      " " +
      new Date().getFullYear() +
      "]";
    if (titleSeo.length > 65) {
      titleSeo =
        product?.title +
        " Reviews by Real Customers [" +
        reviewsCount(props.reviewsCount) +
        " Reviews]";
    }
  }

  let image;

  if (product?.imageSeo?.fileName) {
    image =
      process.env.NEXT_PUBLIC_IMAGE_SERVER +
      "/files/images/medium/" +
      product?.imageSeo?.fileName;
  } else if (product?.image?.fileName) {
    image =
      process.env.NEXT_PUBLIC_IMAGE_SERVER +
      "/files/images/medium/" +
      product?.image?.fileName;
  } else {
    image =
      process.env.NEXT_PUBLIC_IMAGE_SERVER +
      "/files/images/placeholder/product-sample.webp";
  }

  let descriptionSeo = product?.descriptionSeo?.replace(
    "$year$",
    new Date().getFullYear()
  );
  if (!descriptionSeo) {
    descriptionSeo =
      product?.title +
      " is created with high-quality, scientifically proven, effective, and non-toxic ingredients and can help you achieve great results.";
  }

  let banner;
  if (product?.categoryId?.bannerId) {
    if (
      (!product?.categoryId?.bannerId.startDate ||
        new Date(product?.categoryId?.bannerId.startDate) < new Date()) &&
      (!product?.categoryId?.bannerId.expireDate ||
        new Date(product?.categoryId?.bannerId.expireDate) > new Date())
    ) {
      if (
        Array.isArray(product?.categoryId?.bannerId?.productExceptions) &&
        !product?.categoryId?.bannerId?.selected &&
        product?.categoryId?.bannerId?.productExceptions.length > 0
      ) {
        if (
          !product?.categoryId?.bannerId?.productExceptions.includes(
            product._id
          )
        ) {
          banner = <BannerModal banner={product?.categoryId?.bannerId} />;
        }
      } else {
        banner = <BannerModal banner={product?.categoryId?.bannerId} />;
      }
    }
  }

  return (
    <>
      {!notFound ? (
        <SiteLayout
          noIndex={product?.noIndex}
          titleSeo={titleSeo}
          menuCategories={menuCategories}
          setting={setting}
          descriptionSeo={descriptionSeo}
          image={image}
        >
          <div className={"w-100 pro pb-5"}>
            <Breadcrumb
              items={breadcrumbItems}
              datePublished={product?.publishDate}
              dateModified={product?.publishDate}
            />
            <Faq items={product?.faq} />
            <AggregateRating
              title={product?.title}
              url={hostname + "/" + product?.slug}
              star={product?.star}
              reviewsCount={props.reviewsCount}
            />

            <HeaderInn
              h1Content={
                product?.h1
                  ? product?.h1?.replace("$year$", new Date().getFullYear())
                  : product?.title?.replace("$year$", new Date().getFullYear())
              }
              product={product}
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
                <Grid item xs={12} className={"px-2 pb-3"}>
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
                        <a>
                          <Typography display={"flex"} className={"pointer"}>
                            <HomeOutlinedIcon
                              className={"me-2 mb-1"}
                              fontSize="small"
                            />
                            Home
                          </Typography>
                        </a>
                      </Link>
                      <Link
                        fontSize={15}
                        underline="hover"
                        color="inherit"
                        href={"/" + levelTwoCategory?.parentId?.slug}
                      >
                        <a>
                          <Typography display={"flex"} className={"pointer"}>
                            {levelTwoCategory?.parentId?.title?.replace(
                              "$year$",
                              new Date().getFullYear()
                            )}
                          </Typography>
                        </a>
                      </Link>

                      <Link
                        fontSize={15}
                        underline="hover"
                        color="inherit"
                        href={"/" + levelTwoCategory?.slug}
                      >
                        <a>
                          <Typography display={"flex"} className={"pointer"}>
                            {levelTwoCategory?.title?.replace(
                              "$year$",
                              new Date().getFullYear()
                            )}
                          </Typography>
                        </a>
                      </Link>

                      <Link
                        fontSize={15}
                        underline="hover"
                        color="inherit"
                        href={"/" + product?.categoryId?.slug}
                      >
                        <a>
                          {" "}
                          <Typography display={"flex"} className={"pointer"}>
                            {product?.categoryId?.title?.replace(
                              "$year$",
                              new Date().getFullYear()
                            )}
                          </Typography>
                        </a>
                      </Link>

                      <Typography color="text.primary" fontSize={15}>
                        {product?.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                      </Typography>
                    </Breadcrumbs>
                  </div>
                </Grid>

                {banner}

                {Array.isArray(product?.description) &&
                  product?.description.length > 0 && (
                    <Grid item xs={12} className={"px-2 pb-3"}>
                      <Card className={"p-2 rounded-0 shadow-none linksCard"}>
                        <List className={"py-0 px-1 scrolllink"}>
                          {product?.description?.map(
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
                  item
                  md={3}
                  xs={12}
                  className={"p-2"}
                  sx={sxStyles["sideDesk"]}
                >
                  <Sidebar
                    category={levelThreeCategory}
                    product={product}
                    comparisons={comparisons}
                  />
                </Grid>
                <Grid item md={9} xs={12} className={"p-0"}>
                  <ProductInfo
                    hasReview={hasReview}
                    levelTwoCategory={levelTwoCategory}
                    product={product}
                    reviews={reviews}
                    reviewsCount={props.reviewsCount}
                    realReviewsCount={props.reviewsCount}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={"p-2 m-auto"}
                  sx={sxStyles["sideMob"]}
                >
                  <Sidebar
                    category={levelThreeCategory}
                    product={product}
                    comparisons={comparisons}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
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

  let product;
  let levelThreeCategory;
  let levelTwoCategory;
  let comparisons;
  let reviews;
  let reviewsCount;
  let menuCategories;
  let setting;
  let notFound = false;
  let hasReview = false;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  const response = await axios.get(
    process.env.BACKEND_SERVER_URL +
      "/api/site/product/" +
      encodeURIComponent(query.categorySlug) +
      "/" +
      encodeURIComponent(query.productSlug),
    { headers: { Authorization: "Bearer " + token } }
  );

  if (
    (!response.data?.product && response.data.redirect == null) ||
    (response.data?.product?.published == false && email !== "fat@gmail.com")
  ) {
    res.statusCode = 404;

    notFound = true;
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
    product = response.data.product;
    levelTwoCategory = response.data.levelTwoCategory;
    levelThreeCategory = response.data.levelThreeCategory;

    comparisons = response.data.comparisons;
    reviews = response.data.reviews;
    reviewsCount = response.data?.reviewsCount;

    if (response.data?.hasReview) {
      hasReview = true;
    }
  }


  return {
    props: {
      query,
      product,
      levelTwoCategory,
      levelThreeCategory,
      comparisons,
      reviews,
      hasReview,
      reviewsCount,
      menuCategories,
      setting,
      notFound,
      hostname: "https://www." + req?.headers?.host,
    },
  };
}

export default ProductDetails;
