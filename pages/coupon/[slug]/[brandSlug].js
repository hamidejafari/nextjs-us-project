import * as React from "react";
import axios from "axios";

// components
import SiteLayout from "../../../layouts/SiteLayout";

// styles
import fetchLayoutData from "../../../utiles/fetchLayoutData";
import ProductCoupon from "../../../components/couponcode/details/ProductCoupon";
import HeaderInnProduct from "../../../components/couponcode/details/HeaderInnProduct";
import { Container } from "@mui/material";
import Custom404 from "../../404";

function ProductDetails(props) {
  const { menuCategories, setting, data } = props;
  let content;

  if (data?.product) {
    content = (
      <SiteLayout
        descriptionSeo={
          "Here we present the latest " +
          data?.product?.title +
          " Coupon Codes. Use some of the latest " +
          data?.product?.title +
          " coupons and get amazing discounts. A great opportunity to save cash!"
        }
        titleSeo={
          data?.product?.title +
          " Coupon Codes 2022 | Save money with unbelievable discounts"
        }
        menuCategories={menuCategories}
        setting={setting}
      >
        <div className={"w-100 coupons pt-0 pb-5"}>
          <HeaderInnProduct product={data?.product} />

          <Container>
            <ProductCoupon product={data?.product} />
          </Container>
        </div>
      </SiteLayout>
    );
  } else {
    content = <Custom404 />;
  }
  return content;
}

export async function getServerSideProps({ query }) {
  try {
    const layoutData = await fetchLayoutData();

    const menuCategories = layoutData?.categories;
    const setting = layoutData?.setting;

    const { data } = await axios.get(
      process.env.BACKEND_SERVER_URL +
        "/api/site/product-coupon/" +
        query.slug +
        "/" +
        query.brandSlug
    );

    return {
      props: {
        menuCategories,
        setting,
        data,
      },
    };
  } catch (err) {
    return { props: {} };
  }
}

export default ProductDetails;
