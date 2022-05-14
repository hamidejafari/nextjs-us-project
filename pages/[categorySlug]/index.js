import * as React from "react";
import axios from "axios";

// components
import SiteLayout from "../../layouts/SiteLayout";
import LevelThreeCategory from "../../components/categoryPages/LevelThreeCategory";
import LevelTwoAndOneCategory from "../../components/categoryPages/LevelTwoAndOneCategory";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import Custom404 from "../404";
import HeaderInn from "../../components/comparison/details/HeaderInn";
import Table from "../../components/comparison/details/Table";

import { parseCookies } from "../../utiles/cookieHelper";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
function CategoryDetail(props) {
  const {
    category,
    topChilds,
    catBrands,
    menuCategories,
    setting,
    isVs,
    comparison,
    related,
    catParent,
    notFound,
    hostname,
    error,
    extraProducts,
  } = props;
  let page;
  let titleSeo;
  let descriptionSeo;

  if (isVs && comparison) {
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: props?.hostname,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Comparisons",
        item: props?.hostname + "/comparison/list",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: comparison?.titleSeo,
      },
    ];

    let titleSeo;
    if (comparison?.onModel === "product") {
      titleSeo =
        comparison?.compare1Id?.title + " vs " + comparison?.compare2Id?.title;
    } else if (comparison?.onModel === "brand") {
      titleSeo =
        comparison?.compare1Id?.title +
        " vs " +
        comparison?.compare2Id?.title +
        " [Pros/Cons]";
    }
    descriptionSeo = comparison?.descriptionSeo;
    if (!descriptionSeo) {
      descriptionSeo =
        "Let's compare " +
        comparison?.compare1Id?.title +
        " and " +
        comparison?.compare2Id?.title +
        " to help you decide which one is better than the other.";
    }
    page = (
      <React.Fragment>
        {error === 404 ? (
          <Custom404 />
        ) : (
          <SiteLayout
            titleSeo={titleSeo}
            descriptionSeo={descriptionSeo}
            menuCategories={menuCategories}
            setting={setting}
          >
            <div
              className={"w-100 coupons allVs pt-0 pb-0"}
              sx={{ bgcolor: "#999" }}
            >
              <Breadcrumb items={breadcrumbItems} />
              <HeaderInn comparison={comparison} />
              <Table related={related} comparison={comparison} />
            </div>
          </SiteLayout>
        )}
      </React.Fragment>
    );
  } else if (category) {
    titleSeo = category?.titleSeo?.replace("$year$", new Date().getFullYear());

    descriptionSeo = category?.descriptionSeo?.replace(
      "$year$",
      new Date().getFullYear()
    );

    if (!descriptionSeo && category?.level == 3) {
      descriptionSeo =
        "Finding products that are adequate and reasonably priced is difficult. Not to worry though, we are here to recommend the " +
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

    if (!notFound) {
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
          noIndex={category.noIndex}
          titleSeo={titleSeo}
          menuCategories={menuCategories}
          setting={setting}
          descriptionSeo={descriptionSeo}
          image={image}
        >
          {category.level == 3 && (
            <LevelThreeCategory
              hostname={hostname}
              topChilds={topChilds}
              category={category}
              catBrands={catBrands}
              catParent={catParent}
              extraProducts={extraProducts}
            />
          )}
          {category.level == 2 && (
            <LevelTwoAndOneCategory
              hostname={hostname}
              category={category}
              catBrands={catBrands}
              topChilds={topChilds}
            />
          )}
          {category.level == 1 && (
            <LevelTwoAndOneCategory
              hostname={hostname}
              category={category}
              catBrands={category.brands}
              topChilds={topChilds}
            />
          )}
        </SiteLayout>
      );
    }
  } else {
    page = <Custom404 />;
  }

  return page;
}

export async function getServerSideProps({ req, res, query }) {
  const data = parseCookies(req);

  let menuCategories;
  let setting;
  let catParent;
  let extraProducts;
  let notFound = false;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;
  if (
    query.categorySlug?.includes("-vs-") ||
    query.categorySlug?.includes("-VS-") ||
    query.categorySlug?.includes("-Vs-")
  ) {
    try {
      const { data } = await axios.get(
        process.env.BACKEND_SERVER_URL +
          "/api/site/comparisons/" +
          query.categorySlug
      );

      data?.comparison?.categoryId?.attributes?.sort(function (a, b) {
        return a.position - b.position;
      });

      if (data.redirect) {
        return {
          redirect: {
            permanent: false,
            destination: "/" + data.redirect.newAddress,
          },
          props: {},
        };
      } else {
        return {
          props: {
            menuCategories,
            isVs: true,
            setting,
            comparison: data?.comparison,
            related: data?.related,
            hostname: "https://www." + req?.headers?.host,
          },
        };
      }
    } catch (err) {
      return {
        props: { isVs: true, error: 404 },
      };
    }
  } else {
    try {
      const email = data?.user ? JSON.parse(data?.user)?.email : null;
      let category;
      let topChilds;
      let catBrands;
      const response = await axios.get(
        process.env.BACKEND_SERVER_URL +
          "/api/site/category/" +
          query.categorySlug
      );

      if (response.data.redirect) {
        return {
          redirect: {
            permanent: false,
            destination: "/" + response.data.redirect.newAddress,
          },
          props: {},
        };
      }

      if (
        (!response.data?.category && response.data.redirect == null) ||
        (response.data?.category?.published == false &&
          email !== "fat@gmail.com")
      ) {
        notFound = true;
        res.statusCode = 404;
        return {
          props: {
            query,
            notFound,
          },
        };
      }

      category = response.data.category;
      topChilds = response.data?.topChilds;
      catBrands = response.data?.catBrands || [];
      catParent = response.data?.catParent;
      extraProducts = response.data?.extraProducts;

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
      return {
        props: {},
      };
    }
  }
}

export default CategoryDetail;
