import React from "react";
import { Grid, Rating, Card, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

// styles
import sxStyles from "../../styles/style";
import reviewsCount from "../../utiles/reviewsCount";

function ReviewBox(props) {
  const content = props?.content;
  return (
    <>
      <div className={"px-3 py-2"}>
        <Link href={content?.modelId.slug}>
          <a>
            <Card className={"reviewCard p-1 my-0"}>
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
                <Grid
                  lg={5}
                  md={4}
                  sm={5}
                  className={"align-self-center p-1"}
                  sx={sxStyles["proImgColMobile"]}
                >
                  <img
                    className="img-fluid"
                    width="100%"
                    height="100%"
                    src={
                      content.modelId?.images?.length > 0
                        ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/medium/" +
                          content.modelId?.images[0]?.fileName
                        : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/placeholder/300x300.webp"
                    }
                    alt={content.modelId?.image?.alt}
                  />
                </Grid>
                <Grid lg={7} md={8} sm={7} className={"align-self-center p-0"}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{
                      xs: 1,
                      sm: 2,
                      md: 3,
                    }}
                    className={"w-100 m-0 px-0"}
                  >
                    <Grid xs={5} className={"p-1"}>
                      <Typography
                        variant="body2"
                        gutterBottom
                        fontWeight={"lighter"}
                        fontSize={12}
                        color={"#000"}
                      >
                        {content.name}
                      </Typography>
                    </Grid>
                    <Grid xs={7} className={"p-1 textRight"}>
                      <Typography
                        variant="body2"
                        gutterBottom
                        fontWeight={"lighter"}
                        fontSize={12}
                        color={"#000"}
                      >
                        {new Date(content.createdAt).toDateString()}
                      </Typography>
                    </Grid>
                    <Grid xs={12} className={"px-1"}>
                      <Typography
                        variant="body1"
                        gutterBottom
                        className={"productName m-0"}
                      >
                        {content.modelId?.title?.replace(
                          "$year$",
                          new Date().getFullYear()
                        )}
                      </Typography>
                    </Grid>
                    <Grid xs={12} className={"px-1"}>
                      <Stack spacing={0}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={content.star}
                          precision={content.star}
                          readOnly
                        />
                      </Stack>
                    </Grid>
                    <Grid xs={12} className={"p-1"}>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={"desc m-0"}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: content.content,
                          }}
                          className="text-justify"
                        ></div>
                      </Typography>
                    </Grid>
                    <Grid xs={6} className={"p-1"}>
                      <Typography
                        variant="body2"
                        gutterBottom
                        fontWeight={"lighter"}
                        fontSize={10}
                        color={"#000"}
                      >
                        {reviewsCount(content.modelId.reviewsCount, props?.key)}{" "}
                        reviews
                      </Typography>
                    </Grid>
                    <Grid xs={6} className={"p-1 textRight"}>
                      <Typography
                        variant="body2"
                        gutterBottom
                        fontWeight={"lighter"}
                        fontSize={10}
                        color={"#000"}
                      >
                        overall rating : {content.modelId?.star * 2}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  lg={5}
                  md={4}
                  sm={5}
                  className={"align-self-center p-1"}
                  sx={sxStyles["proImgColDesk"]}
                >
                  <img
                    className="img-fluid"
                    width="100%"
                    height="100%"
                    src={
                      content.modelId?.images?.length > 0
                        ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/medium/" +
                          content.modelId?.images[0]?.fileName
                        : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/placeholder/300x300.webp"
                    }
                    alt={content.modelId?.image?.alt}
                  />
                </Grid>
              </Grid>
            </Card>
          </a>
        </Link>
      </div>
    </>
  );
}

export default ReviewBox;
