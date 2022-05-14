import * as React from "react";
import axios from "axios";
import {
  Breadcrumbs,
  Card,
  Container,
  Grid,
  Link,
  List,
  Typography,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

// components
import SiteLayout from "../../layouts/SiteLayout";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import Custom404 from "../404";
import LinksCards from "../../components/product/LinksCards";
import sxStyles from "../../styles/style";
import Sidebar from "../../components/best/Sidebar";
import HeaderInn from "../../components/best/HeaderInn";
import BestItem from "../../components/best/BestItem";

let myNumber = 90;

const reviewsCountCal = (count, key) => {
  let kc = count;
  let c1 = 90;
  let c2 = 1.25;
  let c3 = 0.6;

  if (key % 2 === 1) {
    myNumber = myNumber * c2;
    kc = (3200 * myNumber) / 100;
  } else {
    myNumber = myNumber * c3;
    kc = (3200 * myNumber) / 100;
  }
  kc = Math.round(kc);

  if (key == 0) {
    kc = 3200;
  }

  return kc + count;
};

function TagDetail(props) {
  const { category, tag, menuCategories, setting, notFound, products } = props;
  let page;

  if (!notFound) {
    let titleSeo;
    let descriptionSeo;

    if (tag?.titleSeo) {
      titleSeo = tag?.titleSeo?.replace("$year$", new Date().getFullYear());
    } else {
      titleSeo =
        "#" +
        products.length +
        " of best " +
        category.title +
        " " +
        tag?.title?.replace("$year$", new Date().getFullYear());
    }

    descriptionSeo = tag?.descriptionSeo?.replace(
      "$year$",
      new Date().getFullYear()
    );

    let h1Content;
    if (tag?.h1) {
      h1Content = tag?.h1?.replace("$year$", new Date().getFullYear());
    } else {
      h1Content = tag?.title?.replace("$year$", new Date().getFullYear());
    }

    page = (
      <SiteLayout
        noIndex={true}
        titleSeo={titleSeo}
        menuCategories={menuCategories}
        setting={setting}
        descriptionSeo={descriptionSeo}
      >
        <div className={"w-100 bgGrayTwo best pb-5"}>
          <HeaderInn h1Content={h1Content} />

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
                    <Typography color="text.primary" fontSize={15}>
                      {tag.title}
                    </Typography>
                  </Breadcrumbs>
                </div>
              </Grid>

              {Array.isArray(tag?.description) && tag?.description?.length > 0 && (
                <Grid xs={12} className={"px-2 pb-3"}>
                  <Card className={"p-2 rounded-0 shadow-none linksCard"}>
                    <List className={"py-0 px-1 scrolllink"}>
                      {tag?.description?.map(
                        (item, index) =>
                          item.headerType === "h2" && (
                            <LinksCards
                              key={index}
                              title={item.header}
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
                className={"p-2 best"}
                sx={sxStyles["sideDesk"]}
              >
                <Sidebar
                  topChilds={[]}
                  category={category}
                  catBrands={category.brands}
                  categoryTitle={category.title}
                />
              </Grid>
              <Grid md={9} xs={12} className={""}>
                <Grid container spacing={1} className={"w-100 m-0"}>
                  {products?.map((bestcontent, index) => (
                    <BestItem
                      key={index}
                      proKey={index}
                      image={bestcontent.images[0]?.fileName}
                      alt={bestcontent.image?.alt}
                      number={null}
                      productName={bestcontent?.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      star={bestcontent?.star}
                      reviewsNumber={reviewsCountCal(
                        bestcontent?.reviewsCount,
                        index
                      )}
                      overallRating={bestcontent.star * 2}
                      websiteUrl={bestcontent?.siteUrl}
                      reviewsUrl={bestcontent?.slug}
                      description={bestcontent?.descriptionBest?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      pros={[]}
                      cons={[]}
                    />
                  ))}
                </Grid>
                <Grid xl={12} className={"p-2"}>
                  {tag.description?.map((desItem, index) => (
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
                <Grid
                  xs={12}
                  className={"p-2 m-auto best"}
                  sx={sxStyles["sideMob"]}
                >
                  <Sidebar
                    topChilds={[]}
                    category={category}
                    catBrands={category.brands}
                    categoryTitle={category.title}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </SiteLayout>
    );
  } else {
    page = <Custom404 />;
  }

  return page;
}

export async function getServerSideProps({ req, res, query }) {
  let menuCategories;
  let setting;
  let notFound = false;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  try {
    let category;
    let tag;
    let products;
    const response = await axios.get(
      process.env.BACKEND_SERVER_URL + "/api/site/tags/" + query.slug
    );

    category = response.data?.category;
    tag = response.data?.tag;
    products = response.data?.products;

    return {
      props: {
        query,
        category,
        tag,
        products,
        menuCategories,
        setting,
        notFound,
        hostname: "https://www." + req?.headers?.host,
      },
    };
  } catch (err) {
    console.log("err");
    return {
      props: { notFound: true },
    };
  }
}

export default TagDetail;
