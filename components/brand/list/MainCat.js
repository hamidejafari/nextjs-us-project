import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";

// styled
const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  width: 9rem;
  height: 8rem;
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .Box-root {
    background-color: #8a56b5;
    border-radius: 5px;
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
    }
  }

  &:hover {
    .Box-root {
      background-color: #fff;
      color: #8a56b5;
      img {
        filter: brightness(0) saturate(100%) !important;
      }
    }
  }

  &:focus {
    outline: 0px solid #999;
  }

  &.${tabUnstyledClasses.selected} {
    .Box-root {
      background-color: #fff;
      color: #8a56b5;
      img {
        filter: brightness(0) saturate(100%) !important;
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

function MainCat(props) {
  return (
    <Tab>
      <Box>
        <img alt="cat" src={props.icon} width={40} height={40} />
      </Box>
      <Typography
        gutterBottom
        fontSize={13}
        mt={"10px"}
        mb={"0px"}
        className={"textSecondary"}
        textAlign={"center"}
      >
        {props.title?.replace("$year$", new Date().getFullYear())}
      </Typography>
    </Tab>
  );
}

export default MainCat;
