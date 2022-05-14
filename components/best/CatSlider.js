import React from "react";
import { Card, Typography, Box, CardContent } from "@mui/material";
import Link from "next/link";

function CatSlider(props) {
  return (
    <Box className={"p-2"}>
      <Link href={"/" + props.url}>
        <a>
          <Card className={"p-2 shadow-none"}>
            <img
              src={
                props.image?.fileName
                  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/big/" +
                    props.image?.fileName
                  : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/placeholder/300x300.webp"
              }
              alt={props.image?.alt}
              width="100%"
            />
            <CardContent className={"py-2 px-0"}>
              <Typography
                variant="body1"
                component="div"
                className={"m-0"}
                fontSize={"0.9rem"}
                textAlign={"center"}
              >
                {props.name}
              </Typography>
            </CardContent>
          </Card>
        </a>
      </Link>
    </Box>
  );
}

export default CatSlider;
