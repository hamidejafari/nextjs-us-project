import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Breadcrumbs,
  Typography,
  Box,
  Card,
  Chip,
  Avatar,
  Hidden,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import VsHeader from "./VsHeader";
import TblDsk from "./TblDsk";
import TblMob from "./TblMob";
import RelatedVs from "./RelatedVs";
import Link from "next/link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Table(props) {
  const { comparison, related } = props;

  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={"bgPrimery px-0 pb-4"}>
        <VsHeader comparison={comparison} />
      </div>
      <div className={"TableDesk pb-5"}>
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
            <Grid xs={12} className={"px-2 pb-3 pt-4"}>
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link href="/">
                    <a href="">
                      <HomeOutlinedIcon
                        className={"me-2 mb-1"}
                        fontSize="small"
                      />
                      Home
                    </a>
                  </Link>
                  <Link
                    fontSize={15}
                    underline="hover"
                    color="inherit"
                    href="/comparison/list"
                  >
                    Comparisons
                  </Link>
                  <Typography color="text.primary" fontSize={15}>
                    {comparison?.compare1Id?.title +
                      " Vs " +
                      comparison?.compare2Id?.title}
                  </Typography>
                </Breadcrumbs>
              </div>
            </Grid>
          </Grid>
        </Container>
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
            <Grid xs={12} className={"p-2"}>
              <Box
                sx={{
                  display: {
                    md: "block",
                    xs: "none",
                  },
                }}
              >
                <TblDsk comparison={comparison} />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container className={"p-0"}>
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
            <Grid xs={12} className={"p-0"}>
              <Box
                sx={{
                  display: {
                    md: "none",
                    xs: "block",
                  },
                }}
              >
                {isRender && (
                  <Hidden mdUp={true}>
                    <TblMob comparison={comparison} />{" "}
                  </Hidden>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container>
          {related?.length > 0 && (
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
              <Grid xs={12} className={"px-2 pt-5 pb-2"}>
                <Typography
                  variant="h2"
                  component="p"
                  gutterBottom
                  fontWeight={"bolder"}
                  className={"textSecondary"}
                  fontSize={27.5}
                  textAlign={"center"}
                >
                  RELATED VS
                </Typography>
              </Grid>
              {related?.map((vsbox) => (
                <RelatedVs
                  key={vsbox._id}
                  title1={vsbox?.compare1Id?.title}
                  title2={vsbox?.compare2Id?.title}
                  image1={vsbox?.compare1Id?.image?.fileName}
                  image2={vsbox?.compare2Id?.image?.fileName}
                  alt1={vsbox?.compare1Id?.image?.alt}
                  alt2={vsbox?.compare2Id?.image?.alt}
                  url={vsbox.slug}
                />
              ))}
            </Grid>
          )}
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
            <Grid xs={12} className={"px-2 pt-5 pb-2"}>
              <Typography
                variant="h2"
                component="h4"
                gutterBottom
                fontWeight={"bolder"}
                className={"textSecondary"}
                fontSize={20}
                textAlign={"center"}
                mb={3}
              >
                How Do We Compare
                <br />
                {comparison?.compare1Id?.title} and{" "}
                {comparison?.compare2Id?.title} ?
              </Typography>
            </Grid>
            <Grid xs={12} className={"p-0"}>
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
                  md={3}
                  sm={6}
                  xs={12}
                  textAlign={"center"}
                  className={"p-2"}
                >
                  <Box
                    sx={{
                      display: {
                        md: "block",
                        xs: "none",
                      },
                    }}
                  >
                    <img
                      src="/images/step/step-1.webp"
                      alt="first step for comparing"
                      className={"w-50"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: {
                        md: "none",
                        xs: "block",
                      },
                    }}
                  >
                    <img
                      src="/images/step/step-1-mob.webp"
                      className={"w-25"}
                      alt="first step for comparing mobile"
                    />
                  </Box>
                  <Typography fontSize={14} my={3} lineHeight={1.75}>
                    The first step for comparing Grande Cosmetics and BabeLash,
                    is looking for important and trustworthy information. A team
                    of professionals and specialists check and analyze
                    authenticated sources and various customer reviews based on
                    factors that matter the most, leaving out the unimportant
                    and false data. Because we believe in perfection and
                    honesty.
                  </Typography>
                </Grid>
                <Grid
                  md={3}
                  sm={6}
                  xs={12}
                  textAlign={"center"}
                  className={"p-2"}
                >
                  <Box
                    sx={{
                      display: {
                        md: "block",
                        xs: "none",
                      },
                    }}
                  >
                    <img
                      src="/images/step/step-2.webp"
                      alt="second step for comparing mobile"
                      className={"w-50"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: {
                        md: "none",
                        xs: "block",
                      },
                    }}
                  >
                    <img
                      src="/images/step/step-2-mob.webp"
                      alt="second step for comparing mobile"
                      className={"w-25"}
                    />
                  </Box>
                  <Typography fontSize={14} my={3} lineHeight={1.75}>
                    The data for the {comparison?.compare1Id?.title} and{" "}
                    {comparison?.compare2Id?.title} comparison are gathered and
                    then filtered, unified, then lastly, verified. The
                    information given here is easy to comprehend so that you
                    won’t waste any of your precious time on complex and
                    incomprehensible information.
                  </Typography>
                </Grid>
                <Grid
                  md={3}
                  sm={6}
                  xs={12}
                  textAlign={"center"}
                  className={"p-2"}
                >
                  <Box
                    sx={{
                      display: {
                        md: "block",
                        xs: "none",
                      },
                    }}
                  >
                    <img
                      src="/images/step/step-3.webp"
                      alt="third step for comparing"
                      className={"w-50"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: {
                        md: "none",
                        xs: "block",
                      },
                    }}
                  >
                    <img
                      src="/images/step/step-3-mob.webp"
                      alt="third step for comparing mobile"
                      className={"w-25"}
                    />
                  </Box>
                  <Typography fontSize={14} my={3} lineHeight={1.75}>
                    The data is accumulated in different categories and have
                    been presented in a simple, but substantial chart. This
                    chart is much easier for the user to understand the data
                    given for the comparison of Grande Cosmetics and BabeLash.
                  </Typography>
                </Grid>
                <Grid
                  md={3}
                  sm={6}
                  xs={12}
                  textAlign={"center"}
                  className={"p-2"}
                >
                  <Box
                    sx={{
                      display: {
                        md: "block",
                        xs: "none",
                      },
                    }}
                  >
                    <img
                      src="/images/step/step-4.webp"
                      alt="fourth step for comparing"
                      className={"w-50"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: {
                        md: "none",
                        xs: "block",
                      },
                    }}
                  >
                    <img
                      src="/images/step/step-4-mob.webp"
                      alt="fourth step for comparing mobile"
                      className={"w-25"}
                    />
                  </Box>
                  <Typography fontSize={14} my={3} lineHeight={1.75}>
                    We are proud to say that we have an experienced and
                    professional team of reviewers that base their verdict for
                    the Grande Cosmetics and BabeLash comparison on technical
                    analysis. Overall, we show you the best products on the
                    market, and provide the pros and cons for each one along
                    with their ratings. But in the end, it’s up to you to decide
                    which suits you best based on the given information.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Table;
