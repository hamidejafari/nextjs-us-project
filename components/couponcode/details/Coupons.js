import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { useRouter } from "next/router";

// component
import CouponsBox from "./CouponsBox";

// styles
import sxStyles from "../../../styles/style";

function ProductInfo() {
  const router = useRouter();
  const coupons = [
    {
      occasion: "occasion",
      name: "Nourishmax",
      date: "27/12/2022",
      percentage: "50%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "../../images/review/1.webp",
      url: "",
    },
    {
      occasion: "occasion",
      name: "Nourishmax",
      date: "27/12/2022",
      percentage: "30%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "../../images/review/2.webp",
      url: "",
    },
    {
      occasion: "occasion",
      name: "Nourishmax",
      date: "27/12/2022",
      percentage: "90%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "../../images/review/3.webp",
      url: "",
    },
    {
      occasion: "occasion",
      name: "Nourishmax",
      date: "27/12/2022",
      percentage: "50%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "../../images/review/1.webp",
      url: "",
    },
    {
      occasion: "occasion",
      name: "Nourishmax",
      date: "27/12/2022",
      percentage: "30%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "../../images/review/2.webp",
      url: "",
    },
    {
      occasion: "occasion",
      name: "Nourishmax",
      date: "27/12/2022",
      percentage: "90%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "../../images/review/3.webp",
      url: "",
    },
  ];

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{
        xs: 1,
        sm: 2,
        md: 3,
      }}
      className={"w-100 m-0 product-info p-0"}
    >
      {coupons?.map((couponcontent, index) => (
        <CouponsBox
          key={index}
          occasion={couponcontent.occasion}
          name={couponcontent.name}
          date={couponcontent.date}
          percentage={couponcontent.percentage}
          description={couponcontent.description?.replace(
            "$year$",
            new Date().getFullYear()
          )}
          image={couponcontent.image}
          url={couponcontent.url}
        />
      ))}
    </Grid>
  );
}

export default ProductInfo;
