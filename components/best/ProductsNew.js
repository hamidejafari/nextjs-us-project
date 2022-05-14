import React, { useState } from "react";
import { Grid } from "@mui/material";

// component
import BestItemNew from "./BestItemNew";
import reviewsCount from "../../utiles/reviewsCount";

function ProductsNew(props) {
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
        <BestItemNew
          key={index}
          proKey={index}
          image={bestcontent._id?.images[0]?.fileName}
          alt={bestcontent._id?.image?.alt}
          number={"#" + bestcontent.standing}
          productName={bestcontent?._id?.title?.replace(
            "$year$",
            new Date().getFullYear()
          )}
          star={bestcontent?._id?.star}
          reviewsNumber={reviewsCountCal(
            bestcontent?._id?.reviewsCount,
            index
          )}
          overallRating={bestcontent._id?.star * 2}
          websiteUrl={bestcontent?._id?.siteUrl}
          reviewsUrl={bestcontent?._id?.slug}
          description={bestcontent?._id?.descriptionBest?.replace(
            "$year$",
            new Date().getFullYear()
          )}
          pros={[]}
          cons={[]}
        />
      ))}
    </Grid>
  );
}

export default ProductsNew;
