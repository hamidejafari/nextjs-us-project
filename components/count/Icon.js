import React from "react";
import { Grid } from "@mui/material";

// styles
import sxStyles from "../../styles/style";

function Icon(props) {
  return (
    <Grid md={2} className={"d-flex countGrid"}>
      <div className={"icon"}>
        <img src={props.icon} alt={props.name} width="75%" height="75%" />
      </div>
    </Grid>
  );
}

export default Icon;
