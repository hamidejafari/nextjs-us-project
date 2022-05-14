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
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/router";

import sxStyles from "../../styles/style";
// components
import TopBrands from "./TopBrands";
import RelatedCat from "./RelatedCat";

const style = {
  position: 'absolute',
  top: '0%',
  bottom: '0px',
  left: '0%',
  width: '100%',
  height: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  display: 'flex',
  justifyContent: 'center',
  p: '2.75rem 1rem 1rem 1rem',
  overflow: 'scroll',
  scrollbarWidth: 'none',
};

function Sidebar(props) {
  const brands = props?.catBrands;
  const cats = props?.topChilds;
  const category = props?.category;

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
                  {category?.parentId?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}{" "}
                  Brands
                </Typography>
              </Grid>
              <Grid item xs={12} className={"p-3"}>
                <List className={"ul"}>
                  {brands?.map((brand, index) => ( brand?._id?.title && 
                    <TopBrands
                      key={index}
                      name={brand?._id?.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      number={"#" + brand?.standing}
                      url={brand?._id?.slug}
                    />
                  ))}
                </List>
              </Grid>
            </>
          )}
        </Grid>
      </Card>
    </>
  );
}

export default Sidebar;
