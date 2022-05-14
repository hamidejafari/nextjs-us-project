import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

function HeaderConfirm(props) {
  return (
    <Box className={"headerMaincat"}>
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
            className={"p-2"}
          >
            <Typography
              variant="h4"
              component="h1"
              className={"fw-bolder my-4"}
            >
              Activate your account
            </Typography>
            <Typography
              variant="h6"
              component="div"
              fontSize={15}
              className={"my-4"}
            >
              Enter the confirm code we sent to {props.email}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderConfirm;
