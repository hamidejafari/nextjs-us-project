import React, { useState } from "react";
import { Grid } from "@mui/material";

// component
import BestItemAb from "./BestItemAb";
import reviewsCount from "../../utiles/reviewsCount";

function ProductsAb(props) {
  const products = props?.products;
  // const [myNumber,setMyNumber] = useState(90);
  let myNumber = 90;

  const reviewsCountCal = (count, key) => {

    let kc = count;
    let c1 = 90;
    let c2 = 1.25;
    let c3 = 0.6;

    if (key % 2 === 1) {
      myNumber = myNumber * c2;
      kc = (3200 * myNumber) / 100;
    } else {
      myNumber = myNumber * c3;
      kc = (3200 * myNumber) / 100;
    }
    kc = Math.round(kc);

    if (key == 0) {
      kc = 3200;
    }

    return kc + count;
  };

  return (
    <Grid container spacing={1} className={"w-100 m-0"}>
      {products?.map((bestcontent, index) => (
        <BestItemAb
          key={index}
          proKey={index}
          image={bestcontent.product?.images[0]?.fileName}
          alt={bestcontent.product?.image?.alt}
          number={"#" + bestcontent.standing}
          productName={bestcontent?.product?.title?.replace(
            "$year$",
            new Date().getFullYear()
          )}
          brandName={bestcontent?.product?.brandId?.title?.replace(
            "$year$",
            new Date().getFullYear()
          )}

          star={bestcontent?.product?.star}
          reviewsNumber={reviewsCountCal(
            bestcontent?.product?.reviewsCount,
            index
          )}
          overallRating={bestcontent.product?.star * 2}
          websiteUrl={bestcontent?.product?.siteUrl}
          reviewsUrl={bestcontent?.product?.slug}
          description={bestcontent?.product?.descriptionBest?.replace(
            "$year$",
            new Date().getFullYear()
          )}
          pros={bestcontent?.product?.pros}
          cons={bestcontent?.product?.cons}
          faq={bestcontent?.product?.faq}
        />
      ))}
    </Grid>
  );
}

export default ProductsAb;
