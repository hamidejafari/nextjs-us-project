import React, { useEffect, useState } from "react";
import { Box, Container, Typography, CardMedia } from "@mui/material";

function HeaderInn(props) {
  return (
    <Box className={"headerInnpr"}>
      <Container className={"containerInn"}>
        <Box
          className={"d-flex header-box"}
          sx={{
            px: {
              md: "0.5rem",
              xs: "0",
            },
          }}
          style={{
            backgroundImage: `url(${
              props.product?.headerImage?.fileName
                ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/main/" +
                  props.product?.headerImage?.fileName
                : props.product?.categoryId?.headerImage?.fileName
                ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/main/" +
                  props.product?.categoryId?.headerImage?.fileName
                : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/placeholder/1000x217.webp"
            })`,
          }}
        >
          {/* <CardMedia
            component="img"
            width="100%"
            height="175"
            src={
              props.product?.headerImage?.fileName
                ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/main/" +
                  props.product?.headerImage?.fileName
                : props.product?.categoryId?.headerImage?.fileName
                ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/main/" +
                  props.product?.categoryId?.headerImage?.fileName
                : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/placeholder/1000x217.webp"
            }
            alt={props.product?.headerImage?.alt}
          /> */}
          <Box className={"header-inn"}>
            <Typography
              variant="h4"
              component="h1"
              m={0}
              gutterBottom
              textAlign={"center"}
            >
              {props?.h1Content}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HeaderInn;
