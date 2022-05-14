import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Breadcrumbs,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useRouter } from "next/router";
import Link from "next/link";
// styles

const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 10px 0 0;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  width: 8rem;
  height: auto;
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .Box-root {
    background-color: #8a56b5;
    border-radius: 5px;
    border: 1px solid #8a56b5;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s ease-in-out;
    border-radius: 50%;
    margin: auto;
    img {
      filter: brightness(0) invert(1);
      width: 2.25rem;
    }
  }

  &:hover {
    .Box-root {
      background-color: #fff !important;
      border: 1px solid #8a56b5;
      color: #000 !important;
      box-shadow: 0 2.5px 5px 0px rgba(0, 0, 0, 0.3);
      img {
        filter: brightness(0) saturate(100%) invert(42%) sepia(57%) saturate(640%) hue-rotate(230deg) brightness(83%) contrast(83%) !important;
      }
    }
  }

  &:focus {
    outline: 0px;
  }

  &.${tabUnstyledClasses.selected} {
    .Box-root {
      background-color: #fff !important;
      border: 1px solid #8a56b5;
      color: #000 !important;
      box-shadow: 0 2.5px 5px 0px rgba(0, 0, 0, 0.3);
      img {
        filter: brightness(0) saturate(100%) invert(42%) sepia(57%) saturate(640%) hue-rotate(230deg) brightness(83%) contrast(83%) !important;
      }
    }
    p {
      color: #000 !important;
      font-weight: bolder;
    }
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  padding: 0;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: transparent;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  overflow: scroll;
`;

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function ProductInfo(props) {
  const { cat1, cat2 } = props;
  const router = useRouter();
  return (
    <>
      <TabsUnstyled defaultValue={cat1?.data[0]._id}>
        <Box className={"tab-maincat"}>
          <Container>
            <Grid xs={12} className={"px-2"}>
              <TabsList>
                {cat1?.data.map((c1) => (
                  <Tab value={c1._id} key={c1._id}>
                    <Box>
                      <img
                        src={
                          process.env.NEXT_PUBLIC_IMAGE_SERVER +
                          "/files/images/small/" +
                          c1.icon.fileName
                        }
                        alt={c1.icon.alt}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      fontSize={13}
                      mt={"10px"}
                      mb={"0px"}
                      className={"textSecondary"}
                      textAlign={"center"}
                    >
                      {c1.title?.replace("$year$", new Date().getFullYear())}
                    </Typography>
                  </Tab>
                ))}
              </TabsList>
            </Grid>
          </Container>
        </Box>
        <Container>
          <Grid xs={12} className={"px-2 pb-3 pt-4"}>
            <div role="presentation" onClick={handleClick}>
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
                <Typography color="text.primary" fontSize={15}>
                  All Categories
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>
        </Container>
        {cat1?.data.map((c1) => (
          <TabPanel key={c1._id} value={c1._id}>
            <Container>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{
                  xs: 1,
                  sm: 2,
                  md: 3,
                }}
                className={"w-100 m-0 p-0"}
              >
                <Grid xs={12} className={"p-2"}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    fontSize={25}
                    fontWeight={"bolder"}
                    my={"5px"}
                    className={"textSecondary"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <DoubleArrowIcon className={"me-2"} fontSize="large" />
                    {c1.title?.replace("$year$", new Date().getFullYear())}
                  </Typography>
                </Grid>
                {cat2?.data
                  .filter((d) => d.parentId === c1._id)
                  .map((c2) => (
                    <Grid
                      key={c2._id}
                      lg={2}
                      md={3}
                      sm={4}
                      xs={6}
                      className={"textCenter p-2"}
                    >
                      <Link href={"/" + c2.slug}>
                        <a className={"pointer"}>
                          <Card className={"imgCard p-1"}>
                            <img
                              src={
                                c2?.icon?.fileName
                                  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                    "/files/images/big/" +
                                    c2.icon.fileName
                                  : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                    "/files/images/placeholder/300x300.webp"
                              }
                              alt={c2.icon?.alt?.trim()}
                            />
                            <Typography
                              variant="body2"
                              gutterBottom
                              fontSize={15}
                              my={"5px"}
                            >
                              {c2.title?.replace(
                                "$year$",
                                new Date().getFullYear()
                              )}
                            </Typography>
                          </Card>
                        </a>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </TabPanel>
        ))}
      </TabsUnstyled>
    </>
  );
}

export default ProductInfo;
