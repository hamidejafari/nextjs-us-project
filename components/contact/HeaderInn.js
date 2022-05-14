import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

function HeaderInn() {
  return (
    <Box className={"headerMaincat"}>
      <Container>
        <Grid container spacing={1} className={"w-100 m-0"}>
          <Grid
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
              Get in touch with us
            </Typography>
            <Typography
              variant="h6"
              component="div"
              fontSize={15}
              className={"my-4"}
            >
              We would sincerely love to hear from you. So, please keep in touch
              with us if you have any questions, need our advice on different
              brands, or love to share your experience with us.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderInn;
