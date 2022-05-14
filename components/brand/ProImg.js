import React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Grid, Typography, Button, Hidden } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// components

// styles
import sxStyles from "../../styles/style";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#ededed",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: ${blue[500]};
  width: 100%;
  padding: 0;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }

  &:hover {
    background-color: transparent;
  }

  &:focus {
    color: #fff;
    border-radius: 0px;
    outline: 0px solid ${blue[200]};
    outline-offset: 0;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: transparent;
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
	width: 100%;
	font-size: 0.875rem;
	background-color: ${blue[500]};
	padding: 1rem 0 0.5rem;
	.figure {
		height: 16rem;
		width: 
		background-color: ${blue[500]};
		.figure-inn {
			display: flex;
			width: 100%;
			height: 100%;
			overflow: hidden;
			align-items: center;
			justify-content: center;
			background-color: transparent;
			img {
				display: inline-block;
				width: auto;
				height: auto;
				max-height: 100%;
				max-width: 100%;
				vertical-align: middle;
				transition: 0.4s ease-in-out;
			}
		}
	}
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 0;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function ProImg(props) {
  return (
    <>
      <TabsUnstyled defaultValue={0} className={"row mb-4 tabsunstyled pt-4"}>
        <Hidden mdDown={true}>
          <Grid item xs={12} className={"px-4"} sx={sxStyles["noneMobile"]}>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a
              target="_blank"
              rel="nofollow"
              href={props.brand?.siteUrl}
              className={
                "btnVisit w-100 p-2 d-flex align-items-center justify-content-center"
              }
            >
              <Typography variant="h6" component="div" className={"fw-bolder"}>
                visit website
              </Typography>
            </a>
          </Grid>
        </Hidden>
        <Hidden mdUp={true}>
          <Grid
            item
            xs={12}
            className={"px-4 pb-4"}
            sx={sxStyles["noneDesktop"]}
          >
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a
              target="_blank"
              rel="nofollow"
              href={props.brand?.siteUrl}
              className={"btnVisit w-100 p-2 d-flex justify-content-center"}
            >
              <Typography
                variant="h6"
                component="div"
                className={"fw-bolder"}
                textAlign="center"
              >
                visit website
              </Typography>
            </a>
          </Grid>
        </Hidden>

        <TabPanel value={0} className={"col12 px-4 pt-2 pb-4"}>
          <img
            className="img-fluid"
            width="100%"
            height="auto"
            src={
              props.brand?.imageProduct?.fileName
                ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/main/" +
                  props.brand?.imageProduct?.fileName
                : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/placeholder/product-sample.webp"
            }
            alt={props.brand?.imageProduct?.alt}
          />
        </TabPanel>
      </TabsUnstyled>
    </>
  );
}

export default ProImg;
