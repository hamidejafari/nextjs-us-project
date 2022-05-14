import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

function HeaderRegister() {
  return (
    <Box className={"headerMaincat"}>
      <Container>
        <Grid container spacing={1} className={"w-100 m-0"}>
          <Grid
            item
            xl={8}
            lg={9}
            md={10}
            sm={11}
            xs={12}
            mx={"auto"}
            textAlign={"center"}
            className={"p-2"}
          >
            <Typography
              variant="h4"
              component="h1"
              className={"fw-bolder my-4"}
            >
              See what brandsreviews can do for you
            </Typography>
            <Typography
              variant="h6"
              component="div"
              fontSize={15}
              className={"my-4"}
            >
              Tell us a bit more about your business and well connect you with a
              brandsreviews expert for a free 30 min demo of our platform.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderRegister;
