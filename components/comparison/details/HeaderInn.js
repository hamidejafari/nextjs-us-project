import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

function HeaderInn(props) {
  const { comparison } = props;
  return (
    <Box className={"headerCoupon pb-0"}>
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
              {comparison?.compare1Id?.title +
                " Vs " +
                comparison?.compare2Id?.title}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              fontSize={15}
              className={"my-2"}
            >
              {comparison?.onModel === "product" ? (
                "Here, you can compare different products based on detailed information gathered by our experts. After comparing pros and cons, ingredients, price, etc., you can make a good purchase decision."
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      comparison.descriptionShort?.replace(
                        "$year$",
                        new Date().getFullYear()
                      ) || "",
                  }}
                />
              )}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderInn;
