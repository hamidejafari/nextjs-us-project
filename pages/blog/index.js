import * as React from "react";
import { Container, Grid, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import axios from "axios";
import fetchLayoutData from "../../utiles/fetchLayoutData";

// components
import SiteLayout from "../../layouts/SiteLayout";
import HeaderInn from "../../components/blog/cat/HeaderInn";
import Blogs from "../../components/blog/cat/Blogs";
import Blog from "../../components/blog/cat/Blog";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function CatBlogs(data) {
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
      name: "Blog",
    },
  ];

  return (
    <SiteLayout menuCategories={data.menuCategories} setting={data.setting}>
      <div className={"w-100 coupons blogs pt-0 pb-5"}>
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
                    Blog
                  </Typography>
                </Breadcrumbs>
              </div>
            </Grid>
            {data?.query?.title ? (
              <Grid xl={12} md={12} className={"p-0"}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                  }}
                  className={"w-100 m-0 product-info p-0"}
                >
                  {data?.blogs?.map((content, index) => (
                    <Blog
                      key={index}
                      alt={content.image?.alt}
                      image={
                        content.image?.fileName
                          ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/big/" +
                            content.image?.fileName
                          : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/placeholder/300x300.webp"
                      }
                      title={content.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      month={
                        new Date(content.createdAt).toDateString().split(" ")[1]
                      }
                      day={
                        new Date(content.createdAt).toDateString().split(" ")[2]
                      }
                      url={
                        "/blog/" +
                        content?.slug
                      }
                    />
                  ))}
                </Grid>
              </Grid>
            ) : (
              <Grid xs={12} className={"p-0"}>
                <Blogs blogCategories={data.blogCategories} />
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps({ req, query }) {
  let blogCategories = [];
  let blogs = [];

  let notFound = false;

  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  if (query?.title) {
    const response = await axios.get(
      process.env.BACKEND_SERVER_URL +
        "/api/site/blog-search?title=" +
        query?.title
    );

    blogs = response.data.blogs;
  } else {
    const response = await axios.get(
      process.env.BACKEND_SERVER_URL + "/api/site/blog-category/list"
    );

    blogCategories = response.data.blogCategories;
  }

  return {
    props: {
      query,
      blogCategories,
      menuCategories,
      setting,
      blogs,
      hostname: "https://www." + req?.headers?.host,
    },
  };
}

export default CatBlogs;
