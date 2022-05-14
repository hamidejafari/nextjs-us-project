import React from "react";
import { Grid, Box, Card, Typography, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Categories(props) {
  const router = useRouter();
  return (
    <Grid className={"textCenter"} sx={{ width: { sm: "14.285%" } }}>
        <Link href={"/" + props.url}>
          <a>
            <Box sx={{ cursor: "pointer" }}>
              <Card
                className={"figure m-auto"}
                sx={{
                  p: "15px",
                  width: "max-content",
                  display: "flex",
                  borderRadius: "50%",
                }}
              >
                <div className={"inn"}>
                  <div className={"inn"}>
                    <img src={props.image} alt={props.alt} />
                  </div>
                </div>
              </Card>
              <Typography
                className={"textSecondary"}
                variant="body2"
                noWrap
                fontSize={15}
                sx={{
                  mb: "0",
                  mt: "5px",
                  whiteSpace: "revert",
                }}
              >
                {props.title?.replace("$year$", new Date().getFullYear())}
              </Typography>
            </Box>
          </a>
        </Link>
    </Grid>
  );
}

export default Categories;
