import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// components

function Multi(props) {
  const router = useRouter();
  return (
    <div className={"p-1"}>
      <Link href={"/" + props.url}>
        <a className={"pointer"}>
          <Card sx={{ p: "5px" }} className={"imgCard"}>
            <img
              src={
                props.image
                  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/medium/" +
                    props.image
                  : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/placeholder/300x396.webp"
              }
              alt={props.alt}
              width="100%"
              height="100%"
            />

            <Typography
              variant="body2"
              gutterBottom
              fontWeight={"light"}
              fontSize={13}
              my={"5px"}
              textAlign={"center"}
              sx={{
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.title?.replace("$year$", new Date().getFullYear())}
            </Typography>
          </Card>
        </a>
      </Link>
    </div>
  );
}

export default Multi;
