import React from "react";
import { Grid, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function Category(props) {
  const router = useRouter();
  return (
    <Grid item md={6} sm xs className={"p-2 mob"}>
      <Link href={props.url ? props.url : "/"}>
        <a>
          <Card className={"shadow-none"}>
            <CardMedia component="img" image={props.image} alt="green iguana" />
          </Card>
          <CardContent className={"px-0 py-2"}>
            <Typography
              gutterBottom
              variant="body1"
              color={"#000"}
              component="div"
              className={"m-0"}
              fontSize={13}
            >
              {props.name}
            </Typography>
          </CardContent>
        </a>
      </Link>
    </Grid>
  );
}

export default Category;
