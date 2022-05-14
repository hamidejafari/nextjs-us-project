import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  Typography,
  Divider,
  Link,
  Button,
  CardContent,
  CardActions,
  IconButton,
  CardMedia,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import PersonIcon from "@mui/icons-material/Person";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 570 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 1.25,
    slidesToSlide: 1,
  },
};

// component
import Review from "./Review";
import Form from "./Form";
import Share from "./Share";
import Related from "./Related";

// styles

function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

function ProductInfo(props) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href); // Logs `http://localhost:3000/blog/incididunt-ut-lobare-et-dolore`
  }, []);

  const share = [
    {
      icon: "/images/social/facebook.webp",
      url: "https://www.facebook.com/sharer/sharer.php?u=",
    },
    {
      icon: "/images/social/linkedin.webp",
      url: "https://www.linkedin.com/shareArticle?mini=true&url=",
    },
    {
      icon: "/images/social/insta.webp",
      url: "https://www.instagram.com/sharer.php?u=",
    },
    {
      icon: "/images/social/telegram.webp",
      url: "https://xn--r1a.link/share/url?url=",
    },
    {
      icon: "/images/social/twitter.webp",
      url: "http://www.twitter.com/share?url=",
    },
  ];

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{
        xs: 1,
        sm: 2,
        md: 3,
      }}
      className={"w-100 m-0 p-2"}
    >
      <Card className={"border-0 shadow-none"}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
          className={"w-100 m-0 product-info p-2"}
        >
          <Grid
            item
            xl={4}
            lg={5}
            md={6}
            sm={10}
            xs={12}
            mx={"auto"}
            className={"p-2"}
          >
            <img
              alt={props?.blog?.image?.alt}
              width="100%"
              height="auto"
              src={
                props?.blog?.image?.fileName
                  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/main/" +
                    props?.blog?.image?.fileName
                  : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/placeholder/300x300.webp"
              }
            />
          </Grid>
          <Grid item xs={12} className={"p-2"}>
            <CardContent className={"px-0 CardContent det"}>
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
                  item
                  xl={1}
                  lg={2}
                  md={3}
                  sm={2}
                  xs={12}
                  className={"date"}
                  textAlign={"center"}
                >
                  <div>
                    <Typography
                      variant="body1"
                      component="div"
                      fontWeight={"bolder"}
                      fontSize={15}
                    >
                      {
                        new Date(props.blog?.createdAt)
                          .toDateString()
                          .split(" ")[2]
                      }
                    </Typography>
                    <Typography variant="body1" component="div" fontSize={15}>
                      {
                        new Date(props.blog?.createdAt)
                          .toDateString()
                          .split(" ")[1]
                      }
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  xl={11}
                  lg={10}
                  md={9}
                  sm={10}
                  xs={12}
                  className={"nameBlog"}
                  alignSelf={"end"}
                >
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
                    <Grid item xl={3} alignSelf={"center"} textAlign={"right"}>
                      <CardActions className={"justify-content-end"}>
                        <IconButton aria-label="the writer">
                          <PersonIcon className={"me-1"} size="small" />
                          <Typography
                            variant="h6"
                            component="div"
                            fontSize={16}
                            color={"gray"}
                          >
                            admin
                          </Typography>
                        </IconButton>
                        <IconButton aria-label="review">
                          <ModeCommentRoundedIcon
                            className={"me-1"}
                            size="small"
                          />
                          <Typography
                            variant="h6"
                            component="div"
                            fontSize={16}
                            color={"gray"}
                          >
                            {props.reviewsCount}
                          </Typography>
                        </IconButton>
                        <IconButton aria-label="visit">
                          <VisibilityRoundedIcon
                            className={"me-1"}
                            size="small"
                          />
                          <Typography
                            variant="h6"
                            component="h2"
                            fontSize={16}
                            color={"gray"}
                          >
                            {generateRandom(1200, 2000) + props?.blog?.views}
                          </Typography>
                        </IconButton>
                      </CardActions>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
          <Grid item xs={12} className={"px-2 py-3"}>
            {props?.blog?.description?.map((desItem, index) => (
              <React.Fragment key={index}>
                {index === props?.blog?.description?.length - 1 &&
                  props?.blog?.afterDescImage?.fileName && (
                    <Grid item xs={12} className={"px-2 py-3"}>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        className={"px-2 py-3 mx-auto"}
                      >
                        <img
                          alt={props?.blog?.afterDescImage?.alt}
                          width="100%"
                          height="auto"
                          src={
                            process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/main/" +
                            props?.blog?.afterDescImage?.fileName
                          }
                        />
                      </Grid>
                    </Grid>
                  )}
                <div id={desItem.header + index}>
                  <Typography
                    variant="h5"
                    component={desItem.headerType}
                    className={"fw-bolder textSecondary"}
                    fontSize={20}
                  >
                    {desItem.header}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className={"py-2"}
                    textAlign={"justify"}
                  >
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
                {index === 0 && props?.blog?.beforeDescImage?.fileName && (
                  <Grid item xs={12} className={"px-2 py-3"}>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={4}
                      className={"px-2 py-3 mx-auto"}
                    >
                      <img
                        alt={props?.blog?.beforeDescImage?.alt}
                        width="100%"
                        height="auto"
                        src={
                          process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/main/" +
                          props?.blog?.beforeDescImage?.fileName
                        }
                      />
                    </Grid>
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
          {}

          <Divider className={"mt-3"} />

          {/* <Grid xs={12} className={"px-2 py-3"}>
						<Typography variant="h5" component="h3" className={"fw-bolder mb-3 textSecondary"}>
							Tag :
						</Typography>
						{
							tags?.map((content, index) => (
								<Tags
									key={index}
									title={content.title}
									url={content.url}
								/>
							))
						}
					</Grid> */}
          <Grid item xs={12} className={"px-2 py-3"}>
            <Typography
              variant="h5"
              component="div"
              className={"fw-bolder mb-1 textSecondary"}
            >
              SHARE :
            </Typography>
            {share?.map((content, index) => (
              <Share
                key={index}
                icon={content.icon}
                url={content.url + currentUrl}
              />
            ))}
            <Divider className={"mt-3"} />
          </Grid>

          <Grid item xs={12} className={"px-2 py-3"}>
            {props?.reviewsCount > 5 && (
              <Link
                href="#addComment"
                variant="contained"
                size="large"
                disableElevation
                className={"btnLeave"}
              >
                LEAVE A REVIEW
              </Link>
            )}

            {Array.isArray(props?.reviews) && props?.reviews.length > 0 && (
              <React.Fragment>
                <Typography
                  fontSize={"1.5rem"}
                  className={"fw-bolder textSecondary my-4"}
                >
                  REVIEWS{" "}
                  <span className={"number"}>({props.reviewsCount})</span>
                </Typography>
                {props?.reviews?.map((revcontent, index) => (
                  <Review
                    key={index}
                    avatar={"/images/user.webp"}
                    name={revcontent.name}
                    date={revcontent.createdAt}
                    rate={revcontent.star}
                    review={revcontent.content}
                  />
                ))}
                <Grid item xs={12} textAlign={"center"} py={4}>
                  <Button
                    variant="outlined"
                    size="small"
                    color="inherit"
                    className={"rounded-0"}
                  >
                    more...
                  </Button>
                </Grid>
              </React.Fragment>
            )}
          </Grid>
          <Grid item xs={12} className={"px-0 py-1"}>
            <Form blog={props.blog} />
            <Divider className={"my-3"} />
          </Grid>

          {props?.relatedBlogs?.length > 0 && (
            <Grid item xs={12} className={"px-0 pt-3"}>
              <Typography
                variant="h5"
                component="h3"
                className={"fw-bolder textSecondary px-2"}
              >
                TOP RELATED BLOG
              </Typography>
              <Grid item xs={12}>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  arrows={false}
                  responsive={responsive}
                  ssr={false} // means to render carousel on server-side.
                  infinite={false}
                  autoPlay={false}
                  focusOnSelect={false}
                  autoPlaySpeed={7500}
                  keyBoardControl={false}
                  customTransition="all 1s"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {props?.relatedBlogs?.map((content, index) => (
                    <Related
                      key={index}
                      image={content.image}
                      title={content.title?.replace(
                        "$year$",
                        new Date().getFullYear()
                      )}
                      month={
                        new Date(content.createdAt).toDateString().split(" ")[1]
                      }
                      day={
                        new Date(content.createdAt).toDateString().split(" ")[2]
                      }
                      year={
                        new Date(content.createdAt).toDateString().split(" ")[3]
                      }
                      url={"blog/" + content.slug}
                    />
                  ))}
                </Carousel>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Card>
    </Grid>
  );
}

export default ProductInfo;
