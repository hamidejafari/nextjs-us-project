import * as React from "react";
import { styled } from "@mui/material/styles";
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBusinessDetails } from "../redux/slices/businessSlice";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

import { Box, CssBaseline } from "@mui/material";
import Head from "next/head";
import Sidebar from "../components/businessPanel/Sidebar";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function BusinesLayout(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["business"]);
  const router = useRouter();
  const dispatch = useDispatch();
  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );

  const { user: { _id } = {} } = business;

  useEffect(() => {
    if (!_id && cookies["business"]) {
      dispatch(getBusinessDetails(cookies));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserErrorStatus = useSelector(
    (state) => state.business?.error?.status,
    shallowEqual
  );

  useEffect(() => {
    if (
      fetchUserErrorStatus &&
      (fetchUserErrorStatus === 401 || fetchUserErrorStatus === 403)
    ) {
      console.log(fetchUserErrorStatus);
      removeCookie("business", {
        path: "/",
        sameSite: true,
      });

      dispatch({
        type: "BUSINESS_DETAILS_RESET",
      });

      router.push("/business");
    }
  }, [fetchUserErrorStatus, router, removeCookie, dispatch]);

  return (
    <>
      {!business?.user?.name && (
        <div className="loader-wrapper">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <Head>
        <title>
          {" "}
          {props.titleSeo
            ? props.titleSeo?.replace("$year$", new Date().getFullYear())
            : props?.setting?.titleSeo
            ? props?.setting?.titleSeo?.replace(
                "$year$",
                new Date().getFullYear()
              )
            : "Business panel"}{" "}
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
        
      </Head>
      <div className={"w-100 businessPanel pt-0 pb-5"}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Sidebar business={business} />
          <Main open>
            <DrawerHeader />
            {props.children}
          </Main>
        </Box>
      </div>
    </>
  );
}

export default BusinesLayout;
