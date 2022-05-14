import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Modal,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    md: "50%",
    xs: "100%",
  },
  p: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background:'white'
};
import axios from "axios";
import Swal from "sweetalert2";
import { getUserDetails } from "../../redux/slices/userSlice";
import fetchLayoutData from "../../utiles/fetchLayoutData";

// components
import SiteLayout from "../../layouts/SiteLayout";

function Signup(props) {
  const { menuCategories, setting} = props;
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [enterConfirmCode, setEnterConfirmCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const [confirmCode, setConfirmCode] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = async (e) => {
    e?.preventDefault();
    if (password !== rePassword) {
      Swal.fire("", "re-password is not the same as passowrd", "error");
      return;
    }
    setLoading(true);

    await axios
      .post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/register", {
        email: email,
        name: name,
        password: password,
        rePassword: rePassword,
      })
      .then(async (res) => {
        setLoading(false);
        setErrorMessage([]);

        if (res.data.status == "success") {
          setEnterConfirmCode(true);
        }

        if (res.data.status == "error") {
          Swal.fire(
            "",
            "you already have an account on website try to signin",
            "info"
          );
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        if (err.response?.data?.error) {
          console.log(err.response?.data?.error);
          setErrorMessage(err.response?.data?.error);
        }
      });
  };
  const handleConfirm = async (e) => {
    e?.preventDefault();
    setLoading(true);
    await axios
      .post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/confirm", {
        email: email,
        code: confirmCode,
      })
      .then(async (res) => {
        setLoading(false);
        setErrorMessage([]);
        if (res.data.status == "error") {
          Swal.fire("", res.data.message, "error");
        } else {
          setCookie(
            "user",
            JSON.stringify({
              token: res.data.token,
              email: email,
            }),
            {
              path: "/",
              maxAge: 31560000, 
              sameSite: true,
            }
          );
          getUserDetails(dispatch, cookies);
          router.push("/panel/dashboard?success=true");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        if (err.response?.data?.error) {
          console.log(err.response?.data?.error);
          setErrorMessage(err.response?.data?.error);
        }
      });
  };
  const handleSendCodeAgain = async () => {
    setConfirmCode("");
    setLoading(true);

    await axios
      .post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/send-code", {
        email: email,
      })
      .then(async (res) => {
        setLoading(false);
        setErrorMessage([]);

        if (res.data.status == "success") {
          Swal.fire("", "code has sent to your email", "success");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        if (err.response?.data?.error) {
          console.log(err.response?.data?.error);
          setErrorMessage(err.response?.data?.error);
        }
      });
  };
  return (
    <SiteLayout menuCategories={menuCategories} setting={setting} noIndex={true}>
      <Modal
        keepMounted
        open={loading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress
            style={{ width: "5%", height: "5%", color: "#fff", m: "auto" }}
          />
        </Box>
      </Modal>

      <div className={"w-100 m-0 p-0 coupons blogs bloglist login"}>
        <Box className={"headerpanel"}></Box>
        <Container className={"py-5"}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
            className={"w-100 m-0 py-5"}
          >
            {enterConfirmCode ? (
              <>
                <Grid xs={12} className={"p-2"}>
                  <Typography
                    variant="h1"
                    fontSize={35}
                    fontWeight={"bolder"}
                    textAlign={"center"}
                  >
                    Enter Confirm Code
                  </Typography>
                </Grid>
                <Grid xl={6} lg={8} md={10} xs={12} className={"p-0 mx-auto"}>
                  <form onSubmit={handleConfirm}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{
                        xs: 1,
                        sm: 2,
                        md: 3,
                      }}
                      className={"w-100 m-0"}
                    >
                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"p-2 mx-auto"}
                      >
                        <TextField
                          onChange={(e) => {
                            setConfirmCode(e.target.value);
                          }}
                          id="standard-basic"
                          label="Confirm Code"
                          variant="standard"
                          className={"w-100"}
                        />
                      </Grid>

                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"px-2 pt-3 mx-auto"}
                      >
                        <Button className={"w-100 submit"} type="submit">
                          Confirm
                        </Button>
                      </Grid>
                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"px-2 pt-3 mx-auto"}
                      >
                        <Typography color="gray">
                          didnt receive the code?{" "}
                          <a onClick={handleSendCodeAgain}> Send again </a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </>
            ) : (
              <>
                <Grid xl={6} lg={8} md={10} xs={12} className={"p-0 mx-auto"}>
                  <form onSubmit={handleRegister}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{
                        xs: 1,
                        sm: 2,
                        md: 3,
                      }}
                      className={"w-100 m-0"}
                    >
                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"p-2 mx-auto"}
                      >
                        {Array.isArray(errorMessage?.name) ? (
                          <TextField
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                            className={"w-100"}
                            error
                            helperText={errorMessage?.name[0]}
                          />
                        ) : (
                          <TextField
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                            className={"w-100"}
                          />
                        )}
                      </Grid>
                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"p-2 mx-auto"}
                      >
                        {Array.isArray(errorMessage?.email) ? (
                          <TextField
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            className={"w-100"}
                            error
                            helperText={errorMessage?.email[0]}
                          />
                        ) : (
                          <TextField
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            className={"w-100"}
                            helperText="@email.com"
                          />
                        )}
                      </Grid>
                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"p-2 mx-auto"}
                      >
                        {Array.isArray(errorMessage?.password) ? (
                          <TextField
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            variant="standard"
                            className={"w-100"}
                            error
                            helperText={errorMessage?.password[0]}
                          />
                        ) : (
                          <TextField
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            variant="standard"
                            className={"w-100"}
                          />
                        )}
                      </Grid>

                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"p-2 mx-auto"}
                      >
                        {Array.isArray(errorMessage?.rePassword) ? (
                          <TextField
                            onChange={(e) => {
                              setRePassword(e.target.value);
                            }}
                            id="standard-basic"
                            label="Confirm password"
                            variant="standard"
                            type="password"
                            className={"w-100"}
                            error
                            helperText={errorMessage?.rePassword[0]}
                          />
                        ) : (
                          <TextField
                            onChange={(e) => {
                              setRePassword(e.target.value);
                            }}
                            id="standard-basic"
                            label="Confirm password"
                            variant="standard"
                            type="password"
                            className={"w-100"}
                          />
                        )}
                      </Grid>

                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"px-2 pt-3 mx-auto"}
                      >
                        <Button className={"w-100 submit"} type="submit">
                          Sign up
                        </Button>
                      </Grid>
                      <Grid
                        xl={7}
                        lg={8}
                        md={9}
                        xs={12}
                        className={"px-2 pt-3 mx-auto"}
                      >
                        <Typography color="gray">
                        Already have an account ?{" "}
                          <Link href="/auth/signin"> Sign in </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </div>
    </SiteLayout>
  );
}



export async function getServerSideProps({ query, req }) {
  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  return {
    props: {
      query,
      menuCategories,
      setting,
    },
  };
}

export default Signup;

