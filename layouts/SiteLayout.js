import * as React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import Head from "next/head";

import { getUserDetails } from "../redux/slices/userSlice";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { getBusinessDetails } from "../redux/slices/businessSlice";

function SiteLayout(props) {
  const [cookies] = useCookies(["user"]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user, shallowEqual);

  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );

  useEffect(() => {
    console.log(business?.user?._id);
    if (!business?.user?._id && cookies["business"]) {
      console.log(cookies["business"]);
      dispatch(getBusinessDetails(cookies));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!user?._id && cookies["user"]) {
      dispatch(getUserDetails(cookies));
    }
  }, [user, cookies, dispatch]);

  let titleSeo = props.titleSeo
    ? props.titleSeo?.replace("$year$", new Date().getFullYear())
    : props?.setting?.titleSeo?.replace("$year$", new Date().getFullYear());

  let descriptionSeo = props.descriptionSeo
    ? props.descriptionSeo?.replace("$year$", new Date().getFullYear())
    : props?.setting?.description?.replace("$year$", new Date().getFullYear());

  let image = props?.image
    ? props.image
    : process.env.NEXT_PUBLIC_IMAGE_SERVER + "/images/brandslogo.webp";

  return (
    <>
      <Head>
        <title>{" " + titleSeo + " "}</title>

        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZS73BX');`,
          }}
        ></script>

        {/*  eslint-disable-next-line @next/next/no-sync-scripts */}
        {/* <script src="https://www.googleoptimize.com/optimize.js?id=OPT-5ZZ79FN"></script> */}

        {props.noIndex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow" />
        )}

        <meta name="description" content={descriptionSeo} />

        {/* GRAPH SHARE TAGs */}
        <meta property="og:locale" content="en_usa" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta property="og:title" content={titleSeo} />
        <meta property="og:description" content={descriptionSeo} />
        <meta property="og:site_name" content="Brands Reviews" />
        <link
          rel="alternate"
          hrefLang="en"
          href={process.env.NEXT_PUBLIC_IMAGE_SERVER}
        />
      </Head>
      <Navbar user={user} categories={props.menuCategories} />
      {props.children}
      <Footer setting={props?.setting} />
    </>
  );
}

export default SiteLayout;
