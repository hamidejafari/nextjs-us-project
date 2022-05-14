import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider,
  Rating,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import sxStyles from "../../styles/style";
import Link from "next/link";

function Products(props) {
  const router = useRouter();
  return (
    <div className={"px-2 blogs"}>
      <Card className={"cardPro best p-0"} sx={sxStyles["cardPro"]}>
        <Link href={"/" + props.url}>
          <a>
            <Box className={"figure"} sx={sxStyles["cardProfigure"]}>
              <Box className={"figure-inn"} sx={sxStyles["cardProfigureInn"]}>
                <img
                  src={
                    props.image
                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/medium/" +
                        props.image
                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/product-sample.webp"
                  }
                  alt={props.alt}
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
              {props.name}
            </Typography>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={props.rat}
                precision={0.5}
                readOnly
                size="small"
              />
            </Stack>
          </Grid>
          <Grid xs={12} className={"p-1"}>
            <Link href={"/" + props.categoryUrl} className={"SeeBest"}>
              <a>
                <Typography fontSize={13} className={"pointer see"}>
                  See 10 {props.bestName}
                </Typography>
              </a>
            </Link>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Products;
