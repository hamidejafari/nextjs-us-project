import React from "react";
import { Fab } from "@mui/material";
function Links(props) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={props.url} target="_blank" rel="nofollow">
      <Fab
        className={"mx-1"}
        color="secondary"
        size="small"
        variant="contained"
      >
        <img src={props.icon} alt="" width="50%" height="50%" />
      </Fab>
    </a>
  );
}

export default Links;
