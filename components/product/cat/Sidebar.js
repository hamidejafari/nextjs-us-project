import React from "react";
import {
  Card,
  Grid,
  List,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";

// components
import TopBrands from "./TopBrands";
import RelatedCat from "./RelatedCat";

function Sidebar(props) {
  const router = useRouter();
  const brands = props?.brands;
  const cats = [
    {
      name: "CBD OIL",
      image: "/images/best/cat1.webp",
      url: "/",
    },
    {
      name: "CBD SALVE",
      image: "/images/best/cat2.webp",
      url: "/",
    },
    {
      name: "CBD SOFTGEL",
      image: "/images/best/cat3.webp",
      url: "/",
    },
    {
      name: "CBD CREAM",
      image: "/images/best/cat4.webp",
      url: "/",
    },
  ];
  return (
    <>

      {
        brands?.length > 0 && <>

          <Card
            className={"sidebarBest w-100"}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            <Grid container spacing={1} className={"w-100 m-0"}>
              <Grid item xs={12} className={"px-3"}>
                <Typography
                  variant="h6"
                  component="div"
                  className={"textSecondary fw-bolder"}
                  fontSize={"1rem"}
                >
                  Top{" "}
                  {props?.category?.parentId?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}{" "}
                  Brands
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-3"}>
                <List className={"ul"}>
                  {brands?.length > 0 && brands?.map((brandcontent, index) => (
                    <TopBrands
                      key={index}
                      name={brandcontent._id?.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      number={"#" + brandcontent.standing}
                      url={brandcontent._id?.slug}
                    />
                  ))}
                </List>
              </Grid>
            </Grid>
          </Card>

          <Card
            className={"sidebarBest"}
            sx={{ display: { md: "none", xs: "block" } }}
          >
            <Grid container spacing={1} className={"w-100 m-0"}>
              <Grid item xs={12} className={"px-1"}>
                <Typography
                  variant="h6"
                  component="div"
                  className={"textSecondary fw-bolder"}
                  fontSize={"1rem"}
                >
                  Top{" "}
                  {props?.category?.parentId?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}{" "}
                  Brands
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-3"}>
                <List className={"ul"}>
                  {brands?.length > 0 && brands?.map((brandcontent, index) => (
                    <TopBrands
                      key={index}
                      name={brandcontent._id?.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      number={"#" + brandcontent.standing}
                      url={brandcontent._id?.slug}
                    />
                  ))}
                </List>
              </Grid>
            </Grid>
          </Card>


        </>
      }

    </>
  );
}

export default Sidebar;
