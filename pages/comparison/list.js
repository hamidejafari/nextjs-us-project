import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  CircularProgress,
  Box,
  Card,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import axios from "axios";
import { useRouter } from "next/router";
import sxStyles from "../../styles/style";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 576 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

// components
import SiteLayout from "../../layouts/SiteLayout";
import HeaderInn from "../../components/comparison/HeaderInn";
import Vss from "../../components/comparison/Vss";
import InfiniteScroll from "react-infinite-scroll-component";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
import Ratingxs from "../../components/rating/Ratingxs";
import RatinglgHomePage from "../../components/rating/RatinglgHomePage";

function handleClick(event) {
  event.preventDefault();
}

function AllVs(props) {
  const [comparisons, setComparisons] = useState([]);
  const [brands, setBrands] = useState([]);

  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);
  const [page, setPage] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  const { query } = useRouter();

  const { search } = query;

  const getData = async (isSearch) => {
    if (loading) {
      return;
    }
    let nextPage;
    if (isSearch) {
      nextPage = 1;
      setPage(nextPage);
    } else {
      nextPage = page + 1;
      setPage(nextPage);
    }
    setLoading(true);
    let url =
      process.env.NEXT_PUBLIC_SERVER_URL +
      "/api/site/comparisons-grouped?page=" +
      nextPage;
    if (query.search) {
      url =
        process.env.NEXT_PUBLIC_SERVER_URL +
        "/api/site/comparisons-grouped?page=" +
        nextPage +
        "&search=" +
        query.search;
    }
    const response = await axios.post(url, {
      ip: props.ip,
      userAgent: props.userAgent,
    });
    if (+response.data?.meta?.lastPage === nextPage) {
      setLastPage(true);
    }
    setLoading(false);

    if (isSearch) {
      if (response.data?.data) {
        setComparisons(response.data?.data);
      }
      setBrands([]);
    } else {
      if (response.data?.data) {
        setComparisons((com) => [...com, ...response.data?.data]);
      }
      if (response.data?.brands) {
        setBrands(response.data?.brands);
      }
    }
  };

  useEffect(() => {
    if (!firstLoad) {
      getData(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      getData(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);

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
      name: "Comparisons",
    },
  ];

  return (
    <SiteLayout
      titleSeo="A List of All Product Comparisons on Brands Reviews"
      menuCategories={menuCategories}
      setting={setting}
    >
      <div className={"w-100 coupons allVs pt-0 pb-5"} sx={{ bgcolor: "#999" }}>
        <Breadcrumb items={breadcrumbItems} />

        <HeaderInn />
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
                    <HomeOutlinedIcon
                      className={"me-2 mb-1"}
                      fontSize="small"
                    />
                    Home
                  </Link>
                  <Typography color="text.primary" fontSize={15}>
                    Comparisons
                  </Typography>
                </Breadcrumbs>
              </div>
            </Grid>

            <Grid xs={12} className={"p-2"}>
              <InfiniteScroll
                dataLength={comparisons.length} //This is important field to render the next data
                next={getData}
                hasMore={!lastPage}
              >
                {brands?.length > 0 && (
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
                          What&apos;s Better Than ?
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box
                      className={"py-2 m-auto w-100"}
                      sx={{ bgcolor: "#fff" }}
                    >
                      <Grid
                        container
                        className={"w-100 m-0 px-2 py-4"}
                        sx={sxStyles["vsDesk"]}
                      >
                        {brands?.map((vsbox, index) => {
                          return (
                            <RatinglgHomePage
                              key={vsbox._id}
                              title={vsbox.title?.replace(
                                "$year$",
                                new Date().getFullYear()
                              )}
                              image={vsbox.image?.fileName}
                              alt={vsbox.image?.alt}
                              url={"comparison/" + vsbox.slug}
                              width="50%"
                            />
                          );
                        })}
                      </Grid>
                      <Box
                        sx={{
                          display: { lg: "none", xs: "block" },
                        }}
                      >
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
                          {brands?.map((item, index) => (
                            <Ratingxs
                              key={item._id}
                              title={item.title?.replace(
                                "$year$",
                                new Date().getFullYear()
                              )}
                              image={item.image?.fileName}
                              alt={item.image?.alt}
                              url={"comparison/" + item.slug}
                            />
                          ))}
                        </Carousel>
                      </Box>
                    </Box>
                  </div>
                )}

                {comparisons?.map((vsbox, index) => (
                  <Vss
                    key={vsbox._id}
                    vss={vsbox.compares}
                    title={vsbox.compares.title}
                  />
                ))}
              </InfiniteScroll>
              {loading && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress color="secondary" />
                </Box>
              )}
            </Grid>
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

  console.log(req.ip);
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  const userAgent = req.headers["user-agent"];

  return {
    props: {
      menuCategories,
      setting,
      ip,
      userAgent,
      hostname: "https://www." + req?.headers?.host,
    },
  };
}

export default AllVs;
