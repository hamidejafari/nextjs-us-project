import * as React from "react";
import {
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  Card,
  List,
  Stack,
  Box,
  Rating,
  CardContent,
  Divider,
} from "@mui/material";

// components

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 570 },
    items: 2.25,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 1.5,
    slidesToSlide: 1,
  },
};
import HeaderInnAb from "../../components/best/HeaderInnAb";
import SidebarAb from "../../components/best/SidebarAb";
import Specialist from "../../components/best/Specialist";
import ProductsAb from "../../components/best/ProductsAb";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Link from "next/link";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
import BannerModal from "../BannerModal";
import Faq from "../best/Faq";
import sxStyles from "../../styles/style";
import Carousel from "react-multi-carousel";


function LevelThreeCategorySpecial(props) {
  const { extraProducts, catParent, catBrands, topChilds, category } = props;

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
      name: catParent?.parentId?.title,
      item: props?.hostname + "/" + catParent?.parentId?.slug,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: catParent?.title,
      item: props?.hostname + "/" + catParent?.slug,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: category.title,
    },
  ];

  let myNumber = 90;

  return (
    <div className={"w-100 bgGrayTwo best pro pb-5"}>
      <Breadcrumb
        items={breadcrumbItems}
        datePublished={category?.publishDate}
        dateModified={category?.publishDate}
      />
      <HeaderInnAb
        image={category?.headerImage}
        h1Content={
          category?.h1
            ? category?.h1?.replace("$year$", new Date().getFullYear())
            : category?.title?.replace("$year$", new Date().getFullYear())
        }
      />{" "}
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
                  href={"/" + catParent?.parentId?.slug || "/"}
                >
                  <a>
                    <Typography display={"flex"} className={"pointer"}>
                      {catParent?.parentId?.title}
                    </Typography>
                  </a>
                </Link>
                <Link
                  fontSize={15}
                  underline="hover"
                  href={"/" + catParent?.slug || "/"}
                >
                  <a>
                    <Typography className={"pointer"} display={"flex"}>
                      {catParent?.title}
                    </Typography>
                  </a>
                </Link>
                <Typography color="text.primary" fontSize={15}>
                  {category.title}
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>
          <Grid md={3} xs={12} className={"p-2"} sx={sxStyles["sideDesk"]}>
            <SidebarAb
              topChilds={topChilds}
              category={category}
              catBrands={catBrands}
            />
          </Grid>
          <Grid md={9} xs={12} className={"product-info p-1"}>
            <Grid xs={12} className={"py-1"}>
              <Specialist />
            </Grid>
            <ProductsAb category={category} products={category?.products} />
            {extraProducts?.length > 0 && (
              <Grid xs={12} className={"px-0 py-3 probr"}>
                <Typography
                  variant="h5"
                  component="div"
                  className={"fw-bolder textSecondary px-2"}
                  sx={{ position: "absolute", top: "1.5rem" }}
                >
                  PRODUCTS
                </Typography>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  arrows={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  focusOnSelect={false}
                  autoPlaySpeed={7000}
                  keyBoardControl={false}
                  customTransition="all 1s"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {extraProducts?.map((content, index) => (
                    <div className={"px-2 blogs"} key={content._id}>
                      <Card
                        className={"cardPro best p-0"}
                        sx={sxStyles["cardPro"]}
                      >
                        <Link href={"/" + content.slug}>
                          <a>
                            <Box
                              className={"figure"}
                              sx={sxStyles["cardProfigure"]}
                            >
                              <Box
                                className={"figure-inn"}
                                sx={sxStyles["cardProfigureInn"]}
                              >
                                <img
                                  src={
                                    content.image?.fileName
                                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                        "/files/images/medium/" +
                                        content.image?.fileName
                                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                        "/files/images/placeholder/product-sample.webp"
                                  }
                                  alt={content.image?.alt}
                                  className={"cardProfigureInnimg"}
                                />
                              </Box>
                            </Box>
                          </a>
                        </Link>
                        <Divider />
                        <CardContent className={"p-2"}>
                          <Grid xs={12} className={"p-1"}>
                            <Typography
                              variant="h6"
                              component="div"
                              fontSize={15}
                              height={"3.5rem"}
                            >
                              {content.title}
                            </Typography>
                          </Grid>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </Carousel>
              </Grid>
            )}
            <Grid xl={12} className={"p-2"}>
              {category.description?.map((desItem, index) => (
                <div key={index} id={desItem.header + index}>
                  <Typography
                    variant="h5"
                    component={desItem.headerType}
                    gutterBottom
                    fontWeight={"bolder"}
                  >
                    {desItem.header?.replace(
                      "$year$",
                      new Date().getFullYear()
                    )}
                  </Typography>
                  <Typography variant="body1" component="div" gutterBottom>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: desItem.desc?.replace(
                          "$year$",
                          new Date().getFullYear()
                        ),
                      }}
                      className="text-justify"
                    ></div>
                  </Typography>
                </div>
              ))}
            </Grid>

            {Array.isArray(category.faq) && category.faq.length > 0 && (
              <Grid xs={12} className={"px-2 py-3"}>
                <Typography
                  variant="h5"
                  component="h3"
                  className={"fw-bolder textSecondary mb-3"}
                >
                  FAQ
                </Typography>
                {category.faq?.map((faqcontent, index) => (
                  <Faq
                    key={index}
                    id={faqcontent._id}
                    expanded={faqcontent._id}
                    question={faqcontent.question}
                    response={faqcontent.answer}
                  />
                ))}
              </Grid>
            )}
          </Grid>
          <Grid xs={12} className={"p-2 m-auto"} sx={sxStyles["sideMob"]}>
            <SidebarAb
              topChilds={topChilds}
              category={category}
              catBrands={catBrands}
            />
          </Grid>
        </Grid>
      </Container>
      {category.bannerId &&
        (!category.bannerId.startDate ||
          new Date(category.bannerId.startDate) < new Date()) &&
        (!category.bannerId.expireDate ||
          new Date(category.bannerId.expireDate) > new Date()) && (
          <BannerModal banner={category.bannerId} />
        )}
    </div>
  );
}

export default LevelThreeCategorySpecial;
