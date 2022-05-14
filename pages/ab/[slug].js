import React, { useEffect } from "react";
import axios from "axios";

// components
import SiteLayout from "../../layouts/SiteLayout";
import LevelThreeCategorySpecial from "../../components/categoryPages/LevelThreeCategorySpecial";
import LevelTwoAndOneCategory from "../../components/categoryPages/LevelTwoAndOneCategory";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import Custom404 from "../404";

import { parseCookies } from "../../utiles/cookieHelper";

const CategoryDetail = (props) => {
  const {
    category,
    topChilds,
    catBrands,
    menuCategories,
    setting,
    catParent,
    notFound,
    hostname,
    extraProducts,
  } = props;

  let page;
  let titleSeo;
  let descriptionSeo;

  titleSeo = category?.titleSeo?.replace("$year$", new Date().getFullYear());

  descriptionSeo = category?.descriptionSeo?.replace(
    "$year$",
    new Date().getFullYear()
  );

  if (!descriptionSeo && category?.level == 3) {
    descriptionSeo =
      "Finding products that are adequate and reasonably priced is difficult. <br>Not to worry though, we are here to recommend the " +
      category?.title;
  }

  if (
    !titleSeo ||
    titleSeo == "New" ||
    titleSeo == "Test" ||
    titleSeo == "test"
  ) {
    if (category?.level == 1) {
      titleSeo =
        "Introducing " +
        category?.title +
        " Brands and Products | Brandsreviews";
    }
    if (category?.level == 2) {
      titleSeo =
        "Best " +
        category?.title +
        " Products in " +
        new Date().getFullYear() +
        " | " +
        category?.parentId?.title;
    }
    if (category?.level == 3) {
      titleSeo =
        category?.products?.length +
        " " +
        category?.title +
        " According to Reviews by Experts and Customers";
    }
  }

  if (category) {
    let image;

    if (category?.iconSeo?.fileName) {
      image =
        process.env.NEXT_PUBLIC_IMAGE_SERVER +
        "/files/images/medium/" +
        category?.iconSeo?.fileName;
    } else if (category?.icon?.fileName) {
      image =
        process.env.NEXT_PUBLIC_IMAGE_SERVER +
        "/files/images/medium/" +
        category?.icon?.fileName;
    }

    page = (
      <SiteLayout
        noIndex={true}
        titleSeo={titleSeo}
        menuCategories={menuCategories}
        setting={setting}
        descriptionSeo={descriptionSeo}
        image={image}
      >
        {category?.level == 3 && (
          <LevelThreeCategorySpecial
            hostname={hostname}
            topChilds={topChilds}
            category={category}
            catBrands={catBrands}
            catParent={catParent}
            extraProducts={extraProducts}
          />
        )}
        {category?.level == 2 && (
          <LevelTwoAndOneCategory
            hostname={hostname}
            category={category}
            catBrands={catBrands}
            topChilds={topChilds}
          />
        )}
        {category?.level == 1 && (
          <LevelTwoAndOneCategory
            hostname={hostname}
            category={category}
            catBrands={category.brands}
            topChilds={topChilds}
          />
        )}
      </SiteLayout>
    );
  } else {
    page = <Custom404 />;
  }

  return page;
};

export async function getServerSideProps({ req, res, query }) {
  if (query.slug !== "best-butt-enhancers") {
    return {
      props: { error: 404 },
    };
  }

  const data = parseCookies(req);

  let menuCategories;
  let setting;
  let catParent;
  let extraProducts;
  let notFound = false;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  let category;
  let topChilds;
  let catBrands;
  try {
    const response = await axios.get(
      process.env.BACKEND_SERVER_URL +
        "/api/site/category/" +
        query.slug +
        "?ab=true"
    );

    if (response.data?.category == null) {
      notFound = true;
      res.statusCode = 404;
      return {
        props: {
          query,
          notFound,
        },
      };
    }

    category = {
      ...response.data.category,
      products: [...response.data.category.products],
    };
    topChilds = response.data?.topChilds;
    catBrands = response.data?.catBrands || [];
    catParent = response.data?.catParent;
    extraProducts = response.data?.extraProducts;

    category.products[0]._id.descriptionBest =
      "The CurvyPure Butt Enhancement Cream is a reliable choice. <br>According to the feedback received from the consumers, after regularly using the product, their hips have started to get wider, curvier, and plumper and this leads to a better-looking body shape. <br>Also, CurvyPure has one of the most comprehensive ingredients, compositions. <br>Apply a small amount of the cream on your buttocks twice a day, once in the morning after your bath and once before bedtime. <br>For full absorption, massage your CurvyPure cream gently on your buttocks.The process usually starts with tightening the butt, and then the growth phase begins. <br>A rounder, firmer and shapelier butt is what you get after using this product. <br>Another point is that the skin absorbs the lotion quickly and no stains are left on your clothes.";
    category.products[1]._id.descriptionBest =
      "The Gluteboost Butt Enhancement Cream is the ultimate solution for women trying to get thicker, rounder and more sensual behinds. <br> Thanks to a technical blend of all-natural ingredients engineered to help you get a bigger butt, the Gluteboost Butt Enhancement Cream goes beyond lifting or padded panties. <br>Get yours today to get the rounder, firmer and more visible rear you've always wanted. <br>Apply the cream to your butt and just relax!";
    category.products[2]._id.descriptionBest =
      "The “Honeydew Products” Butt Enhancement Cream is known for the botanical ingredients it contains such as avocado oil and cocoa butter. <br>These ingredients increase the levels of collagen to offer a bikini perfect butt. <br>At the same time, the presence of coconut oil, Shea butter, and other elements provide softness and smoothness to your butt cheeks. <br>This butt lifter cream stimulates fat cells and encourages the production of collagen, so that your body plumps up in a non-harmful way. <br>";
    category.products[3]._id.descriptionBest =
      "Enhance your butt the fast, natural way! A Booty Magic Butt Enhancement Cream bottle contains a two month supply of the product with a unique mixture of effective butt enlargement ingredients. <br>You will notice the results between 1-2 months, with maximum, permanent results after 6 months of use. <br>no risky surgeries, or butt pads needed. <br>The important thing is that The Booty Magic Butt Enhancement Cream targets only the butt, hips and thighs.";
    category.products[4]._id.descriptionBest =
      "The potent active ingredients in the IsoSensuals curve cream formula deliver optimum benefits quickly and safely. <br>You can rest assured that the formula can help you get your desired results, and will just target your hips, thighs, and buttocks with no gain weight as a result. <br>You should use the product consistently to receive the greatest and longest-lasting results. <br>You can see the first signs of improvement in less than a month. <br>It is better to use them for at least six months to ensure that the adjustments are consistent. <br>You will get the best results if you practice some strength training with weights and eat a balanced diet.";
    category.products[5]._id.descriptionBest =
      "The Major Curves Butt Enhancement Cream is the best choice when it comes to butt enhancement. <br>Major Curves is a product intended for ladies who want to naturally achieve a more hourglass form. <br>The Major Curves formula works by helping your body retain extra fat around your buttocks, hips, and thighs through the use of natural estrogen-stimulating substances. <br>Estrogen is the hormone that promotes fat accumulation in the buttocks and hips, as well as the hormone that causes curve formation throughout puberty. <br>";
    category.products[6]._id.descriptionBest =
      "If you have ever dreamed of having a bigger butt, you are in the right place. <br>The Booty Perfect Butt Enhancement Cream is as effective and less dangerous than surgeries and butt injections. <br>This product is FDA certified and rarely any negative or side effects have been reported after its use. <br>If you are looking for a product that guarantees great results, has a 100 percent Money Back Guarantee, is affordable, has great customer service and is safe and natural then Booty Perfect is your best bet.";

    return {
      props: {
        query,
        category,
        topChilds,
        catBrands,
        menuCategories,
        setting,
        catParent,
        extraProducts,
        notFound,
        hostname: "https://www." + req?.headers?.host,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
}

export default CategoryDetail;
