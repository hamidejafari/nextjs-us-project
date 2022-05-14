import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import Scroll from "../components/Scroll";
// Scss
import "../scss/app.scss";
import { useRouter } from "next/router";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/utils";
import { Provider } from "react-redux";
import store from "../redux/store";

import "react-multi-carousel/lib/styles.css";

ClassNameGenerator.configure((componentName) =>
  componentName.replace("Mui", "")
);

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp(props) {
  const { Component, pageProps } = props;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    // document.querySelector("body").style.overflow = "unset";
  }, []);

  const site = "https://www.brandsreviews.com";
  const canonicalURL = site + useRouter().asPath.split("?")[0];

  return (
    <>
      {typeof window === "undefined" && (
        <Head>
          <link rel="canonical" href={canonicalURL} />
          <meta property="og:url" content={canonicalURL} />
        </Head>
      )}
      <Provider store={store}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZS73BX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>

        <Scroll showBelow={550} />
        {/* {loading && (
          <div className="loader-wrapper">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )} */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
