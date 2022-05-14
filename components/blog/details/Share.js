import React from "react";
import { Link } from "@mui/material";
import { useRouter } from "next/router";

function Share(props) {
  const router = useRouter();
  return (
    <a
      href={props.url}
      className={"me-3 social"}
      color={"#999"}
      variant="contained"
    >
      <img alt="" src={props.icon} />
    </a>
  );
}

export default Share;
