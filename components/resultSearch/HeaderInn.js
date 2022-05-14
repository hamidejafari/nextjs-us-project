import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

function HeaderInn({ totalLength, query }) {
  return (
    <Box className={"headerCoupon"}>
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
            className={"px-2"}
          >
            <Typography
              variant="h4"
              component="h1"
              className={"fw-bolder my-2"}
            >
              &quot;{query.title}&quot;
            </Typography>
            <Typography
              variant="h5"
              component="div"
              fontSize={20}
              className={"my-2"}
            >
              <span className={"fw-bolder"}>{totalLength}</span> results have
              been found for this keyword
              {/* Sorry, we couldn't find a match for <span>Search title</span>. 
							<br/>
							We will inform our team to add this keyword in our database. */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderInn;
