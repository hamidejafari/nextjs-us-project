import React from "react";
import { Card, Grid, Typography, Divider } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Link from "next/link";

function Pross(props) {
  return (
    <Grid xl={3} lg={3} md={4} sm={6} xs={12} className={"p-2"}>
      <Card className={"p-3 rounded-0 shadow-none border"}>
        <p>{props.status}</p>

        <figure>
          <div className={"figure"}>
            <img src={props.img} alt={props.title} />
          </div>
        </figure>

        <Typography textAlign={"center"}>{props.title}</Typography>
        <br />
        <Divider />
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
          className={"w-100 m-0"}
        >
          <Grid
            xl={6}
            className={"px-1 pt-3"}
            textAlign={"center"}
            margin={"auto"}
          >
            <Link href={"/business/panel/product/" + props.id}>
              <a>
                <Typography
                  color={"green"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <BorderColorIcon fontSize="smal" className={"me-2"} />
                  Edit
                </Typography>
              </a>
            </Link>
          </Grid>
          {/* <Grid xl={6} className={"px-1 pt-3"} textAlign={"center"}>
            <Link href="/">
              <a>
                <Typography
                  color={"error"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <DeleteOutlineIcon fontSize="smal" className={"me-2"} />
                  Delete
                </Typography>
              </a>
            </Link>
          </Grid> */}
        </Grid>
      </Card>
    </Grid>
  );
}

export default Pross;
