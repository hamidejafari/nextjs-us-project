import * as React from "react";
import axios from "axios";

// components
import SiteLayout from "../../layouts/SiteLayout";
import Brands from "../../components/brand/list/Brands";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";

function Bramds(props) {
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
      name: "Brands",
    },
  ];

  return (
    <SiteLayout
      titleSeo="All Brands That Are Analyzed & Reviewed |Brandsreviews"
      menuCategories={props.menuCategories}
      setting={props.setting}
    >
      <div className={"w-100 maincat pt-0 pb-5"}>
        <Breadcrumb items={breadcrumbItems} />
        <Brands
          brands={props.brands}
          brandsSearch={props?.brandsSearch}
          query={props.query}
        />
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps({ req, query }) {
  const response = await axios.get(
    process.env.BACKEND_SERVER_URL + "/api/site/brands"
  );

  const brands = response.data;

  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  const obj = {
    ["#"]: [],
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
  };

  for (const o in obj) {
    obj[o] = brands.filter((brand) => {
      let isNotString = +brand.title[0] || false;
      if (isNotString === 0) {
        isNotString = 1;
      }
      if (!isNotString) {
        const str = "" + brand.title[0];
        return str.toLowerCase() === o;
      } else if (isNotString && o === "#") {
        return true;
      }
    });
  }

  if (brands)
    return {
      props: {
        query: query,
        brands: obj,
        brandsSearch: brands,
        menuCategories: menuCategories,
        setting: setting,
        hostname: "https://www." + req?.headers?.host,
      },
    };
}

export default Bramds;
