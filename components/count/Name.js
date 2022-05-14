import React from "react";
import { Grid, Typography } from "@mui/material";

// styles
import sxStyles from "../../styles/style";

function Name(props) {
  return (
    <Grid md={2} item className={"d-flex countGrid"}>
      <Typography variant="body2" gutterBottom sx={sxStyles["nameCount"]}>
        {props.name}
      </Typography>
    </Grid>
  );
}

export default Name;
