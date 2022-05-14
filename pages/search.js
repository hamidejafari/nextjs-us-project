import * as React from "react";
import { Container, Grid, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

// components
import SiteLayout from "../layouts/SiteLayout";
import HeadeeInn from "../components/resultSearch/HeaderInn";
import SearchList from "../components/resultSearch/SearchList";
import fetchLayoutData from "../utiles/fetchLayoutData";
import axios from "axios";
import { parseCookies } from "../utiles/cookieHelper";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function ResultSearch({
  searchResults,
  totalLength,
  query,
  menuCategories,
  setting,
}) {
  return (
    <SiteLayout
      noIndex={true}
      menuCategories={menuCategories}
      setting={setting}
    >
      <div className={"w-100 maincat pt-0 pb-5"}>
        <HeadeeInn totalLength={totalLength} query={query} />
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
                  <Typography color="text.primary" fontSize={15}>
                    Search
                  </Typography>
                </Breadcrumbs>
              </div>
            </Grid>
            <Grid xs={12} className={"p-0"}>
              <SearchList searchResults={searchResults} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps(context) {
  const { query, req } = context;

  const coo = parseCookies(req);

  const adminToken = coo["admin-token"];

  let searchResults = [];
  let totalLength = 0;

  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  const userAgent = req.headers["user-agent"];

  if (query?.title) {
    const response = await axios.post(
      process.env.BACKEND_SERVER_URL + "/api/site/search?title=" + query.title,
      {
        ip,
        userAgent,
      },
      {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      }
    );
    searchResults = response.data?.data;
    totalLength =
      searchResults?.categories?.length +
      searchResults?.products?.length +
      searchResults?.comparisons?.length +
      searchResults?.brands?.length +
      searchResults?.blogs?.length;
  }

  return {
    props: {
      query,
      searchResults,
      menuCategories,
      setting,
      totalLength,
    },
  };
}

export default ResultSearch;
