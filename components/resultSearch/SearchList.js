import React from "react";
import { Typography, Grid } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

// component
import Blogs from "./Blogs";
import Brands from "./Brands";
import Products from "./Products";
import Categorys from "./Categorys";
import Comparisons from "./Comparisons";

function SearchList({ searchResults }) {
  return (
    <>
      {searchResults?.categories?.length > 0 && (
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
          <Grid xs={12} className={"px-2 pt-5"}>
            <Typography
              variant="body2"
              gutterBottom
              fontSize={25}
              fontWeight={"bolder"}
              my={"0px"}
              className={"textSecondary"}
              display={"flex"}
              alignItems={"center"}
            >
              <DoubleArrowIcon className={"me-2 mb-1"} fontSize="large" />
              Categories
            </Typography>
          </Grid>
          {searchResults.categories?.map((content, index) => (
            <Categorys
              key={index}
              name={content._source.title}
              url={content._source.slug}
            />
          ))}
        </Grid>
      )}

      {searchResults?.products?.length > 0 && (
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
          <Grid xs={12} className={"px-2 pt-5"}>
            <Typography
              variant="body2"
              gutterBottom
              fontSize={25}
              fontWeight={"bolder"}
              my={"0px"}
              className={"textSecondary"}
              display={"flex"}
              alignItems={"center"}
            >
              <DoubleArrowIcon className={"me-2 mb-1"} fontSize="large" />
              Products
            </Typography>
          </Grid>
          {searchResults.products?.map((content, index) => (
            <Products
              key={index}
              name={content._source.title}
              url={content._source.slug}
            />
          ))}
        </Grid>
      )}

      {searchResults?.comparisons?.length > 0 && (
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
          <Grid xs={12} className={"px-2 pt-5"}>
            <Typography
              variant="body2"
              gutterBottom
              fontSize={25}
              fontWeight={"bolder"}
              my={"0px"}
              className={"textSecondary"}
              display={"flex"}
              alignItems={"center"}
            >
              <DoubleArrowIcon className={"me-2 mb-1"} fontSize="large" />
              Comparisons
            </Typography>
          </Grid>
          {searchResults.comparisons?.map((content, index) => (
            <Comparisons
              key={index}
              name={
                content._source.compare1Id + " VS " + content._source.compare2Id
              }
              url={content._source.slug}
            />
          ))}
        </Grid>
      )}

      {searchResults?.brands?.length > 0 && (
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
          <Grid xs={12} className={"px-2 pt-5"}>
            <Typography
              variant="body2"
              gutterBottom
              fontSize={25}
              fontWeight={"bolder"}
              my={"0px"}
              className={"textSecondary"}
              display={"flex"}
              alignItems={"center"}
            >
              <DoubleArrowIcon className={"me-2 mb-1"} fontSize="large" />
              Brands
            </Typography>
          </Grid>
          {searchResults.brands?.map((content, index) => (
            <Brands
              key={index}
              name={content._source.title}
              url={content._source.slug}
            />
          ))}
        </Grid>
      )}

      {searchResults?.blogs?.length && (
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
          <Grid xs={12} className={"px-2 pt-5"}>
            <Typography
              variant="body2"
              gutterBottom
              fontSize={25}
              fontWeight={"bolder"}
              my={"0px"}
              className={"textSecondary"}
              display={"flex"}
              alignItems={"center"}
            >
              <DoubleArrowIcon className={"me-2 mb-1"} fontSize="large" />
              Blogs
            </Typography>
          </Grid>
          {searchResults.blogs?.map((content, index) => (
            <Blogs
              key={index}
              name={content._source.title}
              url={content._source.slug}
            />
          ))}
        </Grid>
      )}
    </>
  );
}

export default SearchList;
