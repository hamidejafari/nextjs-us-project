import React, { useEffect, useState } from "react";
import { Grid, Box, CircularProgress, Typography } from "@mui/material";
import Ratingxs from "../rating/Ratingxs";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
// component
import CouponsBox from "./CouponsBox";

import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import axios from "axios";
import Carousel from "react-multi-carousel";
import CouponBox from "../rating/CouponBox";
import sxStyles from "../../styles/style";

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

function ProductInfo(props) {
  const [coupons, setCoupons] = useState([]);
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
      "/api/site/coupon-brands?page=" +
      nextPage;
    if (query.search) {
      url =
        process.env.NEXT_PUBLIC_SERVER_URL +
        "/api/site/coupon-brands?page=" +
        nextPage +
        "&search=" +
        query.search;
    }
    const response = await axios.post(url, {
      ip: props.ip,
      userAgent: props.userAgent,
    });
    if (
      +response.data?.meta?.lastPage === 0 ||
      +response.data?.meta?.lastPage === nextPage
    ) {
      setLastPage(true);
    }
    setLoading(false);

    if (isSearch) {
      if (response.data?.data) {
        setCoupons(response.data?.data);
      }
    } else {
      if (response.data?.data) {
        setCoupons((com) => [...com, ...response.data?.data]);
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

  return (
    <>
      <InfiniteScroll
        dataLength={coupons.length} //This is important field to render the next data
        next={getData}
        hasMore={!lastPage}
      >
        <Typography className={"textSecondary"}></Typography>
        <Grid container className={"w-100 m-0 px-2 py-4"}>
          <Grid container spacing={2} className={"mb-4"}>
            {coupons?.map((couponcontent) => {
              return (
                <CouponBox
                  key={couponcontent._id}
                  title={couponcontent.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}
                  image={couponcontent.image?.fileName}
                  alt={couponcontent.image?.alt}
                  url={"coupon/" + couponcontent.slug}
                  width="50%"
                />
              );
            })}
          </Grid>
        </Grid>
        {/* <Box
          sx={{
            display: 'none',
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
            {coupons?.map((couponcontent) => (
              <Ratingxs
                key={couponcontent._id}
                title={couponcontent.title?.replace(
                  "$year$",
                  new Date().getFullYear()
                )}
                image={couponcontent.image?.fileName}
                alt={couponcontent.image?.alt}
                url={"coupon/" + couponcontent.slug}
              />
            ))}
          </Carousel>
        </Box> */}
      </InfiniteScroll>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  );
}

export default ProductInfo;
