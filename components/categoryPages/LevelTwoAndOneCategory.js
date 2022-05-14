import * as React from "react";
import {
  Card,
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  List,
  Box,
  Modal,
  Button,
} from "@mui/material";

// components
import HeaderInn from "../../components/product/cat/HeaderInn";
import Sidebar from "../../components/product/cat/Sidebar";
import Categores from "../../components/product/cat/Categores";
import sxStyles from "../../styles/style";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LinksCards from "../../components/product/LinksCards";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
import BannerModal from "../BannerModal";

function LevelTwoAndOneCategory(props) {
  const category = props?.category;

  const breadcrumbItemsLevelOne = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: props?.hostname,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: category.title,
    },
  ];

  const breadcrumbItemsLevelTwo = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: props?.hostname,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: category?.parentId?.title,
      item: props?.hostname + "/" + category?.parentId?.title,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: category.title,
    },
  ];

  return (
    <div className={"w-100 bgGrayTwo best cetegorys pb-5"}>
      <Breadcrumb
        items={
          category?.parentId ? breadcrumbItemsLevelTwo : breadcrumbItemsLevelOne
        }
        datePublished={category?.publishDate}
        dateModified={category?.publishDate}
      />
      <HeaderInn
        image={category?.headerImage}
        h1Content={
          category?.h1
            ? category?.h1?.replace("$year$", new Date().getFullYear())
            : category?.title?.replace("$year$", new Date().getFullYear())
        }
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
                {category?.parentId && (
                  <Link
                    fontSize={15}
                    underline="hover"
                    href={category?.parentId?.slug}
                  >
                    <a>
                      <Typography display={"flex"} className={"pointer"}>
                        {category?.parentId?.title}
                      </Typography>
                    </a>
                  </Link>
                )}

                <Typography color="text.primary" fontSize={15}>
                  {category.title}
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>

          {Array.isArray(category?.description) &&
            category?.description.length > 0 && (
              <Grid xs={12} className={"px-2 pb-3"}>
                <Card className={"p-2 rounded-0 shadow-none linksCard"}>
                  <List className={"py-0 px-1 scrolllink"}>
                    {category?.description?.map(
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

          <Grid md={3} xs={12} className={"p-2"} sx={sxStyles["sideDesk"]}>
            <Sidebar category={category} brands={props?.catBrands} />
          </Grid>
          <Grid md={9} xs={12} className={"p-0"}>
            <Categores childs={props?.topChilds} />
            <Grid xl={12} className={"px-2 py-3"}>
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
          </Grid>
          <Grid xs={12} className={"p-2 m-auto"} sx={sxStyles["sideMob"]}>
            <Sidebar category={category} brands={props?.catBrands} />
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

export default LevelTwoAndOneCategory;
