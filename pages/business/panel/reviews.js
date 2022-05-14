import React, { useState, useEffect } from "react";
import { Card, Grid, Button, CircularProgress } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { useCookies } from "react-cookie";

import BusinesLayout from "../../../layouts/BusinesLayout";
import Reviews from "../../../components/businessPanel/Reviews";
import businessAxiosInstance from "../../../utiles/businessAxiosInstance";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@mui/system";

function Dashboard({ query }) {
  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [cookies] = useCookies(["business"]);

  const getReviews = async () => {
    setLoading(true);
    let path = "/site/business/reviews?page=" + page;
    if (query?.onModel) {
      path = path + "&onModel=" + query.onModel;
    }
    const { data } = await businessAxiosInstance(cookies).get(path);
    if (data?.meta?.lastPage === page) {
      setLastPage(true);
    }
    setPage((prev) => prev + 1);
    setLoading(false);
    setReviews((prev) => [...prev, ...data?.reviews]);
  };

  const resetReviews = async () => {
    setReviews([]);
    setPage(1);
    setLastPage(false);
    setLoading(true);
  };

  useEffect(() => {
    getReviews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BusinesLayout>
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
        {business?.brand ? (
          <Grid item xl={7} lg={10} xs={12} mx={"auto"} className={"p-2"}>
            <InfiniteScroll
              dataLength={reviews.length} //This is important field to render the next data
              next={getReviews}
              hasMore={!lastPage}
            >
              <Card
                className={"rounded-0 shadow-none dash p-0"}
                sx={{ bgcolor: "transparent" }}
              >
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
                  {reviews?.map((content, index) => (
                    <Reviews
                      key={index}
                      avatar={"/images/user.webp"}
                      name={content.name}
                      date={content.createdAt}
                      status={content.status}
                      rate={content.star}
                      review={content.content}
                      id={content._id}
                      setLoading={setLoading}
                      resetReviews={resetReviews}
                    />
                  ))}
                </Grid>
              </Card>
            </InfiniteScroll>
            {loading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CircularProgress color="secondary" />
              </Box>
            )}
            <>
              {!loading && reviews?.length === 0 && (
                <p>You dont have any review</p>
              )}
            </>
          </Grid>
        ) : (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={3}>
              <CircularProgress className="me-3" color="inherit" />
            </Grid>
          </Grid>
        )}
      </Grid>
    </BusinesLayout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  return {
    props: {
      query,
    },
  };
}

export default Dashboard;
