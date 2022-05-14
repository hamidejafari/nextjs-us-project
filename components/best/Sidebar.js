import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  List,
  Typography,
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

import sxStyles from "../../styles/style";
// components
import TopBrands from "./TopBrands";
import RelatedCat from "./RelatedCat";

const style = {
  position: "absolute",
  top: "0%",
  bottom: "0px",
  left: "0%",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  p: "2.75rem 1rem 1rem 1rem",
  overflow: "scroll",
  scrollbarWidth: "none",
};

function Sidebar(props) {
  const brands = props?.catBrands;
  const cats = props?.topChilds;
  const category = props?.category;
  const categoryTitle = props?.categoryTitle;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        className={"sidebarBest"}
        sx={{ display: { md: "block", xs: "none" } }}
      >
        <Grid container spacing={1} className={"w-100 m-0"}>
          {brands.length > 0 && (
            <>
              <Grid item xs={12} className={"px-3"}>
                <Typography
                  component="div"
                  className={"textSecondary fw-bolder"}
                  fontSize={"1rem"}
                >
                  Top{" "}
                  {categoryTitle
                    ? categoryTitle.replace("$year$", new Date().getFullYear())
                    : category?.parentId?.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}{" "}
                  Brands
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-3"}>
                <List className={"ul"}>
                  {brands?.map(
                    (brand, index) =>
                      brand?._id?.title && (
                        <TopBrands
                          key={index}
                          name={brand?._id?.title?.replace(
                            "$year$",
                            new Date().getFullYear()
                          )}
                          number={"#" + brand?.standing}
                          url={brand?._id?.slug}
                        />
                      )
                  )}
                </List>
              </Grid>
            </>
          )}

          {cats.length > 0 && (
            <>
              <Grid item xs={12} className={"p-3"}>
                <Typography
                  component="div"
                  className={"textSecondary fw-bolder"}
                  fontSize={"1rem"}
                >
                  Related{" "}
                  {category?.parentId?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}{" "}
                  Categories
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-2"}>
                <Grid container spacing={1} className={"w-100 m-0 p-0"}>
                  {cats?.map((cat, index) => (
                    <RelatedCat
                      key={index}
                      name={cat.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      image={cat.icon}
                      url={cat.slug}
                    />
                  ))}
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Card>
      <Card
        id="topbrand"
        className={"sidebarBest"}
        sx={{ display: { md: "none", xs: "block" } }}
      >
        <Grid container spacing={1} className={"w-100 m-0"}>
          {brands.length > 0 && (
            <>
              <Grid item xs={12} className={"px-1"}>
                <Typography
                  variant="h6"
                  component="div"
                  className={"textSecondary fw-bolder"}
                  fontSize={"1rem"}
                >
                  Top{" "}
                  {category?.parentId?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}{" "}
                  Brands
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-1"}>
                <List className={"ul"}>
                  {brands?.map(
                    (brand, index) =>
                      brand?._id?.title && (
                        <TopBrands
                          key={index}
                          name={brand?._id?.title?.replace(
                            "$year$",
                            new Date().getFullYear()
                          )}
                          number={"#" + brand?.standing}
                          url={brand?._id?.slug}
                        />
                      )
                  )}
                </List>
              </Grid>
            </>
          )}
          {cats.length > 0 && (
            <>
              <Grid item xs={12} className={"p-1"}>
                <Typography
                  variant="h6"
                  component="div"
                  className={"textSecondary fw-bolder"}
                  fontSize={"1rem"}
                >
                  Related{" "}
                  {category?.parentId?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}{" "}
                  Categories
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-0"}>
                <Grid container spacing={1} className={"w-100 m-0 p-0 rowmob"}>
                  {cats?.map((cat, index) => (
                    <RelatedCat
                      key={index}
                      name={cat.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      image={cat.icon}
                      url={cat.slug}
                    />
                  ))}
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Card>
      <Button
        className={"bestBtn"}
        sx={sxStyles["bestBtn"]}
        onClick={handleOpen}
      >
        Top{" "}
        {categoryTitle
          ? categoryTitle.replace("$year$", new Date().getFullYear())
          : category?.parentId?.title?.replace(
              "$year$",
              new Date().getFullYear()
            )}{" "}
        Brands
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className={"bestMbsd"}>
          <Box sx={style} className={"sidebarBest"}>
            <div className="p-0 w-100">
              <Button
                onClick={handleClose}
                className={"closeBtn"}
                sx={sxStyles["closeBtn"]}
              >
                <CloseIcon color="error" />
              </Button>
              <Card className={"sidebarBest"}>
                <Grid container spacing={1} className={"w-100 m-0"}>
                  {brands.length > 0 && (
                    <>
                      <Grid item xs={12} className={"p-3"}>
                        <List className={"ul"}>
                          {brands?.map(
                            (brand, index) =>
                              brand?._id?.title && (
                                <TopBrands
                                  key={index}
                                  name={brand?._id?.title?.replace(
                                    "$year$",
                                    new Date().getFullYear()
                                  )}
                                  number={"#" + brand?.standing}
                                  url={brand?._id?.slug}
                                />
                              )
                          )}
                        </List>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Card>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Sidebar;
