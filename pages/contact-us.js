import * as React from "react";

// components
import SiteLayout from "../layouts/SiteLayout";
import HeaderInn from "../components/contact/HeaderInn";
import Contact from "../components/contact/Contact";
import fetchLayoutData from "../utiles/fetchLayoutData";
import Breadcrumb from "../utiles/RichSnippets/Breadcrumb";

function ContactUs({ menuCategories, setting ,hostname}) {
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: hostname,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
    },
  ];

  return (
    <SiteLayout menuCategories={menuCategories} setting={setting}>
      <div className={"w-100 maincat contact pb-5"}>
      <Breadcrumb items={breadcrumbItems} />
        <HeaderInn />
        <Contact setting={setting} />
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps({ req,query }) {
  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  return {
    props: {
      menuCategories,
      setting,
      hostname: "https://www." + req?.headers?.host
    },
  };
}

export default ContactUs;
