import React from "react";
import { Grid, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function RelatedCat(props) {
  const router = useRouter();
  return (
    <Grid item md={6} sm xs className={"p-2 mob"}>
      <Link href={"/" +  props.url}>
        <a>
          <Card className={"shadow-none"}>
            <CardMedia component="img" image={props.image} alt="green iguana" />
            <CardContent className={"px-0 py-2"}>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                className={"m-0"}
              >
                {props.name}
              </Typography>
            </CardContent>
          </Card>
        </a>
      </Link>
    </Grid>
  );
}

export default RelatedCat;
