import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

function HeaderInn(props) {
  return (
    <Box className={"headerCoupon"}>
      <Container>
        <Grid container spacing={1} className={"w-100 m-0"}>
          <Grid item
            xl={8}
            lg={9}
            md={10}
            sm={11}
            xs={12}
            mx={"auto"}
            textAlign={"center"}
            className={"px-2"}
          >
            <Typography
              variant="h4"
              component="h1"
              className={"fw-bolder my-2"}
            >
              {props.blog?.h1
                ? props.blog?.h1?.replace("$year$", new Date().getFullYear())
                : props.blog?.title?.replace(
                    "$year$",
                    new Date().getFullYear()
                  )}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              fontSize={15}
              className={"my-2"}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: props.blog?.shortDescription?.replace(
                    "$year$",
                    new Date().getFullYear()
                  ),
                }}
                className="text-justify"
              ></div>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderInn;
