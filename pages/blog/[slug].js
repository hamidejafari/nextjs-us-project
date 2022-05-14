import * as React from "react";
import { Container, Grid, Breadcrumbs, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Error from "next/error";
import axios from "axios";
import Link from "next/link";

// components
import SiteLayout from "../../layouts/SiteLayout";
import HeaderInnBlog from "../../components/blog/details/HeaderInn";
import ProductInfoBlog from "../../components/blog/details/ProductInfo";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import HeaderInnCat from "../../components/blog/HeaderInn";
import SidebarCat from "../../components/blog/Sidebar";
import BlogsCat from "../../components/blog/Blogs";

// styles
import sxStyles from "../../styles/style";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function BlogDetails(data) {
  const breadcrumbItemsBlog = [
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
      item: data?.hostname + "/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: data?.blog?.blogCategoryId?.title?.replace(
        "$year$",
        new Date().getFullYear()
      ),
      item: data?.hostname + "/blog/" + data?.blog?.blogCategoryId?.slug,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: data?.blog?.title?.replace("$year$", new Date().getFullYear()),
    },
  ];

  const breadcrumbItemsCat = [
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
      item: data?.hostname + "/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: data?.category?.title?.replace("$year$", new Date().getFullYear()),
    },
  ];

  return (
    <>
      {data?.type == "blog" ? (
        data?.notFound !== true ? (
          <SiteLayout
            menuCategories={data.menuCategories}
            setting={data.setting}
            titleSeo={data?.blog?.titleSeo?.replace(
              "$year$",
              new Date().getFullYear()
            )}
          >
            <div className={"w-100 pro blogdetails pb-5"}>
              <Breadcrumb items={breadcrumbItemsBlog} />

              <HeaderInnBlog blog={data.blog} />
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
                          href={"/"}
                          fontSize={15}
                          underline="hover"
                          color="inherit"
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
                          href={"/blog/"}
                        >
                          <a>Blog</a>
                        </Link>

                        <Link
                          fontSize={15}
                          underline="hover"
                          color="inherit"
                          href={"/blog/" + data?.blog?.blogCategoryId?.slug}
                        >
                          <a>
                            {data?.blog?.blogCategoryId?.title?.replace(
                              "$year$",
                              new Date().getFullYear()
                            )}
                          </a>
                        </Link>
                        <Typography color="text.primary" fontSize={15}>
                          {data?.blog?.title?.replace(
                            "$year$",
                            new Date().getFullYear()
                          )}
                        </Typography>
                      </Breadcrumbs>
                    </div>
                  </Grid>

                  {data?.category?.brands.length > 0 ? (
                    <>
                      <Grid
                        md={3}
                        xs={12}
                        className={"p-2"}
                        sx={sxStyles["sideDesk"]}
                      >
                        <SidebarCat category={data.category} />
                      </Grid>
                      <Grid xl={9} md={8} xs={12} className={"p-0"}>
                        <ProductInfoBlog
                          reviewsCount={data.reviewsCount}
                          reviews={data.reviews}
                          blog={data.blog}
                          relatedBlogs={data.relatedBlogs}
                        />
                      </Grid>
                      <Grid
                        xs={12}
                        className={"p-2 m-auto"}
                        sx={sxStyles["sideMob"]}
                      >
                        <SidebarCat category={data.category} />
                      </Grid>
                    </>
                  ) : (
                    <Grid xl={12} md={12} xs={12} className={"p-0"}>
                      <ProductInfoBlog
                        reviewsCount={data.reviewsCount}
                        reviews={data.reviews}
                        blog={data.blog}
                        relatedBlogs={data.relatedBlogs}
                      />
                    </Grid>
                  )}
                </Grid>
              </Container>
            </div>
          </SiteLayout>
        ) : (
          <Error statusCode={404} />
        )
      ) : data?.notFound !== true ? (
        <SiteLayout
          menuCategories={data.menuCategories}
          setting={data.setting}
          titleSeo={data.category?.titleSeo?.replace(
            "$year$",
            new Date().getFullYear()
          )}
        >
          <div className={"w-100 coupons blogs bloglist pt-0 pb-5"}>
            <Breadcrumb items={breadcrumbItemsCat} />

            <HeaderInnCat blogCategory={data?.blogCategory} />
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
                        href="/blog"
                      >
                        <a>Blog</a>
                      </Link>
                      <Typography color="text.primary" fontSize={15}>
                        {data.category?.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                      </Typography>
                    </Breadcrumbs>
                  </div>
                </Grid>

                <Grid
                  md={3}
                  xs={12}
                  className={"p-2"}
                  sx={sxStyles["sideDesk"]}
                >
                  <SidebarCat category={data.category} />
                </Grid>
                <Grid xl={9} md={8} xs={12} className={"p-0"}>
                  <BlogsCat
                    blogCategory={data.blogCategory}
                    blogs={data.blogs}
                  />
                </Grid>
                <Grid xs={12} className={"p-2 m-auto"} sx={sxStyles["sideMob"]}>
                  <SidebarCat category={data.category} />
                </Grid>
              </Grid>
            </Container>
          </div>
        </SiteLayout>
      ) : (
        <Error statusCode={404} />
      )}
    </>
  );
}

export async function getServerSideProps({ req, query, resolvedUrl }) {
  let category;
  let blog;
  let notFound = false;

  let reviews;
  let reviewsCount;
  let relatedBlogs;

  let menuCategories;
  let setting;

  let blogCategory;
  let blogs;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  const response = await axios.get(
    process.env.BACKEND_SERVER_URL + "/api/site/blog/" + encodeURIComponent(query.slug)
  );
  let type;

  if (response?.data?.redirect) {
    return {
      redirect: {
        permanent: false,
        destination: "/" + response?.data?.redirect?.newAddress,
      },
      props: {},
    };
  }

  type = response?.data?.type;

  if (response.data?.type == "blog") {
    category = response.data.category;
    reviews = response.data.reviews;
    reviewsCount = response.data?.reviewsCount;
    blog = response.data.blog;
    relatedBlogs = response.data.relatedBlogs;

    return {
      props: {
        query,
        category,
        blog,
        reviews,
        reviewsCount,
        menuCategories,
        setting,
        relatedBlogs,
        hostname: "https://www." + req?.headers?.host,
        type:type

      },
    };
  }

  if (response.data?.type == "category") {
    blogCategory = response.data.blogCategory;
    category = response.data.category;
    blogs = response.data.blogs;

    return {
      props: {
        query,
        blogCategory,
        category,
        blogs,
        menuCategories,
        setting,
        hostname: "https://www." + req?.headers?.host,
        type:type
      },
    };
  }

  notFound = true;
  return {
    props: {
      query,
      notFound,
    },
  };
}

export default BlogDetails;
