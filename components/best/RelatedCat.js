import React from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function RelatedCat(props) {
  const router = useRouter();
  return (
    <Grid item md={6} sm xs className={"p-2 mob"}>
      <Link href={"/" + props.url}>
        <a>
          <Card className={"shadow-none rounded-0"}>
            {/* <CardMedia
						component="img"
						image={props.image !== undefined ? process.env.NEXT_PUBLIC_SERVER_URL+'/'+props.image+'/big.webp' : '/notfound/notfound.webp'}
						alt="green iguana"
					/> */}

            <img
              className="img-fluid"
              width="100%"
              height="auto"
              src={
                props.image?.fileName
                  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/big/" +
                    props.image?.fileName
                  : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                    "/files/images/placeholder/300x300.webp"
              }
              alt={props.image?.alt}
            />

            <CardContent className={"px-0 py-2"}>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                className={"m-0"}
                fontSize={"0.9rem"}
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
