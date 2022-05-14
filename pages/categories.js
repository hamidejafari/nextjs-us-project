import * as React from "react";
import axios from "axios";
// components
import SiteLayout from "../layouts/SiteLayout";
import HeaderInn from "../components/maincat/HeaderInn";
import SearchResult from "../components/maincat/SearchResult";
import Categorys from "../components/maincat/Categorys";
import fetchLayoutData from "../utiles/fetchLayoutData";
import Breadcrumb from "../utiles/RichSnippets/Breadcrumb";

function MainCat(props) {
  const { menuCategories, setting, cat1, cat2, query, categories} = props;

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
      name: "All Categories",
    }
  ];

  return (
    <SiteLayout menuCategories={menuCategories} setting={setting}>
      <div className={"w-100 maincat pt-0 pb-5"}>
      <Breadcrumb items={breadcrumbItems} />

        <HeaderInn query={query} />
        { query?.search ?<SearchResult categories={categories}   query={query}  /> : <Categorys cat1={cat1} cat2={cat2} />  }
     
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps({ req,query }) {
  const layoutData = await fetchLayoutData();
  const menuCategories = layoutData?.categories;
  const setting = layoutData?.setting;
  let categories = [];
  let cat1 = [];
  let cat2 = [];

  if(query?.search){
    const response = await axios.get(
      process.env.BACKEND_SERVER_URL + "/api/site/maincat/search?search="+query.search
    );
    categories = response.data.categories;
  }else{
    const response = await axios.get(
      process.env.BACKEND_SERVER_URL + "/api/site/maincat"
    );
    const maincat = response.data;
    cat1 = maincat.filter((ma) => {
      return ma._id === 1;
    })[0];
    cat2 = maincat.filter((ma) => {
      return ma._id === 2;
    })[0];  
  }

  return {
    props: {
      cat1,
      cat2,
      menuCategories,
      setting,
      query,
      categories,
      hostname: "https://www." + req?.headers?.host

    },
  };
}

export default MainCat;