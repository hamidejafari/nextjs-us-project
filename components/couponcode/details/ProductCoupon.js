import React, { useState } from "react";
import { Grid, Typography, Card, Modal, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";

// styles
import sxStyles from "../../../styles/style";
import { shallowEqual, useSelector } from "react-redux";
import axios from "axios";
import { Box } from "@mui/system";
import { useCookies } from "react-cookie";

import { getUserDetails } from "../../../redux/slices/userSlice";
function ProductCoupon(props) {
  const { product } = props;
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);

  const userId = useSelector((state) => state.user?.user._id, shallowEqual);

  const copyCouponCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    Swal.fire("copied to clipboard");
  };

  const handleLoginWithEmail = async () => {
    const { value: email } = await Swal.fire({
      color: "#8a56b5",
      backdrop: `
      rgba(0,0,123,0.4)
      left top
      no-repeat
    `,
      title: "Please enter your email",
      input: "email",
      inputAttributes: {
        autocapitalize: "off",
        width: "100px",
      },
      confirmButtonText: "Confirm",
      showLoaderOnConfirm: true,
    });

    try {
      setLoading(true);
      await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/login/send-code",
        { email }
      );
      setLoading(false);
      handleLoginCode(email);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleLoginCode = async (email) => {
    const { value: code } = await Swal.fire({
      color: "#8a56b5",
      backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `,
      title: "Please enter the code we have sent to you by email",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
        width: "100px",
      },
      confirmButtonText: "Confirm",
      showLoaderOnConfirm: true,
    });

    try {
      setLoading(true);
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/login/confirm-code",
        { email, code }
      );
      setLoading(false);
      setCookie(
        "user",
        JSON.stringify({
          token: data.token,
          email: email,
        }),
        {
          path: "/",
          maxAge: 31560000,
          sameSite: true,
        }
      );
      getUserDetails(cookies);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        title: "Code is not correct",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Send Again",
        color: "#8a56b5",
        backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `,
      }).then((result) => {
        if (result.isConfirmed) {
          handleLoginCode(email);
        }
      });
    }
  };

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{
        xs: 1,
        sm: 2,
        md: 3,
      }}
      className={"w-100 m-0 product-info p-0"}
    >
      <Modal
        keepMounted
        open={loading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
          }}
        >
          <CircularProgress style={{ color: "#fff" }} />
        </Box>
      </Modal>
      {product.coupons?.map((coupon) => (
        <Grid
          key={coupon._id}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          className={"px-2 py-3 align-self-center"}
        >
          <Card className={"couponCard"}>
            <Grid
              container
              className={"w-100 m-0"}
              rowSpacing={1}
              columnSpacing={{
                xs: 1,
                sm: 2,
                md: 3,
              }}
            >
              <Grid xs={2} className={"p-3 bgSecondary occasion"}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={sxStyles["couponOccasion"]}
                >
                  {coupon.occasion}
                </Typography>
              </Grid>
              <Grid xs={7} className={"py-2 px-4 bgGray content"}>
                <Grid
                  container
                  className={"w-100 m-0"}
                  rowSpacing={1}
                  columnSpacing={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                  }}
                >
                  <Grid xs={12} className={"px-0 py-0"}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={sxStyles["couponName"]}
                    >
                      {coupon.title}
                    </Typography>
                  </Grid>
                  <Grid xs={9} className={"px-0 py-0"}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={sxStyles["couponDate"]}
                    >
                      Expiration date:{" "}
                      {new Date(coupon.expireDate).toLocaleString("en-GB", {
                        year: "numeric",
                        month: "2-digit",
                        day: "numeric",
                      })}
                    </Typography>
                  </Grid>
                  <Grid xs={12} className={"py-3 d-flex justify-content-end"}>
                    {userId ? (
                      <p
                        style={{
                          border: "1px dashed black",
                          padding: 5,
                        }}
                        className={"m-0 pointer"}
                        onClick={() => {
                          copyCouponCodeToClipboard(coupon.code);
                        }}
                      >
                        {coupon.code}
                      </p>
                    ) : (
                      <a onClick={handleLoginWithEmail} className="ms-auto">
                        login to see code...
                      </a>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={3} className={"py-1 ps-4 pe-2 bgGray img"}>
                <Typography
                  component="p"
                  variant="h1"
                  gutterBottom
                  className={"textSecondary"}
                  sx={{ ...sxStyles["couponPercentage"], fontSize: "2.5rem" }}
                >
                  {coupon.amount}%
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCoupon;
