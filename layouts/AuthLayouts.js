import * as React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserDetails } from "../redux/slices/userSlice";
import { useCookies } from "react-cookie";
import Head from "next/head";

function AuthLayouts(props) {
  const [cookies] = useCookies(["user"]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user, shallowEqual);
  useEffect(() => {
    if (!user?._id) {
      dispatch(getUserDetails(cookies));
    }
  }, [user, cookies, dispatch]);

  return (
    <>
      <Head>
        <title>
          {" "}
          {props.titleSeo
            ? props.titleSeo?.replace("$year$", new Date().getFullYear())
            : props?.setting?.titleSeo?.replace(
              "$year$",
              new Date().getFullYear()
            )}{" "}
        </title>
        <meta
          name="description"
          content={
            props.descriptionSeo
              ? props.descriptionSeo?.replace(
                "$year$",
                new Date().getFullYear()
              )
              : props?.setting?.descriptionSeo?.replace(
                "$year$",
                new Date().getFullYear()
              )
          }
        />
        <link rel="alternate" hrefLang="en" href="http://109.125.147.114/" />
      </Head>
      <Navbar categories={props.menuCategories} />
      {props.children}
      <Footer setting={props?.setting} />
    </>
  );
}

export default AuthLayouts;
