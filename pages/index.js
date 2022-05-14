import * as React from "react";
 
// components
import SiteLayout from "../layouts/SiteLayout";
import Coupons from "./../components/Coupons";
import Header from "./../components/Header";
import Reviews from "./../components/Reviews";
import Count from "./../components/Count";
import Vs from "./../components/Vs";
import axios from "axios";
import fetchLayoutData from "../utiles/fetchLayoutData";
import RatingHomePage from "../components/RatingHomePage";


function Home({
  mainCategories,
  bestCategories,
  comparisons,
  reviews,
  coupons,
  menuCategories,
  setting,
}) {

  return (
    <SiteLayout menuCategories={menuCategories} setting={setting}>
      <Organization />
      <div className={"w-100"}>
        <Header setting={setting} categories={mainCategories} />
        <RatingHomePage bests={bestCategories} />
        <Vs comparisons={comparisons} />
        <Reviews reviews={reviews} />

        {coupons.length > 0 && <Coupons coupons={coupons} />}

        <Count setting={setting} />
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps({ query }) {
  let mainCategories;
  let bestCategories;
  let comparisons;
  let reviews;
  let coupons;
  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();

  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  const response = await axios.get(
    process.env.BACKEND_SERVER_URL + "/api/site/first-page"
  );

  mainCategories = response.data.mainCategories;
  bestCategories = response.data.bestCategories;
  comparisons = response.data.comparisons;
  reviews = response.data.reviews;
  coupons = response.data.coupons;

  return {
    props: {
      query,
      mainCategories,
      bestCategories,
      comparisons,
      reviews,
      coupons,
      menuCategories,
      setting,
    },
  };
}

export default Home;
