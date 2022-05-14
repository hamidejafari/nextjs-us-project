import * as React from "react";
import axios from "axios";

// components
import SiteLayout from "../../../layouts/SiteLayout";

// styles
import fetchLayoutData from "../../../utiles/fetchLayoutData";
import BrandCoupon from "../../../components/couponcode/details/BrandCoupon";
import HeaderInnBrand from "../../../components/couponcode/details/HeaderInnBrand";
import Custom404 from "../../404";

function ProductDetails(props) {
  const { menuCategories, setting, data } = props;

  let content;
  if (data?.brand) {
    content = (
      <SiteLayout
        descriptionSeo={
          "Here we present the latest " +
          data?.brand?.title +
          " Coupon Codes. Use some of the latest " +
          data?.brand?.title +
          " coupons and get amazing discounts. A great opportunity to save cash!"
        }
        titleSeo={
          data?.brand?.title +
          " Coupon Codes 2022 | Save money with unbelievable discounts"
        }
        menuCategories={menuCategories}
        setting={setting}
      >
        <div className={"w-100 coupons pt-0 pb-5"}>
          <HeaderInnBrand content={data?.brand} />
          <BrandCoupon content={data} />
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

    try {
      const { data } = await axios.get(
        process.env.BACKEND_SERVER_URL + "/api/site/coupon-brand/" + query.slug
      );

      return {
        props: {
          menuCategories,
          setting,
          data,
        },
      };
    } catch (err) {
      console.log(err);

      return {
        props: {
          menuCategories,
          setting,
        },
      };
    }
  } catch (err) {
    return { props: {} };
  }
}

export default ProductDetails;
